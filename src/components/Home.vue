<template>
  <h1>Home</h1>
  <RouterLink v-for="id in ids" :key="id" :to="`/profile/${id}`"
    >Ir a perfil</RouterLink
  >
</template>

<script setup>
const ids = [1, 2, 3];
</script>
