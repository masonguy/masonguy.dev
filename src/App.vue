<script setup lang="ts">
import { watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import { site } from '@/content/site'

const route = useRoute()

watch(
  () => route.name,
  (name) => {
    document.title = name === 'work' ? `Work · ${site.name}` : site.name
  },
  { immediate: true },
)
</script>

<template>
  <SiteHeader />
  <RouterView />
  <footer class="site-footer">
    <p>{{ site.name }}</p>
  </footer>
</template>
