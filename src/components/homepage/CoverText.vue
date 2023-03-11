<template>
    <div>
        <div class="text-center relative w-full p-6">
            <div id="textCover" class="text-cover ">
                <h1 id="title" class="text-4xl font-bold text-white">
                    {{ cover.title }}
                </h1>
                <h4 id="subTitle"
                    class="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-rose-600 to-indigo-800">
                    {{ cover.sub_title }}</h4>
                <h4 id="tagline" class="text-2xl text-indigo-800">{{ cover.tagline }}</h4>
                <p id="since" class="p-3 bg-gradient-to-tr from-indigo-800 to-indigo-700 rotate-2 inline-block text-indigo-200 ">{{ cover.since }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import gsap from 'gsap'
import { ref,onMounted } from "vue"
const cover = ref({
    title: 'Profesional',
    sub_title: 'Web Design & Developer',
    tagline: 'We colorize your web passion & creativity',
    since: 'Since 2000'
})
onMounted(() => {
    gsap.timeline({
        ease:'linear',
        duration:1,
    }).from('#title', {
        opacity:0,
    }).from('#subTitle', {
        opacity:0,
    }).from('#tagline', {
        opacity:0,
    }).from('#since', {
        opacity:0,
        translateY:'5px',
        rotate:0,
        scale:2,
        ease:'bounce'
    })
})
</script>