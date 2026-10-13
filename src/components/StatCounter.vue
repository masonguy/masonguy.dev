<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  label: string
  value: number
  detail: string
}>()

const root = ref<HTMLElement | null>(null)
const shown = ref(0)

let observer: IntersectionObserver | null = null
let frame = 0

function finish() {
  shown.value = props.value
}

function animate() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || props.value === 0) {
    finish()
    return
  }

  const start = performance.now()
  const duration = 1100

  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration)
    const eased = 1 - (1 - progress) ** 3
    shown.value = Math.round(props.value * eased)
    if (progress < 1) frame = requestAnimationFrame(tick)
  }

  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      observer?.disconnect()
      animate()
    },
    { threshold: 0.5 },
  )

  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <article ref="root" class="stat">
    <p class="stat-value">
      <span class="stat-sizer" aria-hidden="true">{{ value }}</span>
      <span class="stat-shown">{{ shown }}</span>
    </p>
    <h2>{{ label }}</h2>
    <p class="stat-detail">{{ detail }}</p>
  </article>
</template>
