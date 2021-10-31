<template>
  <div class="p-4 mx-4 mt-5 bg-white w-full md:w-56 justify-center items-center hover:shadow-xl px-6 flex flex-col">
    <img :src="avatar" alt="img" title="img" class="rounded-full h-20 w-20 object-cover">
    <h4 class="mt-3 border-b-2 border-gray-300 mb-4">{{ name }}</h4>
    <!-- <div class="mb-2 text-center">
      <ButtonVue
        :data="name"
        textBtn="Ver jugadores"
        @click.self="$emit('getTeamsById', { id, name })"
      />
    </div> -->
  </div>
</template>

<script>
  import { toRefs } from '@vue/reactivity'
  // import ButtonVue from './Button.vue'

  export default {
    name: 'Player',
    props: {
      player: {
          type: Object,
          required: true
      },
    },
    // emits: ["getTeamsById"],
    components: {
      // ButtonVue
    },
    setup(props) {
      const { id, Avatar: avatar, "Nombre del Jugador": name } = toRefs(props.player);
      return {
        id,
        avatar,
        name,
      };
    },
  }
</script>