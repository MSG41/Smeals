<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/SML.png" width="90" height="80" />

    <nav>
      <RouterLink data-testid="home-link" to="/">Home</RouterLink>
      <RouterLink data-testid="about-link" to="/about">About</RouterLink>
      <RouterLink data-testid="salim-link" to="/salim">Salim</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import './NavBarStyles.scss';
</style>
