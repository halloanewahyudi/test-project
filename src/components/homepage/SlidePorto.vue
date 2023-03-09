<template>
    <div class="porto-wrap">
        <div class=" max-h-screen overflow-hidden z-10">
            <div class=" min-h-max flex flex-col gap-4 lg:rotate-3">
                <div v-for="pf in porto" :key="pf" class="porto">
                    <div class=" rounded-md w-[300px] h-[130px] lg:w-[420px] lg:h-[260px] opacity-50 hover:scale-110 transition ease-linear hover:opacity-100 hover:shadow" 
                    :style="{
                        background:`url(${pf.image})`,
                        backgroundSize:'cover',
                        backgroundPosition:'center'
                    }"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"
const porto = ref([
    {
        nama:'sahid',
        image:'https://www.proweb.co.id/wp-content/uploads/2022/09/sahid.jpg'
    },
    {
        nama:'inovasi',
        image:'https://www.proweb.co.id/wp-content/uploads/2022/07/inovasi-3.jpg'
    },
    {
        nama:'Sany Perkasa',
        image:'https://www.proweb.co.id/wp-content/uploads/2022/05/sanyperkasa.jpg',
    },
    {
        nama:'Jasa Marga Related Business',
        image:'https://www.proweb.co.id/wp-content/uploads/2021/11/jasamarga.jpg',
    },
    {
        nama:'United Tractor',
        image:'https://www.proweb.co.id/wp-content/uploads/2020/11/united-tractors.jpg',
    },
    {
        nama:'Tobaco Indonesia',
        image:'https://www.proweb.co.id/wp-content/uploads/2019/07/pt-indonesian-tobacco-tbk.jpg',
    }
])

</script>
<style scoped>
.porto{
    animation: marquee 5s linear infinite;
}
@keyframes marquee {
  0% {  transform: translateY(0) }
  100% { transform: translateY(-100%) }
}
</style>