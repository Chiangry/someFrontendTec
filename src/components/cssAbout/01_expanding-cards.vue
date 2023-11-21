<template>
    <div>
        <div>01 展开/收起图片</div>
        <div style="display:flex; justify-content: space-around; width:90vw; margin:auto" >
            <div v-for="item,index in imgList" :key="index" @click="clickImage(index)"
            :style="{'background-image': 'url('+item.url+')'}" class="image">
                <h3>{{item.text}}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const imgList = ref([
    {
        url: require('../../assets/壁纸1.jpg'),
        text: '灵笼'
    },
    {
        url:require('../../assets/壁纸2.jpg'),
        text:'马路车辆'
    },
    {
        url:require('../../assets/华理.jpg'),
        text:'升旗'
    },
    {
        url:require('../../assets/浪客剑心.png'),
        text:'想念'
    },
    {
        url:require('../../assets/刘亦菲1.png'),
        text:'刘亦菲'
    },
])

onMounted(() => {
    const dom = document.getElementsByClassName('image')[0]
    dom.classList.add('active')
})

const clickImage = (index) => {
    removeClass()
    const dom = document.getElementsByClassName('image')[index]
    dom.classList.add('active')
}

const removeClass = () => {
    const domList = document.querySelectorAll('.image')
    domList.forEach(item => {
        item.classList.remove('active')
    })
}

</script>

<style scoped>
.image{
    color: white;
    border-radius: 50px;
    margin:20px;
    height:80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 0.5;
    position: relative;
    cursor: pointer;
    transition: all 0.7s ease-in
}

.image h3{
    position:absolute;
    bottom:0;
    left:20px;
    opacity: 0;
}

.image.active{
    flex:5
}

.image.active h3{
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
}
</style>
