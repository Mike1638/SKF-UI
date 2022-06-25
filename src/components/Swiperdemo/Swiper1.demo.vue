<demo>
基础用法
</demo>
<template>
    <Swiper>
        <Swiperitem v-for="item in list" :key="item" >
            <img :src="item.img" />
        </Swiperitem>
    </Swiper>
</template>

<script lang="ts">
import {ref,provide} from "vue"
import Swiper  from '../../lib/Swiper.vue'
import Swiperitem  from '../../lib/Swiperitem.vue'
export default {
components: {  Swiper, Swiperitem},
setup(){
    const  list=ref( [
        { img: '../../public/img/1.png' },
        { img: '../../public/img/2.png' },
        { img: '../../public/img/3.png' },
        { img: '../../public/img/4.png' },
        { img: '../../public/img/5.png' },
    ])
    provide('list',list)
    return {list, Swiper, Swiperitem}
    },
}
</script>