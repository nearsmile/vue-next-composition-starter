<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  setup() {
    // 响应式ref的类型定义方式
    const msg: Ref<string> = ref<string>('消息')

    return {
      msg
    }
  }
})
</script>
