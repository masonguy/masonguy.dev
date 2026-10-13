import plate104 from '@/assets/photos/plate-104.jpg'
import plate28 from '@/assets/photos/plate-28.jpg'
import podium from '@/assets/photos/podium.jpg'

export type CareerStat = {
  id: string
  label: string
  value: number
  detail: string
  suffix?: string
}

export type RaceResult = {
  date: string
  event: string
  meta: string
  place: string
}

/**
 * Ride page copy.
 *
 * Pro podiums are top-five finishes in Pro:
 * - 2nd, Galbraith Enduro, Jul 12, 2026 (event recap: Pro Men).
 * - 4th, Yacolt Burn, Jun 27, 2026. Roots & Rain lists this as 5th of 7.
 * - 4th, Cascadia Dirt Cup #5, Hood River, Sep 19, 2026.
 * - 5th, Cascadia Dirt Cup #3, Raging River, Jun 30, 2024.
 *
 * Countries: United States, Canada, Mexico, Switzerland, Portugal.
 * Starts: shown as 50+.
 */
export const ridingStats: CareerStat[] = [
  { id: 'podiums', label: 'Pro podiums', value: 4, detail: '' },
  { id: 'countries', label: 'Countries', value: 5, detail: 'Raced in' },
  { id: 'starts', label: 'Starts', value: 50, suffix: '+', detail: 'On record' },
]

export const ridingStatsNote = 'Through the 2026 season.'

/** Sponsor names. Leave empty until there is someone to list. */
export const supportedBy: string[] = []

export const ridingIntro = {
  kicker: 'Bike racer',
  home: 'Bellingham, WA',
  paragraphs: [
    'I race the Cascadia Dirt Cup, the premier enduro series in Washington, Oregon, and Idaho, where I finished 4th overall against World Cup riders. I also race downhill on the NW Cup, and I have started in Canada, Mexico, Portugal, and Switzerland.',
  ],
}

export const heroPhoto = {
  src: plate28,
  alt: 'Mason Rudolph rides a mountain bike through a forest turn at the Galbraith Enduro, wearing race plate 28.',
  credit: 'Heather Peterson',
  width: 1800,
  height: 1200,
}

export const featuredResult = {
  date: '2026-07-12',
  event: 'Galbraith Enduro',
  series: 'Northwest Tune-Up',
  place: '2nd',
  detail: 'Pro Men · 22:30.67',
  venue: 'Galbraith Mountain, Washington',
  image: podium,
  alt: 'Mason Rudolph stands at the left of the podium holding his result check after the Galbraith Enduro on July 12, 2026.',
  credit: 'Heather Peterson',
  width: 1024,
  height: 683,
  recapHref: 'https://www.vitalmtb.com/community/Race%20Cascadia/blog/07/15/2026/entry/150006',
}

export const proPodiums: RaceResult[] = [
  {
    date: '2026-09-19',
    event: 'Post Canyon',
    meta: 'Cascadia Dirt Cup · Pro · Hood River, OR · 20:49.96',
    place: '4th',
  },
  {
    date: '2026-07-12',
    event: 'Galbraith Enduro',
    meta: 'Northwest Tune-Up · Pro Men · 22:30.67',
    place: '2nd',
  },
  {
    date: '2026-06-27',
    event: 'Yacolt Burn',
    meta: 'Cascadia Dirt Cup · Pro · Battle Ground, WA · 29:30.61',
    place: '4th',
  },
  {
    date: '2024-06-30',
    event: 'Raging River',
    meta: 'Cascadia Dirt Cup · Pro · 20:57.86',
    place: '5th',
  },
]

export type Highlight = {
  when: string
  event: string
  meta: string
  place: string
}

/** TranSierra Norte year is 2024 per Mason; a public result listing was not found. */
export const recentHighlights: Highlight[] = [
  {
    when: '2026',
    event: 'Cascadia Dirt Cup',
    meta: 'Series overall',
    place: '4th',
  },
  {
    when: '2024',
    event: 'TranSierra Norte',
    meta: 'Overall · Oaxaca, Mexico',
    place: '6th',
  },
]

export const resultsRecordHref = 'https://www.rootsandrain.com/rider157717/mason-rudolph/results/'

export const plans2027 = [
  'Squamish Enduro',
  'Cascadia Dirt Cup',
  'North American Enduro Cup',
  'Crankworx Enduro Series',
  'Enduro World Champs',
  'Multi-Day Enduro Race',
]

export const trailPhoto = {
  src: plate104,
  alt: 'Mason Rudolph manuals a mountain bike through a narrow forest trail.',
  credit: 'Kid Clicks A Lot',
  width: 2000,
  height: 1333,
}
