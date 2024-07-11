<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/solver">Solver</RouterLink>
  </nav>
  <main class="app-content">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  display: flex;
  column-gap: 1rem;
}
.app-content {
  width: 75vw;
}
</style>
