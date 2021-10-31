<template>
  <div class="flex justify-center pt-10">
    <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img class="w-20 h-20 object-cover rounded-full border-2 border-yellow-500" src="../assets/escudo.png">
      </div>
      <div>
        <h2 class="text-gray-700 text-3xl font-semibold">Liga de las Palmas</h2>
        <h2 class="text-gray-500 text-2xl font-semibold mt-5">Bienvenido!</h2>
        <p class="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div class="flex justify-end mt-4">
        <!-- <p class="text-md font-bold text-gray-400">La Federación</p> -->
        <router-link
          :to="{name: 'Leagues'}"
          class="text-md font-bold text-blue-500 hover:text-white hover:bg-blue-500 px-3 pt-1 h-8 rounded-md"
        >
          Ingresar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>
