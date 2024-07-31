<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <div>
    <h1 class="text-4xl">Title 1</h1>
    <h2 class="text-2xl italic">Title 2</h2>
    <h3 class="underline decoration-red-700">Title 3</h3>
    <p class="text-base">a regular paragraph</p>
    <p class="text-base font-playwrite">a regular paragraph 2</p>
    <p class="text-sm underline decoration-red-500">a description paragraph</p>
    <p class="text-xs note">a little note</p>
    <p class="text-xs note uppercase">a little uppercase note</p>
    <p class="text-xs note">
      this is very long text this is the very very long text this is the very
      very long tex this is the very very long tex this is the very very long
      tex this is the very very long tex this is the very very long tex this is
      the very very long textttttt
    </p>
  </div>

  <nav>
    <ul>
      <li>
        <a @click.prevent="goBack">go back</a>
      </li>
    </ul>
  </nav>
</template>
