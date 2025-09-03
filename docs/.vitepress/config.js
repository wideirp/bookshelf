import { md_config } from './markdown.js'

/** @type {import('vitepress').UserConfig */
module.exports = {
  title: 'Bookshelf',
  description: 'A collection of books',
  markdown: {
    config: md_config,
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Proper Distinction between Law and Gospel', link: '/law_gospel/' },
    ],
    sidebar: {
      '/law_gospel/': [
        { text: 'First Lecture', link: '/law_gospel/first_lecture' },
        { text: 'Second Lecture', link: '/law_gospel/second_lecture' }
      ]
    }
  }
}
