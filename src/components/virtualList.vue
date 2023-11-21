<template>
  <div>
    <div class="listContainer" ref="scrollContent">
      <div class="virtualList" :style="scrollStyle">
        <div class="list-item" v-for="item in renderList" :key="item.id">
          {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineProps, defineEmits, watch, onUnmounted } from "vue";
const props = defineProps({
  dataSource: [],
});
const emit = defineEmits(["getMoreData"]);

const startIndex = ref(0);
const viewHeight = ref(0);
const itemHeight = ref(100);
const scrollContent = ref();

const maxCount = computed(() => Math.ceil(viewHeight.value / itemHeight.value) + 1);
const endIndex = computed(() =>
  Math.min(startIndex.value + maxCount.value, props.dataSource.length - 1)
);
const renderList = computed(() =>
  props.dataSource.slice(startIndex.value, endIndex.value)
);

const handleResize = () => {
  viewHeight.value = scrollContent.value ? scrollContent.value.offsetHeight : 0;
};

const handleScroll = () => {
  const { scrollTop } = scrollContent.value;
  startIndex.value = Math.floor(scrollTop / itemHeight.value);
};

// 滚动样式设置
const scrollStyle = computed(() => ({
  height: `${
    itemHeight.value * (props.dataSource.length - startIndex.value)
  }px`,
  transform: `translate3d(0, ${itemHeight.value * startIndex.value}px, 0)`,
}));

onMounted(() => {
  scrollContent.value && scrollContent.value.addEventListener("scroll", handleScroll());
  window.addEventListener("resize", handleResize());
  handleResize();
});

onUnmounted(() => {
  scrollContent.value && scrollContent.value.removeEventListener("scroll", handleScroll());
  window.removeEventListener("resize", handleResize());
})

watch(() => endIndex.value, (newValue) => {
    if(newValue >= props.dataSource.length - 1){
        console.log("xxxx");
        emit('getMoreData')
    }
})
</script>
<style scoped>
.listContainer {
  height: 100%;
}
.list-item {
  height: 100px;
}
</style>
