<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <div>
    <div class="bg-red-500">without padding</div>
    <div class="p-1 bg-red-500">with padding</div>
    <div class="pl-4 bg-red-500">with left (pl) padding</div>
    <div class="py-4 bg-red-500">with 'axis' (top/bottom - py) padding</div>
    <div class="px-4 bg-red-500">with 'axis' (left/right - px) padding</div>
    <div class="m-4 bg-red-500">with margin</div>
  </div>
  <!-- <div class="flex"> -->
  <div>
    <div class="w-14 h-16 bg-blue-500" />
    <div class="w-14 h-16 bg-green-500" />
    <div class="w-1/2 h-16 bg-green-500">w-1/2 - half of the screen</div>
  </div>
  <div class="flex mt-1">
    <div class="w-1/5 h-16 bg-blue-500" />
    <div class="w-4/5 h-16 bg-green-500" />
  </div>
  <div class="flex space-x-4 mt-1">
    <div class="w-1/5 h-16 bg-blue-500">with space-x-4</div>
    <div class="w-4/5 h-16 bg-green-500">with space-x-4</div>
  </div>
  <div>
    <nav>
      <a @click.prevent="goBack">go back</a>
    </nav>
  </div>
</template>
