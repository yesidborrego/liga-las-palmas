<template>
  <div class="mx-1 mt-5 bg-white w-full md:w-48 justify-center items-center hover:shadow-xl flex flex-col">
    <img :src="avatar" alt="img" title="avatar" class="rounded-full h-20 w-20 object-cover">
    <h4 class="mt-3 border-b-2 border-gray-300 font-bold text-gray-500">{{ name }}</h4>
    <h3 class="text-xs font-bold mb-3 mt-1 border-gray-300 text-yellow-400" title="Nombre equipo">{{ teamName }}</h3>
    <div class="mb-2 text-center" v-if="isEditabled">
      <ButtonVue
        textBtn="Editar"
        textColor="gray"
        :textColorTono=500
        bgColorHover="gray"
        :bgColorHoverTono=400
        textColorHover="white"
        @click.self="$emit('playerSelectedId', id)"
      />
      </div>
  </div>
</template>

<script>
  import { toRefs } from '@vue/reactivity'
  import ButtonVue from './Button.vue'

  export default {
    name: 'Player',
    props: {
      player: {
          type: Object,
          required: true
      },
      isEditabled: {
        type: Boolean,
        required: true
      }
    },
    emits: ["playerSelectedId"],
    components: {
      ButtonVue
    },
    setup(props) {
      const { id, Avatar: avatar, "Nombre del Jugador": name, teamName } = toRefs(props.player);
      return {
        id,
        avatar,
        name,
        teamName
      };
    },
  }
</script>