<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: {
    submit: (payload: string) => {
      console.log('[emits选项: submit]', payload)
      if (!payload) return false
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const onMsg = val => {
      context.emit('submit', '点击标题事件')
      console.log('[点击标题事件]')
    }

    return {
      onMsg
    }
  }
})
</script>
<template>
  <div class="child-msg" @click="onMsg">
    {{ msg }}
  </div>
</template>
