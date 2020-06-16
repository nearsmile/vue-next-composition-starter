<script lang="ts">
import { defineComponent } from 'vue'
import useMousePosition from '../hooks/useMousePosition.ts'

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition()
    return {
      x,
      y
    }
  }
})
</script>

<template>
  <div>X:{{ x }}, Y: {{ y }}</div>
</template>
