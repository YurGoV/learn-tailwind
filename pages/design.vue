<script setup lang="ts">
// TODO: dry?
import { useRouter } from "vue-router";
const router = useRouter();

const isOpen = ref(false);
const selectedValue = ref("Option 1");

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
const goBack = () => {
  router.back();
};
const selectValue = (option: string) => {
  selectedValue.value = option;
  isOpen.value = false;
};
</script>

<template>
  <div>
    <h1>This is a title</h1>
  </div>
  <div>
    <h2>This is a subtitle</h2>
  </div>
  <div>
    <p>This is a paragraph</p>
  </div>
  <div>
    <a>This is an anchor</a>
  </div>
  <div class="my-4">
    <button class="btn btn-primary">This is a primary button</button>
  </div>
  <div class="my-4">
    <button class="btn btn-secondary">This is a secondary button</button>
  </div>
  <div class="my-4">
    <button disabled class="btn btn-primary">This is a disabled button</button>
  </div>
  <div>
    <input type="text" placeholder="Email" />
  </div>
  <div>
    <input disabled type="text" placeholder="Email" />
  </div>
  <div>
    <input type="date" />
  </div>
  <div class="flex items-start my-4">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste vel,
      expedita dolorum voluptatum quo alias tempore possimus, labore voluptas
      consectetur, magni pariatur totam in ullam accusantium velit quibusdam
      quae.</label
    >
  </div>
  <!-- // TODO: catch icon (as on video), make all as with NuxtUI -->
  <div>
    <select>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
  </div>
  <div class="Select">
    <div class="child" @click="toggleOpen">{{ selectedValue }}</div>
    <div v-if="isOpen">
      <ul class="flex flex-col divide-y border-t">
        <!-- <li @click="selectedValue = 'Option 1'" class="child">Option 1</li> -->
        <li @click="selectValue( 'Option 1' )" class="child">Option 1</li>
        <li @click="selectValue( 'Option 2' )" class="child">Option 2</li>
        <li @click="selectValue( 'Option 3' )" class="child">Option 3</li>
      </ul>
    </div>
  </div>
  <nav>
    <a @click.prevent="goBack">go back</a>
  </nav>
</template>
