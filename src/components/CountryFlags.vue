<script setup lang="ts">
const countries = [
  { name: 'United States' },
  { name: 'Canada' },
  { name: 'Mexico' },
  { name: 'Switzerland' },
  { name: 'Portugal' },
] as const
</script>

<template>
  <ul class="flags">
    <li v-for="country in countries" :key="country.name">
      <svg v-if="country.name === 'United States'" viewBox="0 0 19 10" role="img">
        <title>{{ country.name }}</title>
        <rect width="19" height="10" fill="#fff" />
        <g fill="#b22234">
          <rect width="19" height="1" />
          <rect y="2" width="19" height="1" />
          <rect y="4" width="19" height="1" />
          <rect y="6" width="19" height="1" />
          <rect y="8" width="19" height="1" />
        </g>
        <rect width="8" height="5.4" fill="#3c3b6e" />
      </svg>
      <svg v-else-if="country.name === 'Canada'" viewBox="0 0 64 32" role="img">
        <title>{{ country.name }}</title>
        <rect width="64" height="32" fill="#fff" />
        <rect width="16" height="32" fill="#d52b1e" />
        <rect x="48" width="16" height="32" fill="#d52b1e" />
        <path
          fill="#d52b1e"
          d="M32 4.5c-.6 3.2-3.6 4-4.4 6.2l-3.2-.6 2.2 3.2-3.8 1 3.6 1.6-2.2 4.2 4.2-2.6-.4 4.6 4-3.2 4 3.2-.4-4.6 4.2 2.6-2.2-4.2 3.6-1.6-3.8-1 2.2-3.2-3.2.6c-.8-2.2-3.8-3-4.4-6.2zM31 22.5h2l-.3 4h-1.4z"
        />
      </svg>
      <svg v-else-if="country.name === 'Mexico'" viewBox="0 0 21 12" role="img">
        <title>{{ country.name }}</title>
        <rect width="7" height="12" fill="#006847" />
        <rect x="7" width="7" height="12" fill="#fff" />
        <rect x="14" width="7" height="12" fill="#ce1126" />
        <circle cx="10.5" cy="6" r="1.7" fill="#c5a04a" />
      </svg>
      <svg v-else-if="country.name === 'Switzerland'" viewBox="0 0 32 32" role="img">
        <title>{{ country.name }}</title>
        <rect width="32" height="32" fill="#da020e" />
        <rect x="13" y="6" width="6" height="20" fill="#fff" />
        <rect x="6" y="13" width="20" height="6" fill="#fff" />
      </svg>
      <svg v-else viewBox="0 0 30 20" role="img">
        <title>{{ country.name }}</title>
        <rect width="12" height="20" fill="#046a38" />
        <rect x="12" width="18" height="20" fill="#da020e" />
        <circle cx="12" cy="10" r="4" fill="#ffe900" />
        <circle cx="12" cy="10" r="2.3" fill="#da020e" />
        <circle cx="12" cy="10" r="1.1" fill="#fff" />
      </svg>
    </li>
  </ul>
</template>
