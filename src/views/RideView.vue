<script setup lang="ts">
import CountryFlags from '@/components/CountryFlags.vue'
import StatCounter from '@/components/StatCounter.vue'
import { formatRaceDate } from '@/content/dates'
import {
  featuredResult,
  heroPhoto,
  plans2027,
  proPodiums,
  recentHighlights,
  resultsRecordHref,
  ridingIntro,
  ridingStats,
  supportedBy,
  ridingStatsNote,
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
      <p class="hero-credit">Photo · {{ heroPhoto.credit }}</p>
      <div class="hero-copy">
        <div>
          <p class="kicker">{{ ridingIntro.kicker }}</p>
          <h1>Mason Rudolph</h1>
          <p class="home">{{ ridingIntro.home }}</p>
        </div>
        <div class="supported">
          <p class="kicker">Supported by:</p>
          <ul v-if="supportedBy.length">
            <li v-for="name in supportedBy" :key="name">{{ name }}</li>
          </ul>
        </div>
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
          :suffix="stat.suffix"
        >
          <CountryFlags v-if="stat.id === 'countries'" />
        </StatCounter>
      </div>
      <p class="stats-note">{{ ridingStatsNote }}</p>
    </section>

    <div class="intro">
      <section class="bio">
        <p v-for="paragraph in ridingIntro.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </section>
      <section class="plans" aria-labelledby="plans-heading">
        <h2 id="plans-heading">2027 plans</h2>
        <ul>
          <li v-for="plan in plans2027" :key="plan.event">
            <p class="plan-event">
              {{ plan.event }}
              <span class="plan-flag">{{ plan.flag }}</span>
            </p>
          </li>
        </ul>
      </section>
    </div>

    <section class="highlights" aria-labelledby="highlights-heading">
      <div class="results-head highlights-head">
        <h2 id="highlights-heading">Recent highlights</h2>
      </div>
      <div class="feature">
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
          <h3 id="featured-result">{{ featuredResult.event }}</h3>
          <p class="place-mark">{{ featuredResult.place }}</p>
          <p class="feature-detail">{{ featuredResult.detail }}</p>
          <p class="feature-venue">{{ featuredResult.venue }}</p>
          <p class="credit">Photo · {{ featuredResult.credit }}</p>
          <a class="text-link" :href="featuredResult.recapHref">Event recap</a>
        </div>
      </div>
      <div class="results highlights-list">
        <ol>
          <li v-for="item in recentHighlights" :key="item.event">
            <p class="result-when">{{ item.when }}</p>
            <div>
              <p class="result-event">{{ item.event }}</p>
              <p class="result-meta">{{ item.meta }}</p>
            </div>
            <p class="result-place">{{ item.place }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="results" aria-labelledby="results-heading">
      <div class="results-head">
        <div>
          <h2 id="results-heading">Pro podiums</h2>
        </div>
        <a class="text-link" :href="resultsRecordHref">Full record</a>
      </div>
      <ol>
        <li v-for="result in proPodiums" :key="`${result.date}-${result.event}`">
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
        <span>Photo · {{ trailPhoto.credit }}</span>
      </figcaption>
    </figure>
  </main>
</template>
