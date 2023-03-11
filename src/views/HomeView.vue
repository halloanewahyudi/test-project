<script setup>
import AboutSection from '../components/homepage/AboutSection.vue';
import CoverSection from '../components/homepage/CoverSection.vue';
import AboutText from '../components/homepage/AboutText.vue';
import PaketSection from '../components/homepage/PaketSection.vue';
import ServiceSection from '../components/homepage/ServiceSection.vue';
import { ref, onMounted, watch } from 'vue';
import { useMouse } from '@vueuse/core';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const { x, y } = useMouse()
const about = ref(null)
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  intro()
})
const intro = () => {
  const items = document.querySelectorAll(".num");
  gsap.timeline({
    duration: 3,
    ease: 'linear',
    scrollTrigger: {
      trigger: ".cover",
      start: "top",
      end: "bottom center",
    //  markers: true,
      scrub: 1,
      pin: true,
    }
  }).from('#intro', {
    opacity: 1,
  })
    .from('#about', {
      duration: 3,
      scale: 0.5,
      opacity: 0,
      snap:1,

    }).from(items, {
      textContent: 0,
      duration: 2,
      delay: -1,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: 1,
      // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    })
    .to('#intro', {
      opacity: 0
    }).from('#sec3', {
      delay: 1,
      opacity: 0,
    })
}

</script>
<template>
  <main id="cover" class="cover h-[200vh] ">
    <section id="intro"
      class="min-h-screen w-full fixed top-0 left-0 flex flex-col justify-center bg-gradient-to-t from-indigo-200 to-blue-200">
      <div class="container mx-auto px-6">
        <CoverSection />
      </div>
    </section>
    <section id="about" class="min-h-screen w-full  bg-gradient-to-tr from-indigo-900 to-indigo-700 text-indigo-200">
      <div class="container mx-auto px-6">
        <AboutSection>
          <div class="counter flex gap-5  mb-4 ">
            <div class="p-4 text-center border-2  border-yellow-400 ">
              <h2 class="text-5xl num border-b border-yellow-400 pb-3 mb-2">800</h2>
              <h4 class="text-xl">Project</h4>
            </div>
            <div class="p-4 text-center  border-2  border-yellow-400">
              <h2 class="text-5xl num border-b  border-yellow-400 pb-3 mb-2">360</h2>
              <h4 class="text-xl">Klien</h4>
            </div>
          </div>
          <AboutText />
         
        </AboutSection>
      </div>
    </section>
    <section id="sec3" class="min-h-screen flex justify-center items-center bg-dangerHover">
      <div class="container mx-auto px-6 text-center">
        <h1>Section-3</h1>
      </div>
    </section>
  </main>
</template>
