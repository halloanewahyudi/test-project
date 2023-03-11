<template>
    <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2">
            <div class="max-w-md mx-auto">
                <slot />
            </div>
        </div>
        <div class="w-full md:w-1/2">
            <SlidePorto />
        </div>
    </div>
</template>
<script setup>
import AboutText from './AboutText.vue';
import SlidePorto from './SlidePorto.vue'

</script>
