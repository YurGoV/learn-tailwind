<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <header class="w-full border-b-4 py-4">Border</header>
    borders
  </div>
  <div class="border border-green-400">border color</div>
  <div class="divide-y divide-red-800">
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </div>
  <div class="grid grid-cols-3 divide-x-4 divide-dashed divide-blue-400">
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <div class="flex flex-row justify-around">
    <button class="basis-1/4 outline outline-offset-2 outline-1">Button A</button>
    <button class="basis-1/4 outline outline-offset-2 outline-2">Button B</button>
    <button class="basis-1/4 outline outline-offset-2 outline-4">Button C</button>
  </div>
  <div class="flex flex-row justify-around mt-4">
    <button class="basis-1/4 outline ring-offset-2 ring-4 ring-gray-300">Button A</button>
    <button class="basis-1/4 outline ring-offset-2 ring-4">Button B</button>
    <button class="basis-1/4 outline ring-offset-2 ring-4 ring-green-400">Button C</button>
  </div>
  <nav>
    <a @click.prevent="goBack">go back</a>
  </nav>
</template>
