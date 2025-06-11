import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        if (typeof window !== 'undefined') {
            router.afterEach((to) => {
                // 只在首页且为中文浏览器时提示
                if (to.path === '/') {
                    const lang = window.navigator.language.toLowerCase()
                    if ((lang === 'zh-cn' || lang.startsWith('zh')) && !document.getElementById('lang-tip-bar')) {
                        // 创建提示条
                        const bar = document.createElement('div')
                        bar.id = 'lang-tip-bar'
                        bar.style.cssText = `
              position: fixed;
              left: 0; right: 0; bottom: 0;
              background: #222; color: #fff;
              padding: 12px 24px; z-index: 9999;
              display: flex; justify-content: center; align-items: center;
              font-size: 16px;
            `
                        bar.innerHTML = `
              检测到您的浏览器为中文，是否切换到中文页面？
              <button id="lang-tip-btn" style="margin-left:16px;padding:4px 12px;">切换到中文</button>
              <button id="lang-tip-close" style="margin-left:8px;padding:4px 12px;">关闭</button>
            `
                        document.body.appendChild(bar)
                        // 切换按钮
                        document.getElementById('lang-tip-btn')?.addEventListener('click', () => {
                            router.replace('/zh/')
                            document.body.removeChild(bar)
                        })
                        // 关闭按钮
                        document.getElementById('lang-tip-close')?.addEventListener('click', () => {
                            document.body.removeChild(bar)
                        })
                    }
                } else {
                    // 离开首页时移除提示条
                    const bar = document.getElementById('lang-tip-bar')
                    if (bar) document.body.removeChild(bar)
                }
            })
        }
    },
})