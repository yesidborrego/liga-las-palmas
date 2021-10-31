<template>
  <Navbar />
  <div class="md:container md:mx-auto">
    <router-view/>
  </div>
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
