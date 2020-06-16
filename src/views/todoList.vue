<template>
  <div>
    todoList
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getRequest } from '../axios/index.ts'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const count = ref(store.getters.count)
    console.log(count.value)
    onMounted(() => {
      // getRequest({
      //   url: 'api'
      // })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    })
  }
})
</script>
