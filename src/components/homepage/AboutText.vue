<template>
    <div class="">
        <h2 class="text-3xl  text-yellow-400">
            {{ text.title }}
        </h2>
        <p>
            {{ text.subtitle }}
        </p>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
const text = ref(
    {
        title: 'PT. Proweb Indonesia merupakan Perusahaan IT yang berfokus pada layanan Profesional',
        subtitle: 'Web Designer, Web Developer serta penyediaan Solusi IT berbasis web. Perusahaan ini didirikan & dikelola oleh orang-orang yang memiliki passion di bidang IT & Art'
    }
)
</script>