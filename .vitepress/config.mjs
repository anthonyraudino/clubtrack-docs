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
          { text: 'Firearms Records', link: '/guides/firearms-records' },
          { text: 'Renewals & Payments', link: '/guides/renewals-payments' },
          { text: 'Membership Renewal Lifecycle', link: '/guides/renewal-lifecycle' },
          { text: 'Junior Members & Guardians', link: '/guides/juniors-and-guardians' },
          { text: 'Membership Cards', link: '/guides/membership-cards' },
          { text: 'Documents & Membership Card', link: '/guides/documents-and-card' },
          { text: 'Using the Club Kiosk', link: '/guides/kiosk' }
        ]
      },
      {
        text: 'Administrator Help',
        collapsed: false,
        items: [
          { text: 'Managing Members', link: '/guides/admin-members' },
          { text: 'Membership Change Requests', link: '/guides/membership-change-requests' },
          { text: 'Participation Management', link: '/guides/admin-participations' },
          { text: 'Participation Compliance', link: '/guides/participation-compliance' },
          { text: 'Attendance / LRD Export', link: '/guides/attendance-lrd-export' },
          { text: 'Renewals & Financials', link: '/guides/admin-financials' },
          { text: 'Billing Rules & Membership Tiers', link: '/guides/billing-rules-and-tiers' },
          { text: 'Club Settings', link: '/guides/admin-settings' }
        ]
      },
      {
        text: 'Add-ons',
        collapsed: false,
        items: [
          { text: 'AssetTrack & NORI', link: '/guides/assettrack-and-nori' }
        ]
      },
      {
        text: 'Support',
        collapsed: false,
        items: [
          { text: 'Troubleshooting', link: '/guides/troubleshooting' },
          { text: 'Common Support Scenarios', link: '/guides/common-support-scenarios' }
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
