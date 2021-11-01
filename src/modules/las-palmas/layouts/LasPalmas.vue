<template>
  <header>
    <Navbar />
  </header>

  <main class="md:container md:mx-auto">
    <router-view/>
  </main>
</template>

<script>
  import Navbar from '@/modules/las-palmas/components/Navbar.vue'
  export default {
    name: 'LasPalmasLayout',
    components: {
      Navbar
    }
  }
</script>
