<script>
import { computed, onMounted } from "vue";
import { HandThumbUpIcon, LockClosedIcon } from "@heroicons/vue/24/solid";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      list: [
        {
          title: "Founded in 2007, ",
          description: "we have more than 15 years experience in ",
        },
        {
          title: "Focus on customer 24/7",
          description:
            "with solid dedicated customer service team online/offline thru various chat channels",
        },
        {
          title: "Focus on product ",
          description: "Sell over 500++ hot in demand products ",
        },
        {
          title: "FLoyalty program ",
          description:
            "We reward our valued customers with various loyalty programs",
        },
      ],
    };
  },
  methods: {
    kotak() {
      gsap
        .timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".wcu",
            pin: true, // pin the trigger element while active
            scrub: true,
         //   markers: true,
            snap: {
              snapTo: "labels", // snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
            },
          },
        })
        .from(".kotak ", {
          scale: 0.3,
          rotation: 360,
          autoAlpha: 0,
          position: "fixed",
        })
        .addLabel("color")
        .from(".list_0", {
          autoAlpha: 0,
        })
        .addLabel("spin")
        .from(".list_1", {
          autoAlpha: 0,
        })
        .addLabel("spin")
        .from(".list_2", {
          autoAlpha: 0,
        })
        .addLabel("spin")
        .from(".list_3", {
          autoAlpha: 0,
        });
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.kotak();
  },
};
</script>
<template>
  <div class="wcu min-h-screen bg-primary bg-opacity-5 py-32">
    <div class="max-w-screen-lg mx-auto">
      <div class="flex flex-wrap">
        <div class="p-8 kiri w-full lg:w-3/4">
          <h1 class="text-6xl font-bold text-primary mb-10">Whay Choose Us</h1>
          <ul class="">
            <li
              v-for="(item, index) in list"
              :key="item"
              class="mb-6 list"
              :class="'list_' + index"
            >
              <h4 class="text-5xl font-bold">{{ item.title }}</h4>
              <p class="text-2xl font-semibold text-gray">
                {{ item.description }}
              </p>
            </li>
          </ul>
        </div>
        <div class="kanan w-full lg:w-1/4 flex items-center">
          <div class="kotak">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#0002a1" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>