<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { nav, site } from '@/content/site'
</script>

<template>
  <a class="skip" href="#content">Skip to content</a>
  <header class="site-header">
    <RouterLink class="wordmark" to="/">{{ site.name }}</RouterLink>
    <nav aria-label="Primary">
      <RouterLink
        v-for="item in nav"
        :key="item.to"
        v-slot="{ href, navigate, isExactActive }"
        :to="item.to"
        custom
      >
        <a
          :href="href"
          :class="{ 'is-active': isExactActive }"
          :aria-current="isExactActive ? 'page' : undefined"
          @click="navigate"
        >
          {{ item.label }}
        </a>
      </RouterLink>
    </nav>
  </header>
</template>
