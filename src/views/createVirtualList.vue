<template>
  <div>
    <VirtualList :dataSource="state.dataSource" @getMoreData="handleGetMoreData"/>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import VirtualList from '../components/virtualList.vue'

const state = reactive({
  dataSource:[{id:0}]
})

const createData = () => {
  setTimeout(() => {
    for(let i=0; i<10; i++){
      const len = state.dataSource.length
      state.dataSource.push({
        id: len + 1
      })
    }
  }, 1000)
}

const handleGetMoreData = () => {
  console.log('xxxx');
  createData()
}

onMounted(() => {
  createData()
})

</script>
<style scoped>
</style>
