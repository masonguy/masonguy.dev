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
  summary:
    "I'm a software/data engineer with 6 years of experience. This page is under construction.",
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
