<template>
  <div class="bg-gray-100 px-4 py-4 flex items-center border-t border-gray-200">
    <div class="flex-1 flex justify-between">
      <div>
        <p class="text-xs inline-flex items-center text-gray-500">Mostrando {{ page }} de 2 páginas</p>
      </div>
      <div class="flex text-xs">
        <button
          class="relative inline-flex items-center rounded-md text-xs px-1 py-2 md:px-4 md:py-2 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white"
          @click.self="$emit('prevPage')"
        >
          Previous
        </button>
        <button
          class="ml-1 md:ml-3 relative inline-flex items-center text-xs rounded-md px-1 py-2 md:px-4 md:py-2 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white"
          @click.self="$emit('nextPage')"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    emits: ['prevPage', 'nextPage'],
    props: {
      page: {
        type: Number,
        required: true
      }
    }
  }
</script>