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
import img1 from '../../../public/img/1.png'
import img2 from '../../../public/img/2.png'
import img3 from '../../../public/img/3.png'
import img4 from '../../../public/img/4.png'
import img5 from '../../../public/img/5.png'
export default {
components: {  Swiper, Swiperitem},
setup(){
    const  list=ref( [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
    ])
    provide('list',list)
    return {list, Swiper, Swiperitem}
    },
}
</script>