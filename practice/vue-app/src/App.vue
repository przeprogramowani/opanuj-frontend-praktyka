<script setup lang="ts">
</script>

<template>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

  <nav class="flex w-auto gap-x-1">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/solver">Solver</RouterLink>
  </nav>
  <main class="mt-8 w-full">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
