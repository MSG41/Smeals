// The template section of the code renders a NavBar component and a RouterView component.
// The NavBar component represents the navigation bar of the application.
// The RouterView component is responsible for rendering the appropriate component based on the current route.

<template>
  <NavBar />
  <RouterView />
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
</script>