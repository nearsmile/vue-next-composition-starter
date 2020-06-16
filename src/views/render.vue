<script lang="ts">
// watch, watchEffect,
import { defineComponent, h, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const obj = reactive({ foo: 'bar' })
    return () => h('div', [count.value, obj.foo])
  }
})
</script>
