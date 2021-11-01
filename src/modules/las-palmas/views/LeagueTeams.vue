<template>
    <h1 class="text-3xl font-bold text-red-500 my-3 text-center">Listado de equipos de: {{ nameLeague }}</h1>
    <div class="flex flex-wrap justify-center w-full mt-3 mb-5">
      <template v-if="!isLoading">
        <div
          class="mx-3"
          v-for="(team) in teams" :key="team.id"
        >
          <Team :team="team" @goTeamsPlayers="goTeamsPlayers" :isEditabled="isEditabled" />
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

<script setup>
  import { defineProps } from 'vue'
  import useLeagueTeams from "../composables/useLeagueTeams"
  import spinner from "@/components/spinner.vue"
  import Team from "../components/Team.vue"
  import Pagination from "../components/Pagination.vue"

  const props = defineProps({
    id: String,
    name: String
  })
  const {
    nameLeague,
    teams,
    isLoading,
    pagination,
    isEditabled,

    prevPage,
    nextPage,
    goTeamsPlayers
  } = useLeagueTeams(props)
</script>