<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount">count++</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  setup() {
    let count = ref<number>(0)

    const stopWatch = watch(count, (curVal, oldVal) => {
      console.log(curVal, oldVal)
    })
    // <select onChange={this.selectChange}>
    //   <option value="1">部门1</option>
    //   <option value="2">部门2</option>
    // </select>
    // selectChange(value) {
    //   console.log(value);
    // }
    const stopWatchEffect = watchEffect(() => {
      console.log('stopWatchEffect', count.value)
    })

    function addCount(): void {
      count.value++
      if (count.value >= 5) {
        // 停止watch监听
        console.log('[停止watch监听]', count.value)
        stopWatch()
        // 停止watchEffect监听
        stopWatchEffect()
      }
    }
    return {
      count,
      addCount
    }
  }
})
</script>
