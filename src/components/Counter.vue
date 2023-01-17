<script>
export default {
    props:{
       angka:String,
       deskripsi:String
    }
}

</script>
<template>
    <div
          class="
            p-5
            flex flex-col
            justify-center
            items-center
            min-h-max
            h-full
            hover:animate-pulse
            hover:-translate-y-5
            ease-in-out
            transition
            delay-150
            text-center
          "
        >
          <h1 class="text-5xl text-secondary counter">{{angka }}</h1>
          <p>{{ deskripsi }}</p>
        </div>
</template>