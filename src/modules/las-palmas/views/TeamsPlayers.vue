<template>
      <h1 class="text-3xl font-bold text-red-500 my-3 text-center">Listado de jugadores de: {{ nameTeam }}</h1>
      <div class="flex flex-wrap justify-center w-full mt-3 mb-5 h-full">
        <template v-if="!isLoading">
          <div
            class="mx-3"
            v-for="(player) in players" :key="player.id"
          >
            <Player :player="player" :isEditabled=false />
          </div>
        </template>
        <template v-else>
          <div class="pt-10">
            <spinner />
          </div>
        </template>
      </div>
      <Pagination @prevPage="prevPage" @nextPage="nextPage" :page="pagination.page" :totalPage="pagination.totalPage" />
</template>

<script>
  import spinner from "@/components/spinner.vue"
  import { onMounted, reactive, ref } from "vue"
  import laspalmasApi from "@/api/lasPalmas"
  import Player from "../components/Player.vue"
  import Pagination from "../components/Pagination.vue"

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
    components: {
      spinner,
      Player,
      Pagination
    },
    setup(props) {
      const players = ref([])
      const isLoading = ref(false)
      const idTeam = ref(null)
      const nameTeam = ref(null)
      const pagination = reactive({
        page: 1,
        limit: 6,
        totalPage: 2
      })

      const getPlayers = async () => {
        isLoading.value = true
        idTeam.value = localStorage.getItem('teamId')
        nameTeam.value = localStorage.getItem('teamName')
        if(props.id) {
          localStorage.setItem('teamId', props.id)
          localStorage.setItem('teamName', props.name)
          idTeam.value = props.id
          nameTeam.value = props.name
        }
        const { data } = await laspalmasApi.get(`/teams/${idTeam.value}/players?_limit=${pagination.limit}&_page=${pagination.page}`)
        data.map(player => {
          return player.teamName = nameTeam
        })
        players.value = data
        isLoading.value = false
      }

      const prevPage = () => {
        if(pagination.page > 1) {
          pagination.page = pagination.page - 1
          getPlayers()
        }
      }

      const nextPage = () => {
        if (pagination.page < pagination.totalPage) {
          pagination.page = pagination.page + 1
          getPlayers()
        }
      }

      onMounted(() => {
        getPlayers()
      })

      return {
        nameTeam,
        players,
        isLoading,
        pagination,

        prevPage,
        nextPage
      }
    }
  }
</script>