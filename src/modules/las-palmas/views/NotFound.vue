<template>
  <div class="flex flex-col items-center pt-10 h-screen">
    <h1 class="text-gray-600 text-8xl font-bold">Oooops!</h1>
    <h4 class="text-2xl text-gray-500 my-4">404 - Página no encontrada</h4>
    <router-link :to="{name: 'Laspalmas'}" class="text-blue-500 text-sm">Ir al inicio</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>