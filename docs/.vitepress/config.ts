import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/', // Root path for username.github.io
  outDir: '../dist', // Output directory at project root
  
  title: 'Bhargav Hegde',
  description: 'Machine Learning Engineer | AI Researcher | Transforming ideas into intelligent systems through AI, machine learning, and innovative engineering',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  
  themeConfig: {
    siteTitle: 'Bhargav Hegde',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Research', link: '/research' },
      { text: 'Projects', link: '/projects' },
      { text: 'Achievements', link: '/achievements' },
      { text: 'Resume', link: '/resume' },
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bhargavhegde' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/bhargavhegde5269' },
    ],
    
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025 Bhargav Hegde'
    },
    
    search: {
      provider: 'local'
    },
  },
})
