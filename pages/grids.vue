<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <div>grids</div>
  <div
    class="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 bg-blue-300"
  >
    <div class="p-6 rounded-lg bg-sky-700">01</div>
    <div class="p-6 rounded-lg bg-sky-700">02</div>
    <div class="p-6 rounded-lg bg-sky-700">03</div>
    <div class="p-6 rounded-lg bg-sky-700">04</div>
    <div class="p-6 rounded-lg bg-sky-700">05</div>
    <div class="p-6 rounded-lg bg-sky-700">06</div>
    <div class="p-6 rounded-lg bg-sky-700">07</div>
    <div class="p-6 rounded-lg bg-sky-700">08</div>
    <div class="p-6 rounded-lg bg-sky-700">09</div>
  </div>
  <div class="mt-4 grid grid-cols-3 gap-4 bg-blue-600">
    <div class="p-6 rounded-lg bg-sky-700">01</div>
    <div class="p-6 rounded-lg bg-sky-700">02</div>
    <div class="p-6 rounded-lg bg-sky-700">03</div>
    <div class="col-span-2 p-6 rounded-lg bg-sky-700">04</div>
    <div class="p-6 rounded-lg bg-sky-700">05</div>
    <div class="p-6 rounded-lg bg-sky-700">06</div>
    <div class="col-span-2 p-6 rounded-lg bg-sky-700">07</div>
  </div>
  <div class="mt-4 grid grid-cols-6 gap-4 bg-gray-500">
    <div class="col-start-2 col-span-4 p-6 rounded-lg bg-sky-700">01</div>
    <div class="col-start-1 col-end-3 p-6 rounded-lg bg-sky-700">02</div>
    <div class="col-end-7 col-span-2 p-6 rounded-lg bg-sky-700">03</div>
    <div class="col-start-1 col-end-7 p-6 rounded-lg bg-sky-700">04</div>
  </div>
  <div
    class="mt-4 grid grid-rows-3 grid-flow-col gap-4 bg-pink-200"
  >
    <div class="p-6 rounded-lg bg-sky-700">01</div>
    <div class="p-6 rounded-lg bg-sky-700">02</div>
    <div class="p-6 rounded-lg bg-sky-700">03</div>
    <div class="p-6 rounded-lg bg-sky-700">04</div>
    <div class="p-6 rounded-lg bg-sky-700">05</div>
    <div class="p-6 rounded-lg bg-sky-700">06</div>
    <div class="p-6 rounded-lg bg-sky-700">07</div>
    <div class="p-6 rounded-lg bg-sky-700">08</div>
    <div class="p-6 rounded-lg bg-sky-700">09</div>
  </div>
  <div
    class="mt-4 grid grid-rows-3 grid-flow-col gap-4 bg-pink-500"
  >
    <div class="row-span-2 p-6 rounded-lg bg-sky-700">01</div>
    <div class="p-6 rounded-lg bg-sky-700">02</div>
    <div class="p-6 rounded-lg bg-sky-700">03</div>
    <div class="p-6 rounded-lg bg-sky-700">04</div>
    <div class="p-6 rounded-lg bg-sky-700">05</div>
    <div class="p-6 rounded-lg bg-sky-700">06</div>
    <div class="row-span-2 p-6 rounded-lg bg-sky-700">07</div>
    <div class="p-6 rounded-lg bg-sky-700">08</div>
    <div class="p-6 rounded-lg bg-sky-700">09</div>
  </div>
  <div
    class="mt-4 grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 bg-pink-300"
  >
    <div class="row-span-2 p-6 rounded-lg bg-sky-700">01</div>
    <div class="p-6 rounded-lg bg-sky-700">02</div>
    <div class="p-6 rounded-lg bg-sky-700">03</div>
    <div class="p-6 rounded-lg bg-sky-700">04</div>
    <div class="p-6 rounded-lg bg-sky-700">05</div>
    <div class="p-6 rounded-lg bg-sky-700">06</div>
    <div class="row-span-2 p-6 rounded-lg bg-sky-700">07</div>
    <div class="p-6 rounded-lg bg-sky-700">08</div>
    <div class="p-6 rounded-lg bg-sky-700">09</div>
    <div class="p-6 rounded-lg bg-sky-700">10</div>
    <div class="p-6 rounded-lg bg-sky-700">11</div>
  </div>
  <nav>
    <a @click.prevent="goBack">go back</a>
  </nav>
</template>
