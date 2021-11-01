<template>
    <div class="text-center text-gray-40">
      <h1 class="text-3xl font-bold text-red-500 my-3">Listado de jugadores</h1>
      <input
        class="w-30 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border-b-2 appearance-none focus:outline-none border-gray-200 bg-transparent transition duration-500 ease-in-out focus-within:border-gray-400"
        type="text"
        placeholder="Jugador a buscar"
        v-model="searchQuery"
        @keypress.enter="searchPlayer"
      />
    </div>
    <div class="container md:flex mt-3">
      <aside class="px-4 md:flex-none md:w-72 mb-5 md:mb-0 text-center">
        <h2 class="px-4 py-2 mb-2 bg-yellow-500 text-white font-semibold">{{ textAction.titleForm }}</h2>
        <form @submit.prevent="onSubmitPlayer">
          <div>
            <input
              class="w-full md:w-30 px-3 py-2 my-3 text-sm leading-tight text-gray-700 border-b-2 appearance-none focus:outline-none border-gray-200 bg-transparent transition duration-500 ease-in-out focus-within:border-gray-400"
              type="text"
              placeholder="Nombre del jugador"
              v-model="playerForm.nameNewPlayer"
            />
          </div>
          <div>
            <input
              class="w-full md:w-30 px-3 py-2 my-3 text-sm leading-tight text-gray-700 border-b-2 appearance-none focus:outline-none border-gray-200 bg-transparent transition duration-500 ease-in-out focus-within:border-gray-400"
              type="text"
              placeholder="Foto del jugador"
              v-model="playerForm.logoNewPlayer"
            />
          </div>
          <div class="relative my-3">
            <select
              v-model="playerForm.teamId"
              class="block text-sm appearance-none w-full bg-gray-100 border border-gray-100 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-100"
            >
              <option disabled value="0">Seleccione un equipo</option>
              <option v-for="team in teams" :key="team.id" :value="team.id" >
                {{ team['Nombre del equipo'] }}
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <button
            class="bg-white text-blue-500 text-sm rounded w-24 h-8 hover:bg-blue-500 hover:text-white mt-2"
          >
            {{ textAction.btnForm }}
          </button>
          <button
            class="bg-white text-gray-400 text-sm rounded w-24 h-8 hover:bg-gray-500 hover:text-white mt-2"
            @click="clearInputs"
          >
            Limpiar
          </button>
        </form>
      </aside>

      <main class="px-4 md:px-4 mb-6 flex-grow h-96">
        <div class="flex flex-col justify-between">
          <div class="flex flex-wrap justify-center h-96 overflow-y-auto">
            <template v-if="!isLoading">
              <div
                class="mx-2 md:mx-0"
                v-for="(player) in players" :key="player.id"
              >
                <Player :player="player" @playerSelectedId="playerSelectedId" :isEditabled="true" />
              </div>
            </template>
            <template v-else>
              <div class="pt-10">
                <spinner />
              </div>
            </template>
          </div>
          <div class="mt-3">
            <Pagination
              @prevPage="prevPage"
              @nextPage="nextPage"
              :page="pagination.page"
              :totalPage="pagination.totalPage"
            />
          </div>
        </div>
      </main>
    </div>
</template>

<script setup>
  import spinner from "@/components/spinner.vue"
  import Player from "../components/Player.vue"
  import Pagination from "../components/Pagination.vue"
  import usePlayers from "../composables/usePlayers";

  const {
    playerForm,
    isLoading,
    searchQuery,
    players,
    teams,
    textAction,
    pagination,

    prevPage,
    nextPage,
    searchPlayer,
    onSubmitPlayer,
    clearInputs,
    playerSelectedId,
  } = usePlayers()
</script>