<template>
  <div>
    <h2>{{ route.params.id }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
