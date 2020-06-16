<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import EmitsLink from './emits.vue'
interface stateInterface {
  msg: string
  count: number
}

export default defineComponent({
  components: { EmitsLink },
  setup() {
    // 响应式reactive对象的类型定义方式，配合接口interface使用
    const state: stateInterface = reactive<stateInterface>({
      msg: '消息',
      count: 0
    })

    const onSubmit = (val: any) => {
      console.log('接收emit事件', val)
    }

    return {
      ...toRefs(state),
      onSubmit
    }
  }
})
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ count }}</p>
    <emits-link @submit="onSubmit" msg="可点击消息" />
  </div>
</template>
