<template>
  <div class="flex flex-col items-center justify-center h-screen bg-blue-300">
    <h1 class="text-white text-8xl font-bold">Oooops!</h1>
    <h4 class="text-2xl text-gray-500 my-4">404 - Página no encontrada</h4>
    <router-link :to="{name: 'Home'}" class="text-blue-500 text-sm">Ir al inicio</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>