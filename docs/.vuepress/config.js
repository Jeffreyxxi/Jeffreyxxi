import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      
      

      {
        text: "前端语言",
        prefix: "lang",
        children: [
          { text: "html", link: "" },
          { text: "javascript", link: "/javascript" },
          { text: "css", link: "" }
        ]
      },
      {
        text: "框架",
        prefix: "frame",
        children: [
          { text: "vue", link: "/vue" }
        ]
      },
      {
        text: "工具",
        prefix: "tools",
        children: [
          { text: "git", link: "/git" }
        ]
      },
      {
        text: "笔记",
        prefix: "notes",
        children: [
          { text: "linux", link: "/linux" },
          { text: "modules", link: "/modules" },
          { text: "node", link: "/node" },
          { text: "tests", link: "/tests" },
        ]
      },
    ]
  }),
  title: "jeffrey's notes"
})