import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ClubTrack Support',
  description: 'User and administrator documentation for the ClubTrack web app',
  base: '/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/getting-started' },
      { text: 'Troubleshooting', link: '/guides/troubleshooting' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Getting Started with ClubTrack', link: '/guides/getting-started' },
          { text: 'Roles & Feature Availability', link: '/guides/features-and-access' }
        ]
      },
      {
        text: 'Member Help',
        collapsed: false,
        items: [
          { text: 'Managing Your Account', link: '/guides/member-account' },
          { text: 'Participation', link: '/guides/participation' },
          { text: 'Renewals & Payments', link: '/guides/renewals-payments' },
          { text: 'Documents & Membership Card', link: '/guides/documents-and-card' },
          { text: 'Using the Club Kiosk', link: '/guides/kiosk' }
        ]
      },
      {
        text: 'Administrator Help',
        collapsed: false,
        items: [
          { text: 'Managing Members', link: '/guides/admin-members' },
          { text: 'Participation Management', link: '/guides/admin-participations' },
          { text: 'Renewals & Financials', link: '/guides/admin-financials' },
          { text: 'Club Settings', link: '/guides/admin-settings' }
        ]
      },
      {
        text: 'Support',
        collapsed: false,
        items: [
          { text: 'Troubleshooting', link: '/guides/troubleshooting' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/anthonyraudino/clubtrack-docs'
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
