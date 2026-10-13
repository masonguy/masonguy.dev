<script setup lang="ts">
import SponsorAsk from '@/components/SponsorAsk.vue'
import StatCounter from '@/components/StatCounter.vue'
import { formatRaceDate } from '@/content/dates'
import {
  featuredResult,
  heroPhoto,
  resultsRecordHref,
  ridingIntro,
  ridingStats,
  ridingStatsNote,
  selectedResults,
  trailPhoto,
} from '@/content/riding'
</script>

<template>
  <main id="content" class="page" tabindex="-1">
    <section class="hero">
      <img
        class="hero-photo"
        :src="heroPhoto.src"
        :alt="heroPhoto.alt"
        :width="heroPhoto.width"
        :height="heroPhoto.height"
        fetchpriority="high"
      />
      <div class="hero-scrim" aria-hidden="true"></div>
      <div class="hero-copy">
        <div>
          <p class="kicker">{{ ridingIntro.kicker }}</p>
          <h1>Mason Rudolph</h1>
          <p class="lede">{{ ridingIntro.lede }}</p>
        </div>
        <p class="hero-credit">Photo · {{ heroPhoto.credit }}</p>
      </div>
    </section>

    <section class="stats" aria-label="Career totals">
      <div class="stat-grid">
        <StatCounter
          v-for="stat in ridingStats"
          :key="stat.id"
          :label="stat.label"
          :value="stat.value"
          :detail="stat.detail"
        />
      </div>
      <p class="stats-note">{{ ridingStatsNote }}</p>
    </section>

    <section class="bio">
      <p v-for="paragraph in ridingIntro.paragraphs" :key="paragraph">{{ paragraph }}</p>
    </section>

    <section class="feature" aria-labelledby="featured-result">
      <img
        :src="featuredResult.image"
        :alt="featuredResult.alt"
        :width="featuredResult.width"
        :height="featuredResult.height"
      />
      <div class="feature-copy">
        <p class="kicker">
          {{ formatRaceDate(featuredResult.date) }} · {{ featuredResult.series }}
        </p>
        <h2 id="featured-result">{{ featuredResult.event }}</h2>
        <p class="place-mark">{{ featuredResult.place }}</p>
        <p class="feature-detail">{{ featuredResult.detail }}</p>
        <p class="feature-venue">{{ featuredResult.venue }}</p>
        <p class="credit">Photo · {{ featuredResult.credit }}</p>
        <a class="text-link" :href="featuredResult.recapHref">Event recap</a>
      </div>
    </section>

    <section class="results" aria-labelledby="results-heading">
      <div class="results-head">
        <h2 id="results-heading">Selected results</h2>
        <a class="text-link" :href="resultsRecordHref">Full record</a>
      </div>
      <ol>
        <li v-for="result in selectedResults" :key="`${result.date}-${result.event}`">
          <time :datetime="result.date">{{ formatRaceDate(result.date) }}</time>
          <div>
            <p class="result-event">{{ result.event }}</p>
            <p class="result-meta">{{ result.meta }}</p>
          </div>
          <p class="result-place">{{ result.place }}</p>
        </li>
      </ol>
    </section>

    <figure class="trail">
      <img
        :src="trailPhoto.src"
        :alt="trailPhoto.alt"
        :width="trailPhoto.width"
        :height="trailPhoto.height"
        loading="lazy"
      />
      <figcaption>
        <span>{{ trailPhoto.caption }}</span>
        <span>Photo · {{ trailPhoto.credit }}</span>
      </figcaption>
    </figure>

    <SponsorAsk />
  </main>
</template>
