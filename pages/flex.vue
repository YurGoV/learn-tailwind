<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <div class="Parent">
    <div>Header</div>
    <div class="flex">
      <div class="w-32 bg-sky-300">Sidebar</div>
      <div class="w-full bg-red-300">
        Main content>
        <div class="flex f-full flex-nowrap pt-4">
          <div class="w-full grow">01</div>
          <div class="w-full grow">02</div>
          <div class="w-full grow">03</div>
        </div>
        <div class="flex f-full flex-wrap pt-4">
          <div class="w-full grow">04</div>
          <div class="w-full grow">05</div>
          <div class="w-full grow">06</div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <nav>
      <a @click.prevent="goBack">go back</a>
    </nav>
  </footer>
</template>
