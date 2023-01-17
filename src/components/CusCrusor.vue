<script setup>
import { onMounted } from "vue";
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'
import gsap from "gsap";
onMounted(() => {
  // Variables
// ************
var cursor = document.querySelector('.cursor');
var cursorText = document.querySelector('.cursor-text');
var followArea = document.querySelectorAll('.block-clickable');
var page = document.querySelector('.blocks');


// Follow Animation
// ************
var moveCircle = (e)  => {
  gsap.to(cursor, 0.25, {
    css: {
      left: e.clientX,
      top: e.clientY
    }
  });
}


// Event Listeners
// ************

page.addEventListener('mousemove', moveCircle);

followArea.forEach(function(el) {

  el.addEventListener('mouseover', () => {
    gsap.to(cursor, 0.25, {
      scale: 1,
      autoAlpha: 1
    });

  });

  el.addEventListener('mouseout', () => {
    gsap.to(cursor, 0.25, {
      scale: 0.5,
      autoAlpha: 0
    });
  });

  el.addEventListener('mousedown', () => {

    gsap.to(cursor, 0.5, {
      css: { transform: `translate(-50%, -50%) scale(0.75)` }
    });

    gsap.to(cursorText, 0.25, {
      css: { opacity: 1  }
    });
  });

  el.addEventListener('mouseup', () => {
    
    gsap.to(cursor, 1, {
      css: { background: `transparent` }
    });

    gsap.to(cursor, 0.5, {
      css: { transform: `translate(-50%, -50%) scale(1)` }
    });

    gsap.to(cursorText, 0.25, {
      css: {
        opacity: 1
      }
    });
    
  });

})
  //===============
});
</script>
<template>
    
<section class="blocks w-full relative x bg-primary text-white"> 
<div class="block-clickable p-5 max-w-screen-lg mx-auto text-center min-h-[80vh] flex flex-col justify-center">
            <div class=" ">
            <h1 class="text-5xl font-bold ">Proin non lorem nec metus imperdiet sagittis viverra sed libero.</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque non aut laudantium neque velit expedita voluptate enim ut? Fuga, voluptas hic vitae deleniti doloribus voluptatum possimus quos officia magni rem!</p>
          </div>
</div>
<cursor class="cursor"><span class="cursor-text"><ArrowUpRightIcon class="text-danger animate-bounce"/></span></cursor>

</section>
</template>
<style scoped>
/* .blocks {
 display: grid;
  width:800px;
 grid-template: repeat(2, 10px) / repeat(2, 1fr);
 grid-gap: 3px;
 padding:40px;
} */

 .block-clickable {
  /*  width:300px;
   padding:40px;
   background: orange; */
}
.cursor {
   pointer-events: none;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   justify-content: center;
   align-items: center;
   border: 2px solid #ff9999;
   width: 75px;
   height: 75px;
   border-radius: 50%;
   background: transparent;
   z-index: 1000;
}
 .cursor:focus {
   outline: none;
}
 .cursor span {
   flex: 1;
   padding: 6px;
   pointer-events: none;
   color: #ac99ff;
   font-weight: bold;
   font-size: 18px;
   line-height: 1.4;
   letter-spacing: 1px;
   text-transform: uppercase;
}
 
</style>