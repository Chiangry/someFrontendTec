<template>
  <div>
    <el-button @click="toVirtualList">虚拟列表</el-button>
    <el-button @click="toCssAbout">css相关练习</el-button>

  </div>
</template>

<script setup> 
import { useRouter } from 'vue-router';
const router = useRouter()

const toVirtualList = () => {
  router.push('/virtualList')
}
const toCssAbout = () => {
  router.push('/cssAbout')
}

</script>


<style lang="scss">

</style>