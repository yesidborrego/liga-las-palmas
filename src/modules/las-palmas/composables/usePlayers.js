import { onMounted, reactive, ref } from "vue"
import { v4 as uuid } from 'uuid'

import laspalmasApi from "@/api/lasPalmas"

const usePlayers = () => {
  const teams       = ref([])
  const players     = ref([])
  const isLoading   = ref(false)
  const searchQuery = ref('')
  const textAction  = reactive({
    titleForm: 'Agregar Jugador',
    btnForm: 'Agregar'
  })
  const playerForm  = reactive({
    playerId: null,
    nameNewPlayer: '',
    logoNewPlayer: 'https://robohash.org/sitautemofficiis.png?size=250x250&set=set1',
    teamId: 0,
  })
  const pagination  = reactive({
    page: 1,
    limit: 20,
    totalPage: 5
  })
  const urlRequest  = ref('all')

  const getTeams = async () => {
    const { data } = await laspalmasApi.get('/teams')
    teams.value = data
  }

  const getPlayers = async () => {
    const url = (urlRequest.value === 'all')
      ? `/players?_expand=team&_limit=${pagination.limit}&_page=${pagination.page}`
      : `/players?Nombre%20del%20Jugador_like=${searchQuery.value}&_expand=team&_limit=${pagination.limit}&_page=${pagination.page}`

    isLoading.value = true
    try {
      const { data: dataPlayers } = await laspalmasApi.get(url)
      players.value = formattedData(dataPlayers)
      players.value = dataPlayers
      isLoading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  const searchPlayer = async () => {
    pagination.page = 1
    urlRequest.value = searchQuery.value ? 'search' : 'all'
    getPlayers()
  }

  const onSubmitPlayer = async () => {
    if(playerForm.teamId !== 0 && playerForm.nameNewPlayer) {
      let payload = {
        id: null,
        "Nombre del Jugador": playerForm.nameNewPlayer,
        "Avatar": playerForm.logoNewPlayer,
        teamId: playerForm.teamId
      }
      try {
        if(textAction.btnForm === 'Agregar') {
          payload.id = uuid()
          await laspalmasApi.post('/players', payload)
        } else {
          payload.id = playerForm.playerId
          await laspalmasApi.put(`/players/${payload.id}`, payload)
        }
        getPlayers(urlRequest.value)
        clearInputs()

      } catch (error) {
        console.log(error)
      }
    }
  }

  const playerSelectedId = (id) => {
    const data = players.value.find(player => player.id.toLowerCase() === id.toLowerCase())
    playerForm.playerId       = data.id
    playerForm.nameNewPlayer  = data['Nombre del Jugador']
    playerForm.logoNewPlayer  = data.Avatar
    playerForm.teamId         = data.teamId
    textAction.titleForm      = "Editar Jugador"
    textAction.btnForm        = 'Editar'
  }

  const clearInputs = () => {
    urlRequest.value          = 'all'
    playerForm.nameNewPlayer  = ''
    playerForm.teamId         = 0,
    playerForm.logoNewPlayer  = 'https://robohash.org/sitautemofficiis.png?size=250x250&set=set1'
    playerForm.playerId       = 0
    textAction.titleForm      = "Agregar Jugador"
    textAction.btnForm        = 'Agregar'
  }

  const formattedData = (data) => {
    data.map(item => item.teamName = item.team['Nombre del equipo'])
    return data
  }

  const prevPage = () => {
    if(pagination.page > 1) {
      pagination.page = pagination.page - 1
      getPlayers()
    }
  }

  const nextPage = () => {
    if (players.value.length > 0) {
      pagination.page = pagination.page + 1
      getPlayers()
    }
  }

  onMounted(() => {
    getTeams()
    getPlayers()
  })

  return {
    playerForm,
    isLoading,
    searchQuery,
    players,
    teams,
    textAction,
    pagination,

    prevPage,
    nextPage,
    searchPlayer,
    onSubmitPlayer,
    clearInputs,
    playerSelectedId,
  }
}

export default usePlayers