export type WorkItem = {
  period: string
  title: string
  org: string
  summary: string
  href?: string
}

export const workPage = {
  kicker: 'Work',
  title: 'Off the bike',
  summary: 'Racing is the public part. The rest of what I do will go here.',
}

/**
 * Add a role or project and it shows up on the Work page.
 *
 * {
 *   period: '2024 —',
 *   title: 'Role',
 *   org: 'Organization',
 *   summary: 'One or two sentences.',
 *   href: 'https://example.com',
 * }
 */
export const workItems: WorkItem[] = []
