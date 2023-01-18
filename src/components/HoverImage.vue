<script>
export default {
  data() {
    return {
      list: [
        {
          judul: "Lorem ipsum dolor sit amet consectetur ",
          image: "slideshow/ss1.jpg",
          link: "#",
          left:'left-12',
        },
        {
          judul: "Dicta praesentium iure illum magnam",
          image: "slideshow/ss2.jpg",
          link: "#",
          left:'left-32',
        },
        {
          judul: "neque rerum recusandae.",
          image: "slideshow/ss3.jpg",
          link: "#",
          left:'left-1/2',
        },
        {
          judul: " Magni asperiores accusamus quia quidem.",
          image: "slideshow/ss4.jpg",
          link: "#",
          left:'left-[40%]'
        },
      ],
    };
  }
};
</script>
<template>
  <div>
    <div class="bg-light min-h-[80vh] py-32">
      <div class="max-w-screen-lg mx-auto">
        <div class="group hover:border-b-6 relative transition duration-150" v-for="item in list" :key="item">
          <h1 class="text-8xl font-bold mb-8 text-gray z-10 relative hover:opacity-20 hover:text-primary transition -translate-x-2">{{ item.judul }}</h1>
          <div class="absolute z-0 top-0 w-80 opacity-0 transition-all duration-300
          group-hover:opacity-100 
          group-hover:translate-y-3 
          group-hover:rotate-3 
         " :class="`${item.left}`">
            <img :src="item.image" alt="" class="w-full transition duration-150">
          
          </div>
        </div>
      </div>
    </div>

  </div>
</template>