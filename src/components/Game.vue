<script setup>
import { ref } from "@vue/reactivity";
 const coin =  ref(100);
const orange = (e) =>{
 
}
</script>
<template>
  <div class="max-w-screen-lg mx-auto p-4">
    <div class="grid grid-cols-7 gap-6 justify-center">
        <div class="cell hover:bg-slate-300 bg-slate-50 flex items-center justify-center h-auto p-4" v-for="(item, index) in coin" :key="index">
            <span class="rounded-full w-10 h-10 bg-orange-400"> {{index}} </span>
        </div>
    </div>
  </div>
</template>
<style>
enemy,
.player {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.enemy {
    background: #f31414;
}

.player {
    background: #14c6f3;
}
</style>
