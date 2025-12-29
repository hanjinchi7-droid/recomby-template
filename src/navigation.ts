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
  // 策略：为了排版均匀，我们将内容分为三列：
  // 1. Navigation (核心导航)
  // 2. Legal (法律条款，显得正规)
  // 3. Connect (联系方式，再次强化)
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' }, // 你的文章归档
      ],
    },
    {
      title: 'Legal',
      links: [
        // 如果暂时没有这两个页面，可以把 href 改成 '#'，或者先留着未来用
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', href: 'https://github.com/recomby-ai' },
        { text: 'Reddit', href: 'https://www.reddit.com/r/recomby_ai/' },
        { text: 'Email', href: 'mailto:contact@recomby.ai' },
      ],
    },
  ],

  // 底部次级链接（因为上面已经放了 Legal，这里可以留空，或者只保留版权）
  secondaryLinks: [],

  // 社交图标栏 (底部右侧)
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/recomby-ai' },
    // 新增：Reddit 图标 (Tabler 图标库中有 brand-reddit)
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/recomby_ai/' },
    // 邮件图标
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@recomby.ai' },
  ],

  // 版权信息
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://recomby.ai/"> Recomby.ai</a> · All rights reserved.
  `,
};