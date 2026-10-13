<script setup lang="ts">
import { sponsorship } from '@/content/riding'
import { site } from '@/content/site'
</script>

<template>
  <section class="ask" aria-labelledby="sponsor-heading">
    <div class="ask-inner">
      <h2 id="sponsor-heading">{{ sponsorship.heading }}</h2>
      <p>{{ sponsorship.body }}</p>
      <a v-if="site.email" class="ask-mail" :href="`mailto:${site.email}`">{{ site.email }}</a>
    </div>
  </section>
</template>
