<template>
  <div class="mx-1 mt-5 bg-white w-full md:w-48 justify-center items-center hover:shadow-xl flex flex-col">
    <img :src="logo" alt="img" :title="name" class="rounded-full h-20 w-20 object-cover">
    <h4 class="mt-3 border-b-2 border-gray-300 font-bold text-gray-500">{{ name }}</h4>
    <h3 class="text-xs font-bold mb-3 mt-1 border-gray-300 text-yellow-400">{{ leagueName }}</h3>
    <div class="mb-2 text-center">
      <ButtonVue
        textBtn="Editar"
        textColor="gray"
        :textColorTono=500
        bgColorHover="gray"
        :bgColorHoverTono=400
        textColorHover="white"
        @click.self="$emit('teamSelectedId', id)"
      />
      <ButtonVue
        :data="name"
        textBtn="Ver jugadores"
        @click.self="$emit('getTeamsById', { id, name })"
      />
    </div>
  </div>
</template>

<script>
  import { toRefs } from '@vue/reactivity'
  import ButtonVue from './Button.vue'

  export default {
    name: 'Team',
    props: {
      team: {
          type: Object,
          required: true
      },
    },
    emits: ["getTeamsById", "teamSelectedId"],
    components: {
      ButtonVue
    },
    setup(props) {
      const { id, "Logo del Equipo": logo, "Nombre del equipo": name, leagueName } = toRefs(props.team);
      return {
        id,
        logo,
        name,
        leagueName
      };
    },
  }
</script>