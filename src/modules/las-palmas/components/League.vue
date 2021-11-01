<template>
  <div class="p-4 mx-4 mt-5 bg-white w-full md:w-56 justify-center items-center hover:shadow-xl px-6 flex flex-col">
    <img :src="logo" alt="img" title="img" class="rounded-full h-20 w-20 object-cover">
    <h4 class="mt-3 border-b-2 border-gray-300 mb-4">{{ name }}</h4>
    <div class="mb-2 text-center">
      <ButtonVue
        :data="name"
        textBtn="Ver equipos"
        @click.self="$emit('goLeagueTeams', { id, name })"
      />
    </div>
  </div>
</template>

<script>
  import { toRefs } from '@vue/reactivity'
  import ButtonVue from './Button.vue'

  export default {
    name: 'League',
    props: {
      league: {
          type: Object,
          required: true
      },
    },
    emits: ["goLeagueTeams"],
    components: {
      ButtonVue
    },
    setup(props) {
      const { id, "Logo de la Liga": logo, "Nombre De La Liga": name } = toRefs(props.league);
      return {
        id,
        logo,
        name,
      };
    },
  }
</script>