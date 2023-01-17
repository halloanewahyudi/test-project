<script setup>
import { LockClosedIcon } from '@heroicons/vue/24/solid'
import BtnPrimary from './button/BtnPrimary.vue';
</script>
<template>
  <div class="max-w-screen-xl mx-auto py-3 px-4 mb-6">
    <div class="flex justify-between">
      <div class="logo flex items-center">
        <div
          class="
            w-10
            h-10
            bg-gradient-to-br
            from-primary
            to-secondary
            rounded-full
            mr-2
          "
        ></div>
        <h1 class="text-2xl font-bold text-danger">Logo</h1>
      </div>

      <div class="menu flex items-center">
        <ul class="lg:flex items-center">
            <li> <router-link to="" class="p-2 font-semibold text-blue-800"> Shop</router-link></li>
            <li> <router-link to="" class="p-2 font-semibold text-blue-800"> Become Reseller</router-link></li>
            <li> <router-link to="" class="p-2 font-semibold text-blue-800"> Contact</router-link></li>
        </ul>

        <btn-primary link="/about" class="group flex min-w-max">
          <LockClosedIcon class="h-4 w-4 text-white mr-2 group-hover:animate-bounce "/> Login 
        </btn-primary>
      </div>
    </div>
  </div>
</template>