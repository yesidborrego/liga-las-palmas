<template>
  <h1 class="text-3xl font-bold text-red-500 my-4 text-center">Listado de ligas registradas</h1>
  <div class="flex flex-wrap justify-center w-ful">
    <template v-if="!isLoading">
      <div
        class="mx-3"
        v-for="(league) in leagues" :key="league.id"
      >
        <League :league="league" @goLeagueTeams="goLeagueTeams"/>
      </div>
    </template>
    <template v-else>
      <div class="pt-10">
        <spinner />
      </div>
    </template>
  </div>
</template>

<script setup>
  import spinner from '@/components/spinner.vue'
  import League from '../components/League.vue'
  import useLeagues from '../composables/useLeagues';

  const {
    isLoading,
    leagues,
    goLeagueTeams
  } = useLeagues()
</script>
