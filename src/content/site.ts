export const site = {
  name: 'Mason Rudolph',
  description: 'Mason Rudolph, enduro and downhill racer. Results, photos, and sponsorship.',
  /**
   * Set this to a real address and a contact link appears on both pages.
   * Example: 'mason@masonguy.dev'
   */
  email: '',
} as const

export const nav = [
  { to: '/', label: 'Ride' },
  { to: '/work', label: 'Work' },
] as const
