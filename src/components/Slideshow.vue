<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
  </script>
<template>
    <div class="max-w-screen-xl  mx-auto px-4">
  <carousel
    :items-to-show="1"
    :autoplay="2000"
    :wrap-around="true"
    class=" rounded-xl overflow-hidden"
  >
    <slide
      v-for="slide in slides"
      :key="slide"
      class="bg-slate-100 "
      :style="{ background: 'url(' + slide.bg + ')', backgroundSize:'cover' }"
    >
      <div class="slide-caption">
        <h2 class="text-5xl text-white font-semibold">{{ slide.title }}</h2>
        <p class="text-lg text-white mb-6">{{ slide.descrition }}</p>
       <btn-primary @click="router.push(slide.btnLink)"> {{ slide.btn }}</btn-primary>
    </div>
    </slide>
    <template #addons>
      <navigation />
      <Pagination class="absolute z-30 left-1/2 bottom-6 max-w-max mx-auto" />
    </template>
  </carousel>
</div>
</template>
  
  <script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import BtnPrimary from '../components/button/BtnPrimary.vue'
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    BtnPrimary
  },
  data() {
    return {
      slides: [
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
      ],
    };
  },
};
</script>
 <style scoped>
.carousel__slide {
  min-height: 460px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.carousel__pagination-button::after {
	display: block;
	content: '';
	width: var(--vc-pgn-width);
	height: var(--vc-pgn-height);
	border-radius: var(--vc-pgn-border-radius);
	background-color: var(--vc-pgn-background-color);
}
.carousel__pagination-button.carousel__pagination-button--active{
    width: var(--vc-pgn-width-active) !important;
}
</style>
  