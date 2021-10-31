<template>
    <div class="text-center text-gray-40">
      <h1 class="text-3xl font-bold text-red-500 my-3">Listado de equipos</h1>
      <input
        class="w-30 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border-b-2 appearance-none focus:outline-none border-gray-200 bg-transparent transition duration-500 ease-in-out focus-within:border-gray-400"
        type="text"
        placeholder="Equipo a buscar"
        v-model="searchQuery"
      />
    </div>
    <div class="container md:flex mt-3">
      <aside class="px-4 md:flex-none md:w-72 mb-5 md:mb-0 text-center">
        <h2 class="px-4 py-2 mb-2 bg-yellow-500 text-white font-semibold">{{ textAction.titleForm }}</h2>
        <form @submit.prevent="onSubmitTeam">
          <div>
            <input
              class="w-full md:w-30 px-3 py-2 my-3 text-sm leading-tight text-gray-700 border-b-2 appearance-none focus:outline-none border-gray-200 bg-transparent transition duration-500 ease-in-out focus-within:border-gray-400"
              type="text"
              placeholder="Nombre del equipo"
              v-model="teamModel.nameNewTeam"
            />
          </div>
          <div>
            <input
              class="w-full md:w-30 px-3 py-2 my-3 text-sm leading-tight text-gray-700 border-b-2 appearance-none focus:outline-none border-gray-200 bg-transparent transition duration-500 ease-in-out focus-within:border-gray-400"
              type="text"
              placeholder="Logo del equipo"
              v-model="teamModel.logoNewTeam"
            />
          </div>
          <div class="relative my-3">
            <select
              v-model="teamModel.leaguesId"
              class="block text-sm appearance-none w-full bg-gray-100 border border-gray-100 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-100"
            >
              <option disabled value="0">Seleccione una liga</option>
              <option v-for="league in leagues" :key="league.id" :value="league.id" >
                {{ league['Nombre De La Liga'] }}
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <button
            class="bg-white text-blue-500 text-sm rounded w-24 h-8 hover:bg-blue-500 hover:text-white mt-2"
          >
            {{ textAction.btnForm }}
          </button>
          <button
            class="bg-white text-gray-400 text-sm rounded w-24 h-8 hover:bg-gray-500 hover:text-white mt-2"
            @click="clearInputs"
          >
            Limpiar
          </button>
        </form>
      </aside>

      <main class="px-4 mb-6 flex-grow h-96 overflow-y-auto">
        <div class="flex flex-wrap justify-center">
          <template v-if="!isLoading">
            <div
              class="mx-2 md:mx-0"
              v-for="(team) in searchTeam" :key="team.id"
            >
              <Team :team="team" @getTeamsById="getTeamsById" @teamSelectedId="teamSelectedId" />
            </div>
          </template>
          <template v-else>
            <div class="pt-10">
              <spinner />
            </div>
          </template>
        </div>
      </main>
    </div>
</template>

<script setup>
  import spinner from "@/components/spinner.vue"
  import Team from "../components/Team.vue"
  import useTeams from "../composables/useTeams";

  const {
    teamModel,
    isLoading,
    searchQuery,
    searchTeam,
    leagues,
    textAction,

    onSubmitTeam,
    getTeamsById,
    clearInputs,
    teamSelectedId
  } = useTeams()




  // import { v4 as uuid } from 'uuid'
  // import spinner from "@/components/spinner.vue"
  // import { computed, reactive, ref } from "vue"
  // import { useRouter } from "vue-router"
  // import laspalmasApi from "../../../api/lasPalmas"
  // import Team from "../components/Team.vue"

  // export default {
  //   name: 'Teams',
  //   components: {
  //     spinner,
  //     Team
  //   },
  //   setup() {
  //     const router = useRouter()
  //     const teams = ref([])
  //     const leagues = ref([])
  //     const isLoading = ref(false)
  //     const searchQuery = ref('')
  //     const textAction = reactive({
  //       titleForm: 'Agregar Equipo',
  //       btnForm: 'Agregar'
  //     })
  //     const teamModel = reactive({
  //       teamId: null,
  //       nameNewTeam: '',
  //       logoNewTeam: 'https://robohash.org/sitautemofficiis.png?size=250x250&set=set1',
  //       leaguesId: 0,
  //     })

  //     const getTeams = async () => {
  //       isLoading.value = true
  //       try {
  //         const { data } = await laspalmasApi.get('/teams')
  //         teams.value = data
  //         const { data: dataLeagues } = await laspalmasApi.get('/leagues')
  //         leagues.value = dataLeagues
  //         isLoading.value = false

  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }

  //     const searchTeam = computed(() => {
  //       return teams.value.filter(team => {
  //         return (
  //             // team['Nombre del equipo'].toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
  //             team['Nombre del equipo'].toLowerCase().includes(searchQuery.value.toLowerCase())
  //         )
  //       })
  //     })

  //     const onSubmitTeam = async () => {
  //       if(teamModel.leaguesId !== 0 && teamModel.nameNewTeam) {
  //         let payload = {
  //           id: null,
  //           "Nombre del equipo": teamModel.nameNewTeam,
  //           "Logo del Equipo": teamModel.logoNewTeam,
  //           leagueId: teamModel.leaguesId
  //         }
  //         try {
  //           if(textAction.btnForm === 'Agregar') {
  //             payload.id = uuid()
  //             await laspalmasApi.post('/teams', payload)
  //           } else {
  //             payload.id = teamModel.teamId
  //             await laspalmasApi.put(`/teams/${payload.id}`, payload)
  //           }
  //           getTeams()
  //           clearInputs()
  //         } catch (error) {
  //           console.log(error)
  //         }
  //       }
  //     }

  //     const teamSelectedId = (id) => {
  //       const data = teams.value.filter(team => {
  //         return (team.id.toLowerCase().indexOf(id.toLowerCase()) != -1)
  //       })[0]
  //       teamModel.teamId = data.id
  //       teamModel.nameNewTeam = data['Nombre del equipo']
  //       teamModel.logoNewTeam = data['Logo del Equipo']
  //       teamModel.leaguesId = data.leagueId
  //       textAction.titleForm = "Editar Equipo"
  //       textAction.btnForm = 'Editar'
  //     }

  //     const clearInputs = () => {
  //         teamModel.nameNewTeam = ''
  //         teamModel.leaguesId = 0,
  //         teamModel.logoNewTeam = 'https://robohash.org/sitautemofficiis.png?size=250x250&set=set1'
  //         teamModel.teamId = 0
  //         textAction.titleForm = "Agregar Equipo"
  //         textAction.btnForm = 'Agregar'
  //       }

  //     getTeams()

  //     return {
  //       teamModel,
  //       isLoading,
  //       searchQuery,
  //       searchTeam,
  //       leagues,
  //       textAction,

  //       onSubmitTeam,
  //       getTeamsById: ({ id, name }) => {
  //         if(id) router.push({ name: 'TeamsPlayers', params: { id, name } })
  //       },
  //       clearInputs,
  //       teamSelectedId
  //     }
  //   }
  // }
</script>