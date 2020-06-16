import { reactive, onMounted, onBeforeUnmount, toRefs } from 'vue';

interface Position {
  x: number;
  y: number;
}

export default function useMousePosition() {
  const position: Position = reactive<Position>({
    x: 0,
    y: 0
  });

  function getPosition(e: MouseEvent):void {
    position.x = e.pageX;
    position.y = e.pageY;
  }

  // 组件挂载后
  onMounted(() => {
    window.addEventListener('mousemove', getPosition);
  });

  // 组件卸载前
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', getPosition);
  });

  // 防止外部结构丢失响应式，使用toRefs包裹
  return toRefs<Position>(position);
}