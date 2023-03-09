<script setup>
import { LockClosedIcon } from '@heroicons/vue/24/solid'
import BtnPrimary from './button/BtnPrimary.vue';
import Logo from './Logo.vue'
</script>
<template>
  <div class="w-full fixed z-50 top-0 left-0">
  <div class="max-w-screen-xl mx-auto py-3 px-4 mb-6 ">
    <div class="flex justify-between">
      <div class="logo flex items-center">
       <Logo />
        <h1 class="text-2xl font-bold text-danger">Proweb Indonesia</h1>
      </div>

      <div class="menu flex items-center">
        <ul class="lg:flex items-center text-white">
            <li> <router-link to="" class="p-2 font-semibold "> Home</router-link></li>
            <li> <router-link to="" class="p-2 font-semibold "> Layanan</router-link></li>
            <li> <router-link to="" class="p-2 font-semibold "> Portofolio</router-link></li>
            <li> <router-link to="" class="p-2 font-semibold "> Paket Website</router-link></li>
            <li> <router-link to="" class="p-2 font-semibold "> Kontak</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  </div>

</template>