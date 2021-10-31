<template>
  <button
        :class="[
          bgColor === 'transparent' ? `bg-${bgColor}` : `bg-${bgColor}-${bgColorTono}`,
          bgColorHover === 'transparent' ? `hover:bg-${bgColorHover}` : `hover:bg-${bgColorHover}-${bgColorHoverTono}`,
          textColor === 'white' ? `text-${textColor}` : `text-${textColor}-${textColorTono}`,
          textColorHover === 'white' ? `hover:text-${textColorHover}` : `hover:text-${textColorHover}-${textColorHoverTono}`,
          'rounded-md',
          'px-4',
          'h-6',
          'text-xs'
        ]"
        @click.self="$emit('clickBtn', data ? data : null)"
        >
          {{ textBtn }}
        </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      textBtn: {
        type: String
      },
      textColor: {
        type: String,
        default: 'blue'
      },
      textColorTono: {
        type: Number,
        default: 500
      },
      textColorHover: {
        type: String,
        default: 'white'
      },
      textColorHoverTono: {
        type: Number,
      },
      bgColorTono: {
        type: Number,
        default: 500
      },
      bgColor: {
        type: String,
        default: 'transparent'
      },
      bgColorHover: {
        type: String,
        default: 'blue'
      },
      bgColorHoverTono: {
        type: Number,
        default: 500
      },
      data: {
        type: String,
        default: null
      }
    }
  }
</script>