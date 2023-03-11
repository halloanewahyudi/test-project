<template>
    <section id="cover" class="bg-gradient-to-b from-light to-white h-[2000px]">
        <div class="text-center px-4 flex flex-col justify-center items-center min-h-[80vh]">
            <div id="textCover" class="text-cover  z-10 fixed max-w-xl">
                <h1 id="title" class="text-4xl font-bold">
                    {{ cover.title }}
                </h1>
                <h4 id="subTitle"
                    class="text-6xl font-bold mb-4 text-transaparent bg-clip-text bg-gradient-to-tr from-primary to-danger">
                    {{ cover.sub_title }}</h4>
                <h4 id="tagline" class="text-2xl">{{ cover.tagline }}</h4>
                <p id="since">{{ cover.since }}</p>
            </div>
            <div id="ball"
                class="w-0 h-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden blur-lg bg-gradient-to-tr from-secondary to-dangerHover transition-all duration-500 ease-linear"
                ref="ball">
                <div class="p-10 rounded-full overflow-hidden">
                    <video-background src="intro/color.mp4" class="w-screen h-screen rounded-full ">
                    </video-background>
                </div>

            </div>
        </div>
    </section>
    <div id="porto" class="w-full min-h-screen bg-secondary fixed top-0 left-0 transition-all duration-500 ease-linear" >
        <div class="container mx-auto px-8">
            <div class="flex items-center gap-4">
                <div class="w-full md:w-1/2">
                    <h1>Lorem ipsum</h1>
                </div>
                <div class="w-full md:w-1/2">
                    <SlidePorto />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import VideoBackground from 'vue-responsive-video-background-player'
import { useMouse } from '@vueuse/core'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref, watch, onMounted, reactive, computed } from "vue"
import SlidePorto from './SlidePorto.vue'
const { x, y } = useMouse()
const ball = ref(null)
const cover = ref({
    title: 'Profesional',
    sub_title: 'Web Design & Developer',
    tagline: 'We colorize your web passion & creativity',
    since: 'Since 2000'
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
        ball.value.style.cssText = 'width:400px;height:400px'
        gsap.timeline({
            ease: 'linear'
        })
            .from('#title', {
                opacity: 0,
                duration: 1,
            })
            .from('#subTitle', {
                opacity: 0,
                duration: 1,
            })
            .from('#tagline', {
                opacity: 0,
                duration: 1,
            })
            .from('#since', {
                opacity: 0,
                duration: 1,
            }).from('#textCover', {
                opacity: 1
            }
            ).to('#textCover',{
                opacity:0,
                duration:2,
                ease: 'back',
                scrollTrigger: {
                    trigger: '#cover',
                    start: "top ",
                    end: "200px 50%",
                    scrub: true,
                }
            }).from('#porto',{
                opacity: 0,
                top:0,
                left:0,
                width:'100vw',
                height:'100vw',
                duration: 5,
                scrollTrigger:{
                    trigger:'#textCover',
                    start: "top ",
                    end: "200px 50%",
                    scrub: true,
                }
            })
})
watch([x, y], (newVal) => {
    const posx = newVal[0] + 'px'
    const posy = newVal[1] + 'px'
    ball.value.style.cssText = 'top:' + posy + ';left:' + posx + '; width:400px; height:400px; outline:none'

})
</script>