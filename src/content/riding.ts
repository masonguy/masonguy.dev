import plate104 from '@/assets/photos/plate-104.jpg'
import plate28 from '@/assets/photos/plate-28.jpg'
import podium from '@/assets/photos/podium.jpg'

export type CareerStat = {
  id: string
  label: string
  value: number
  detail: string
}

export type RaceResult = {
  date: string
  event: string
  meta: string
  place: string
}

/**
 * Numbers and sentences for the Ride page.
 *
 * Counted from public Roots & Rain results (rider 157717) on Oct 12, 2026.
 * Replace any of this before sending the site to a sponsor.
 *
 * Podiums (4):
 * - 2nd, Galbraith Enduro, Jul 12, 2026. The event recap lists Pro Men.
 *   Roots & Rain lists the same time under Open, 2 of 18.
 * - 3rd in the final, NW Cup #1, Cat 1 19–29, Apr 20, 2025 (downhill).
 * - 3rd, North Slope Enduro, Expert 18–29, Oct 2, 2021.
 * - 1st, North Mountain Enduro, Expert 18–29, Aug 21, 2021.
 * Countries (3): United States, Canada, Switzerland.
 * Wins (1): North Mountain Enduro.
 * Starts (34): recorded results on that Roots & Rain page.
 *
 * Past plates have listed Northwest Tri and Bike. Add a sponsor list here
 * only if you want those names on the page.
 */
export const ridingStats: CareerStat[] = [
  { id: 'podiums', label: 'Podiums', value: 4, detail: 'Top three' },
  { id: 'countries', label: 'Countries', value: 3, detail: 'Raced in' },
  { id: 'wins', label: 'Wins', value: 1, detail: 'Overall' },
  { id: 'starts', label: 'Starts', value: 34, detail: 'On record' },
]

export const ridingStatsNote = 'Public results through the 2026 season.'

export const ridingIntro = {
  kicker: 'Enduro & downhill',
  lede: 'Looking for sponsors for the season ahead.',
  paragraphs: [
    'I race enduro on the Cascadia Dirt Cup and downhill on the NW Cup. Most of my starts are in Washington, Oregon, and Idaho. I have also raced in British Columbia and at the Swiss Enduro Series in Laax.',
    'I am looking for sponsors for the coming season. Equipment, travel, and race support are the priorities.',
  ],
}

export const heroPhoto = {
  src: plate104,
  alt: 'Mason Rudolph manuals a mountain bike through a narrow forest trail, wearing race plate 104.',
  credit: 'Kid Clicks A Lot',
  width: 2000,
  height: 1333,
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
  recapHref: 'https://nwtuneup.com/news/2026-galbraith-mountain-enduro-recap-results',
}

export const selectedResults: RaceResult[] = [
  {
    date: '2026-09-19',
    event: 'Cascadia Dirt Cup #5',
    meta: 'Pro · Hood River, OR · 20:49.96',
    place: '4th',
  },
  {
    date: '2026-07-12',
    event: 'Galbraith Enduro',
    meta: 'Pro Men · Galbraith Mountain, WA · 22:30.67',
    place: '2nd',
  },
  {
    date: '2025-04-20',
    event: 'NW Cup #1',
    meta: 'Cat 1, 19–29 · Port Angeles, WA · 2:41.67',
    place: '3rd',
  },
  {
    date: '2021-10-02',
    event: 'North Slope Enduro',
    meta: 'Expert 18–29 · Olympia, WA · 21:02.38',
    place: '3rd',
  },
  {
    date: '2021-08-21',
    event: 'North Mountain Enduro',
    meta: 'Expert 18–29 · Darrington, WA · 20:33.34',
    place: '1st',
  },
]

export const resultsRecordHref = 'https://www.rootsandrain.com/rider157717/mason-rudolph/results/'

export const trailPhoto = {
  src: plate28,
  alt: 'Mason Rudolph rides a mountain bike through a forest turn at the Galbraith Enduro, wearing race plate 28.',
  caption: 'Galbraith Enduro, race plate 28.',
  credit: 'Heather Peterson',
  width: 1800,
  height: 1200,
}

export const sponsorship = {
  heading: 'Sponsorship',
  body: 'I am looking for partners for the coming season. Equipment, travel, and race support are what I need.',
}
