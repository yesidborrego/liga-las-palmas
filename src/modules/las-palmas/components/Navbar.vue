<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 px-6 py-2">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- <img class="w-12 h-12 object-cover rounded-full" src="@/assets/escudo.png"> -->
      <img class="w-12 h-12 object-cover rounded-full" src="../../../assets/escudo.png">
      <span class="font-semibold text-xl tracking-tight">LLP</span>
    </div>
    <div class="block md:hidden" @click="openMenu">
      <button class="flex items-center px-3 py-2 rounded text-teal-200 border-teal-400 text-white hover:border-white">
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div id="menu" class="hidden w-full flex-grow md:flex md:items-center md:w-auto absolute md:relative top-20 md:top-0 left-0 bg-blue-500">
      <div class="md:flex-grow flex flex-col md:flex-row items-center">
        <router-link
          :to="{name: 'Home'}"
          class="inline-block relative text-gray-300 my-3 md:my-0 md:mb-0 hover:text-white font-bold"
        >
          Inicio
        </router-link>
        <router-link
          :to="{name: 'Leagues'}"
          class="text-gray-300 mb-3 md:my-0 md:mx-4 hover:text-white font-bold"
        >
          Ligas
        </router-link>
        <router-link
          :to="{name: 'Teams'}"
          class="text-gray-300 mb-3 md:my-0 md:mr-4 hover:text-white font-bold"
        >
          Equipos
        </router-link>
        <router-link
          :to="{name: 'Players'}"
          class="text-gray-300 mb-3 md:my-0 hover:text-white font-bold"
        >
          Jugadores
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>import { ref } from "@vue/reactivity"

  export default {
    name: 'Navbar',
    setup() {
      const isOpenMenu = ref('false')

      return {
        isOpenMenu,
        openMenu: () => {
          let menu = document.getElementById('menu')
          menu.classList.toggle('hidden')
          isOpenMenu.value = !isOpenMenu.value
        }
      }
    }
  }
</script>

<style scoped>
  .active {
      color: #FFF;
    }

  nav a {
    display: inline-block;
    position: relative;
  }

  nav a::before {
    background-color: #FFF;
    bottom: -8px;
    content: '';
    height: 3px;
    position: absolute;
    transition: 0.4s ease-out;
    width: 0%;
  }

  nav a:hover::before {
    width: 100%;
  }

</style>