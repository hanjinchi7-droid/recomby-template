import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Archive',
      href: getPermalink('/tags'),
    },
  ],
};

// src/navigation.js

export const footerData = {
  links: [
    // 【第1列】网站导航 (Pages)
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
      ],
    },
    // 【第2列】内容索引 (Explore)
    // 虽然只有一个 Archive (即 Tags)，但单独占一列会让排版显得很透气、很高级
    {
      title: 'Explore',
      links: [
        { text: 'Archive', href: '/tags' },
      ],
    },
    // 【第3列】外部连接 (Connect)
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', href: 'https://github.com/recomby-ai' },
        { text: 'Reddit', href: 'https://www.reddit.com/r/recomby_ai/' },
        { text: 'Email', href: 'mailto:contact@recomby.ai' },
      ],
    },
  ],

  secondaryLinks: [],

  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/recomby-ai' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/recomby_ai/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@recomby.ai' },
  ],

  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://recomby.ai/"> Recomby.ai</a> · All rights reserved.
  `,
};