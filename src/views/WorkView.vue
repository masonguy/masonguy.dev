<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { workItems, workPage } from '@/content/work'
</script>

<template>
  <main id="content" class="page" tabindex="-1">
    <section class="work-intro">
      <p class="kicker">{{ workPage.kicker }}</p>
      <h1>{{ workPage.title }}</h1>
      <p class="work-summary">{{ workPage.summary }}</p>
      <p>
        <RouterLink class="text-link" to="/">See the racing</RouterLink>
      </p>
    </section>

    <section v-if="workItems.length" class="roles" aria-label="Work">
      <article v-for="item in workItems" :key="`${item.period}-${item.title}`" class="role">
        <p class="role-period">{{ item.period }}</p>
        <div>
          <h2>
            <a v-if="item.href" :href="item.href">{{ item.title }}</a>
            <template v-else>{{ item.title }}</template>
          </h2>
          <p class="role-org">{{ item.org }}</p>
          <p>{{ item.summary }}</p>
        </div>
      </article>
    </section>
  </main>
</template>
