<script>
import gsap from "gsap";
import Counter from "./Counter.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  data() {
    return {
      counters: [
        {
          angka: "100K",
          deskripsi: "Mitra Jempol Kios di tahun 2023",
        },
        {
          angka: "140",
          deskripsi: "Produk dan variasinya",
        },
        {
          angka: "100K",
          deskripsi: "Transaksi yang di layani pertahun",
        },
        {
          angka: "60",
          deskripsi: "Jumlah mitra Vendor",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollAnimation();
    this.counter();
  },
  methods: {
    scrollAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".box",
            start: " top center",
            end: "+=500",
          //  markers: true,
            duration:2,
            scrub: true,
            pin: true,
          },
        })
        .from(".text1", { x: innerWidth * 1, opacity: 0 })
        .from(".text2", { x: innerWidth * 1, opacity: 0 })
    },
    // counter
    counter() {
      gsap.timeline({
        scrollTrigger: {
            trigger: ".counter-box",
            scrub: true,

          },
      }).from(".counter", {
        textContent: 0,
        duration: 4,
        //ease: easeIn,
        snap: { textContent: 1 },
        stagger: 1,
        // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      });
    },
  },
  components: {
    Counter,
  },
};
</script>
<template>
 
  <div
    class="
      box
      relative
      overflow-hidden
      min-h-screen
      flex flex-col
      items-center
      justify-center
      max-w-screen-xl
      mx-auto
      px-4
    "
  >
    <div class="mb-16 text-center max-w-lg">
      <h1 class="text1 text-6xl font-bold text-secondary">What We Do</h1>
      <p class="text2">
        Memberdayakan individu menjadi UMKM Digital dan mendapatkan pendapatan
        ekstra melalu penjualan produk digital
      </p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 counter-box">
      <div v-for="item in counters" :key="item">
        <Counter :angka="item.angka" :deskripsi="item.deskripsi" class="" />
      </div>
    </div>
  </div>

</template>