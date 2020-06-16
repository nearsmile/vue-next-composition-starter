<template>
  <div id="app">
    <header class="header-link">
      <router-link
        class="link"
        :key="index"
        v-for="(item, index) in links"
        :to="item.to"
        >{{ item.name }}
      </router-link>
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, context) {
    const links = [
      { name: '单个响应变量', to: '/' },
      { name: '多个响应变量', to: '/reactive' },
      { name: '生命周期', to: '/lifeCycle' },
      { name: '计算', to: '/computed' },
      { name: '监听', to: '/watch' },
      { name: '依赖注入', to: '/provide' },
      { name: '父子传值', to: '/parent' },
      { name: 'vuex', to: '/vuex' },
      { name: 'todoList', to: '/todoList' },
      { name: 'render', to: '/render' }
    ]

    return { links }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  color: #666;
  font-size: 16px;
  margin-right: 15px;
  &:active {
    color: #000;
    font-weight: bold;
  }
}

.header-link {
  width: 96%;
  margin: 20px 2%;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.router-link-active {
  position: relative;
  color: #000;
  font-weight: bold;
  border-bottom: 1px solid #999;

  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    color: #999;
    animation: borderAnimate 2s;
    transform-origin: center;
  } */
}

@keyframes borderAnimate {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
