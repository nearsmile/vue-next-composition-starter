<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ count }}</p>
    <p>{{ count1 }}</p>
    <coord />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ComputedRef } from 'vue'
import coord from './coord.vue'
interface stateInterface {
  msg: string
  count: number
}

export default defineComponent({
  components: {
    coord
  },
  setup() {
    // 响应式reactive对象的类型定义方式，配合接口interface使用
    const state: stateInterface = reactive<stateInterface>({
      msg: '消息',
      count: 1
    })
    // computed类型定义的方式
    // ComputedRef是计算属性的泛型接口
    const count1: ComputedRef<number> = computed<number>(() => state.count * 2)

    return {
      ...toRefs(state),
      count1
    }
  }
})
</script>
