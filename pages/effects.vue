<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <div class="flex">
      <div class="ml-4 shadow-md size-20"></div>
      <div class="ml-4 shadow-lg shadow-cyan-400 size-20"></div>
      <div class="ml-4 shadow-xl shadow-pink-400 size-20"></div>
      <div class="ml-4 shadow-2xl shadow-green-600 size-20"></div>
      <div class="ml-4 shadow-2xl shadow-green-600/50 size-20">
        less agressive
      </div>
    </div>
    <div class="flex justify-around">
      <button class="bg-indigo-500 opacity-100 basis-1/5">100</button>
      <button class="bg-indigo-500 opacity-75 basis-1/5">75</button>
      <button class="bg-indigo-500 opacity-50 basis-1/5">50</button>
      <button class="bg-indigo-500 opacity-25 basis-1/5">25</button>
    </div>
    <div class="flex mt-4">
      <CldImage
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
      <CldImage
        class="ml-4 blur-sm"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
    </div>
    <div class="flex mt-4">
      <CldImage
        class=" blur-sm hover:blur-none"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
      <CldImage
        class="ml-4 blur-sm hover:blur-none"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
    </div>
    <div class="grid grid-cols-3 gap-4 mt-4">
      <CldImage
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
      <CldImage
        class=" brightness-50"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
      <CldImage
        class=" brightness-200"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
      <CldImage
        class=" contrast-200"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
      <CldImage
        class=" grayscale"
        src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
        width="256"
        height="130"
        alt="My Awesome Image"
      />
    </div>
    <nav>
      <a @click.prevent="goBack">go back</a>
    </nav>
  </div>
</template>
