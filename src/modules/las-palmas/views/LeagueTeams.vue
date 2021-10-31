<template>
    <h1>id: {{ id }}</h1>
</template>

<script>
  export default {
    name: 'LeagueTeams',
    props: {
      id: {
        type: String,
        required: true
      },
    },
  }
</script>