<template>
  <p>TamsPlayer Page</p>
  <p>id: {{ id }}</p>
  <p>Name: {{ name }}</p>
      <!-- <h1 class="text-3xl font-bold text-red-500 my-3 text-center">Listado de equipos de: {{ nameLeague }}</h1>
      <div class="flex flex-wrap justify-center w-full mt-3 mb-5">
        <template v-if="!isLoading">
          <div
            class="mx-3"
            v-for="(team) in teams" :key="team.id"
          >
            <TeamsList :team="team" @getLeagueById="getLeagueById"/>
          </div>
        </template>
        <template v-else>
          <div class="pt-10">
            <spinner />
          </div>
        </template>
      </div>
      <Pagination @prevPage="prevPage" @nextPage="nextPage" :page="pagination.page" /> -->
</template>

<script>
  // import spinner from "@/components/spinner.vue"
  // import { reactive, ref } from "vue"
  // import laspalmasApi from "@/api/lasPalmas"
  // import TeamsList from "../components/TeamsList.vue"
  // import Pagination from "../components/Pagination.vue"

  export default {
    name: 'TeamsPlayers',
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
//     components: {
//     spinner,
//     TeamsList,
//     Pagination
// },
//     setup(props) {
//       const teams = ref([])
//       const isLoading = ref(false)
//       const idLeague = ref(null)
//       const nameLeague = ref(null)
//       const pagination = reactive({
//         page: 1,
//         limit: 5
//       })

//       const getTeams = async () => {
//         isLoading.value = true
//         idLeague.value = localStorage.getItem('leagueId')
//         nameLeague.value = localStorage.getItem('leagueName')
//         if(props.id) {
//           localStorage.setItem('leagueId', props.id)
//           localStorage.setItem('leagueName', props.name)
//           idLeague.value = props.id
//         }
//         const { data } = await laspalmasApi.get(`/leagues/${idLeague.value}/teams?_limit=${pagination.limit}&_page=${pagination.page}`)
//         teams.value = data
//         isLoading.value = false
//       }

//       const prevPage = () => {
//         if(pagination.page > 1) {
//           pagination.page = pagination.page - 1
//           getTeams()
//         }
//       }

//       const nextPage = () => {
//           if (pagination.page !== 2) {
//             pagination.page = pagination.page + 1
//             getTeams()
//           }
//       }


//       getTeams()

//       return {
//         nameLeague,
//         teams,
//         isLoading,
//         pagination,

//         prevPage,
//         nextPage
//       }

//     }
  }
</script>