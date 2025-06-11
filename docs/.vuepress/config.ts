import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/header.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Life',
            link: '/life/'
          },
          {
            text: 'Docs',
            prefix: '/group/',
            children: [{ text: 'Network', link: 'network.md' }, { text: 'etc', link: 'etc.md' }],
          },
        ],
        sidebar: {
          '/life/': [
            {
              text: 'Life',
              children: [
                {
                  text: 'A photograph',
                  link: '/life/one_photograph/one_photograph.md',
                }
              ],
            },
          ],
        },
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: [
          {
            text: '首页',
            link: '/zh/',
          },
          {
            text: '生活',
            link: '/zh/life/'
          },
          {
            text: '文档',
            children: [{ text: '网络', link: '/zh/group/network.md' }, { 'text': '其他', link: '/zh/group/etc.md' }],
          },
        ],
        sidebar: {
          '/zh/life/': [
            {
              text: '生活',
              children: [
                {
                  text: '一张照片？',
                  link: '/zh/life/one_photograph/one_photograph.md',
                }
              ],
            },
          ],
        },
      },
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      hotKeys: [
        { key: 'i', ctrl: true }
      ],
    }),
    copyCodePlugin(),
    backToTopPlugin()
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'fexdep',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'fexdep',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
})

