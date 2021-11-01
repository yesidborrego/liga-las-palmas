import { reactive, ref } from "vue"
import laspalmasApi from "@/api/lasPalmas"
import { useRouter } from 'vue-router'

const useLeagueTeams = ({ id, name }) => {
  const router = useRouter()
  const teams = ref([])
  const isLoading = ref(false)
  const idLeague = ref(null)
  const nameLeague = ref(null)
  const isEditabled = ref(false)
  const pagination = reactive({
    page: 1,
    limit: 5,
    totalPage: 2
  })

  const getTeams = async () => {
    isLoading.value = true
    idLeague.value = localStorage.getItem('leagueId')
    nameLeague.value = localStorage.getItem('leagueName')
    if(id) {
      localStorage.setItem('leagueId', id)
      localStorage.setItem('leagueName', name)
      idLeague.value = id
      nameLeague.value = name
    }
    try {
      const { data } = await laspalmasApi.get(`/leagues/${idLeague.value}/teams?_limit=${pagination.limit}&_page=${pagination.page}`)
      teams.value = data
      isLoading.value = false

    } catch (error) {
      console.log(error)
    }
  }

  const prevPage = () => {
    if(pagination.page > 1) {
      pagination.page = pagination.page - 1
      getTeams()
    }
  }

  const nextPage = () => {
      if (pagination.page < pagination.totalPage) {
        pagination.page = pagination.page + 1
        getTeams()
      }
  }

  getTeams()

  return {
    nameLeague,
    teams,
    isLoading,
    pagination,
    isEditabled,

    prevPage,
    nextPage,
    goTeamsPlayers: ( {id, name} ) => {
      if(id) router.push({ name: 'TeamsPlayers', params: { id, name } })
    }

  }
}

export default useLeagueTeams