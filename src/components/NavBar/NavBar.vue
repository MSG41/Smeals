<template>
  <!-- Navigation bar header -->
  <header class="header">
    <!-- Vue logo -->
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/SML.png" width="90" height="80" />
    </RouterLink>
    <!-- Navigation links -->
    <nav class="nav">
      <RouterLink class="nav-link" data-testid="home-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" data-testid="about-link" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import './NavBarStyles.scss';
</style>
