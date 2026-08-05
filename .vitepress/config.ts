import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ClubTrack',
  description: 'Documentation for ClubTrack',
  base: '/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/introduction' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guides/introduction' },
          { text: 'Installation', link: '/guides/installation' },
        ]
      },
      {
        text: 'User Guides',
        collapsed: false,
        items: [
          { text: 'Managing Members', link: '/guides/members' },
          { text: 'Tracking Payments', link: '/guides/payments' },
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/anthonyraudino/clubtrack-docs'
      }
    ]
  }
})
