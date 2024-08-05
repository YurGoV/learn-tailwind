<template>
    <h1 class="text-4xl font-bold">this is Index page</h1>
    <p class="text-mycustom">custom my</p>

    <p class="text-sm md:text-2xl lg:text-4xl">text size various by screen width</p>

  <nav>
    <ul>
      <li>
        <NuxtLink to="/typography">Typography page</NuxtLink>
        <NuxtLink to="/spaces">Spaces page</NuxtLink>
        <NuxtLink to="/flex">Flex page</NuxtLink>
        <NuxtLink to="/grids">Grids page</NuxtLink>
        <NuxtLink to="/layouts">Layouts page</NuxtLink>
        <NuxtLink to="/borders">Borders page</NuxtLink>
        <NuxtLink class="border-2 rounded-md" to="/effects">Effetcs page</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
