import { computed, onMounted, reactive, ref } from "vue"
import { v4 as uuid } from 'uuid'
import { useRouter } from "vue-router"

import laspalmasApi from "../../../api/lasPalmas"

const useTeams = () => {
  const router      = useRouter()
  const teams       = ref([])
  const leagues     = ref([])
  const isLoading   = ref(false)
  const isEditabled = ref(true)
  const searchQuery = ref('')
  const textAction  = reactive({
    titleForm: 'Agregar Equipo',
    btnForm: 'Agregar'
  })
  const teamModel   = reactive({
    teamId: null,
    nameNewTeam: '',
    logoNewTeam: 'https://robohash.org/sitautemofficiis.png?size=250x250&set=set1',
    leaguesId: 0,
  })

  const getLeagues = async () => {
    const { data: dataLeagues } = await laspalmasApi.get('/leagues')
    leagues.value = dataLeagues
  }

  const getTeams = async () => {
    isLoading.value = true
    try {
      const { data } = await laspalmasApi.get('/teams')
      teams.value = formattedData(data)
      isLoading.value = false

    } catch (error) {
      console.log(error)
    }
  }

  const formattedData = (data) => {
    data.map(team => {
      const nameLeague = leagues.value.find(league => league.id.toLowerCase() === team.leagueId.toLowerCase())
      team.leagueName = nameLeague['Nombre De La Liga']
    })
    return data
  }

  const searchTeam = computed(() => {
    return teams.value.filter(team => {
      return (
          team['Nombre del equipo'].toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })
  })

  const onSubmitTeam = async () => {
    if(teamModel.leaguesId !== 0 && teamModel.nameNewTeam) {
      let payload = {
        id: null,
        "Nombre del equipo": teamModel.nameNewTeam,
        "Logo del Equipo": teamModel.logoNewTeam,
        leagueId: teamModel.leaguesId
      }
      try {
        if(textAction.btnForm === 'Agregar') {
          payload.id = uuid()
          await laspalmasApi.post('/teams', payload)
        } else {
          payload.id = teamModel.teamId
          await laspalmasApi.put(`/teams/${payload.id}`, payload)
        }
        getTeams()
        clearInputs()
      } catch (error) {
        console.log(error)
      }
    }
  }

  const teamSelected = (id) => {
    const data            = teams.value.find(team => team.id.toLowerCase() === id.toLowerCase())
    teamModel.teamId      = data.id
    teamModel.nameNewTeam = data['Nombre del equipo']
    teamModel.logoNewTeam = data['Logo del Equipo']
    teamModel.leaguesId   = data.leagueId
    textAction.titleForm  = "Editar Equipo"
    textAction.btnForm    = 'Editar'
  }

  const clearInputs = () => {
      teamModel.nameNewTeam = ''
      teamModel.leaguesId   = 0,
      teamModel.logoNewTeam = 'https://robohash.org/sitautemofficiis.png?size=250x250&set=set1'
      teamModel.teamId      = 0
      textAction.titleForm  = "Agregar Equipo"
      textAction.btnForm    = 'Agregar'
    }

    onMounted(() => {
      getLeagues()
      getTeams()
    })

  return {
    teamModel,
    isLoading,
    searchQuery,
    searchTeam,
    leagues,
    textAction,
    isEditabled,

    onSubmitTeam,
    clearInputs,
    teamSelected,
    goTeamsPlayers: ({ id, name }) => {
      if(id) router.push({ name: 'TeamsPlayers', params: { id, name } })
    },
  }
}
export default useTeams