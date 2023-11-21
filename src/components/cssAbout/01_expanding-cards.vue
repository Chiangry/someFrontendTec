<template>
    <div>
        <div>01 展开/收起图片</div>
        <div style="display:flex;" >
            <div v-for="item,id in imgList" :key="id">
                <img style="width: 100px; height:100px; margin:20px" :src="item.url" >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const imgList = ref([
    {
        url: require('../../assets/壁纸1.jpg')
    },
    {
        url:require('../../assets/壁纸2.jpg')
    },
    {
        url:require('../../assets/华理.jpg')
    },
    {
        url:require('../../assets/浪客剑心.png')
    },
    {
        url:require('../../assets/刘亦菲1.png')
    },
])

</script>
