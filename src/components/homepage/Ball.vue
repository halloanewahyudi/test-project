<template>
    <div id="ball"
        class="fixed w-0 h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden blur-lg bg-gradient-to-tr from-rose-600 to-blue-500 transition-all duration-500 ease-linear" ref="ball">
        <div class="p-10 rounded-full overflow-hidden">
            <video-background src="intro/color.mp4" class="w-screen h-screen rounded-full ">
            </video-background>
        </div>
    </div>
</template>
<script setup>
import VideoBackground from 'vue-responsive-video-background-player';
import { useMouse } from '@vueuse/core';
import { ref, watch, onMounted } from 'vue';
const { x, y } = useMouse()
const ball = ref(null)
const posy = ref('50%')
const posx = ref('50%')
onMounted(() => {
    setTimeout(() => {
        ball.value.style.cssText = 'width:400px;height:400px'
    }, 1000);
})
watch([x, y], (newVal) => {
    posx.value = newVal[0]+'px'
    posy.value = newVal[1]+'px'
    ball.value.style.cssText = 'top:' + posy.value + ';left:' + posx.value + '; width:400px; height:400px; outline:none'
})
</script>