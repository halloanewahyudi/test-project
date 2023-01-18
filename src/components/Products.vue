

  <script>
import CusCrusor from "./CusCrusor.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default {
  data() {
    return {
      products: [
        {
          judul: "Product 1",
          deskripsi:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          image: "slideshow/ss1.jpg",
        },
        {
          judul: "Product 2",
          deskripsi:
            "Saepe atque recusandae numquam nemo dolor cupiditate voluptates quos optio nulla earum.",
          image: "slideshow/ss2.jpg",
        },
        {
          judul: "Product 3",
          deskripsi:
            "  Voluptatum quidem impedit error accusamus totam. Quod dolorum maiores ratione.",
          image: "slideshow/ss3.jpg",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    CusCrusor,
  },
  setup() {
    return {
      modules: [Mousewheel],
    };
  },
};
</script>
 
<template>
  <CusCrusor>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide
        v-for="item in products"
        :key="item"
        class="min-h-[80vh] bg-gradient-to-tr from-primary to-secondary text-white flex gap-x-5 items-center"
      >
        <div
          class="kiri bg-secondary w-full h-full block min-h-[80vh]"
          :style="{
            background: `url(${item.image})`,
            backgroundSize: 'cover',
          }"
        ></div>
        <div class="kanan p-6 w-full lg:p-6">
          <h1 class="text-6xl font-bold">{{ item.judul }}</h1>
          <p class="mb-6 max-w-[80%]">{{ item.deskripsi }}</p>
          <button
            class="
              py-3
              px-6
              rounded-full
              text-xl
              bg-light
              text-primary
              hover:text-white hover:bg-gradient-to-tr hover:-translate-y-2 hover:shadow-lg
              from-dangerHover
              to-secondary
              transition
              duration-150
            "
          >
            View More
          </button>
        </div>
      </SwiperSlide>
    </swiper>
  </CusCrusor>
</template>
  