<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <!-- centerize can be setted by default in config -->
  <!-- <div class="container mx-auto bg-pink-200">container</div> -->

  <!-- px-2 - padding inside the container -->
  <div class="container px-2 bg-pink-200">container</div>
  <div class="container px-2 bg-blue-200">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
  </div>
  <!-- automatically scalled -->
  <div class="container px-2 columns-lg">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
  </div>
  <div class="container px-2 columns-lg">
    <!-- <NuxtImg -->
    <!--   provider="cloudinary" -->
    <!--   scr="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg" -->
    <!--   alt="nature, beach" -->
    <!--   width="300" -->
    <!--   height="200" -->
    <!-- /> -->
    <CldImage
      class="float-left"
      src="https://res.cloudinary.com/dpt5zgoh5/image/upload/v1717842892/cydsv1woar3lnexuxfyn.jpg"
      width="256"
      height="130"
      alt="My Awesome Image"
    />
    <p class="clear-none">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
  </div>
  <div class="container px-2 columns-3 bg-pink-200">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
  </div>
  <div class="container px-2 columns-2 bg-blue-200">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
  </div>
  <div class="container px-2 columns-5 bg-pink-200">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia
      expedita facere molestiae cumque sequi, accusamus nostrum nihil
      voluptatibus beatae culpa veritatis. Sed perferendis ex aut minus
      quisquam, atque maxime. !!!
    </p>
  </div>
  <div class="container bg-blue-300">
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-green-200">01</div>
      <div class="invisible ...">02</div>
      <div class="bg-green-200">03</div>
    </div>
  </div>
  <div class="container flex relative">
    <div class="absolute left-0 z-40 w-32 h-32 bg-red-200 border rounded-full">
      05
    </div>
    <div class="absolute left-10 z-30 w-32 h-32 bg-red-200 border rounded-full">
      04
    </div>
    <div class="absolute left-20 z-20 w-32 h-32 bg-red-200 border rounded-full">
      03
    </div>
    <div class="absolute left-30 z-10 w-32 h-32 bg-red-200 border rounded-full">
      02
    </div>
    <div class="absolute left-40 z-0 w-32 h-32 bg-red-200 border rounded-full">
      01
    </div>
  </div>
  <div class="relative w-64 h-64 p-8 bg-yellow-500 rounded-lg">
    <div
      class="absolute -top-2 -right-2 w-32 h-32 bg-green-300 rounded-lg"
    ></div>
  </div>
  <nav>
    <a @click.prevent="goBack">go back</a>
  </nav>
</template>
