<script setup>
import BtnPrimary from './button/BtnPrimary.vue';
import { useRouter, useRoute } from 'vue-router'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper";
const router = useRouter()
const slides = [
        {
          id: 1,
          bg: "slideshow/ss1.jpg",
          title: "Loremipsum sit amet",
          descrition:
            "Consectetur adipisicing elit. Sunt, molestiae cum blanditiis quos sed.",
          btn:"Lebih lanjut",
          btnLink:'#'
        },
        {
          id: 2,
          bg: "slideshow/ss3.jpg",
          title: "Molestias similique est",
          descrition: " iste illo ratione iusto qui asperiores! Voluptatum totam beatae eum est.",
          btn:"Lebih lanjut",
          btnLink:'/about'
        },
      ]

  </script>
<template>
    <div class="max-w-screen-xl  mx-auto px-4">
      <swiper
      :slidesPerView="1"
      :loop="true"
      :mousewheel="false"
      :autoplay="{delay: 2500, disableOnInteraction: false}"
      :speed="1200"
      :pagination="{
        clickable: true,
      }"
      :modules="[Mousewheel, Pagination, Autoplay]"
      class="mySwiper rounded-xl overflow-hidden"
    >
    <SwiperSlide
      v-for="slide in slides"
      :key="slide"
      class="bg-slate-100 min-h-[480px] p-5 flex items-end"
      :style="{ background: 'url(' + slide.bg + ')', backgroundSize:'cover' }"
    >
      <div class="slide-caption p-5 text-white">
        <h2 class="text-5xl text-white font-semibold">{{ slide.title }}</h2>
        <p class="text-lg text-white mb-6">{{ slide.descrition }}</p>
       <btn-primary @click="router.push(slide.btnLink)"> {{ slide.btn }}</btn-primary>
    </div>
    </SwiperSlide>
      </swiper>
</div>
</template>
  <style scoped>
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, 
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 var(--swiper-pagination-bullet-horizontal-gap,4px);
  background-color: #332fd0;
	width: 30px;
	height: 10px;
	border-radius: 10px;
}

</style>