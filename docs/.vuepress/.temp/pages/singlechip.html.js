import comp from "/Users/jianjiuping/projects/jeffrey/notes/docs/.vuepress/.temp/pages/singlechip.html.vue"
const data = JSON.parse("{\"path\":\"/singlechip.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"prev\":\"./modules\",\"next\":\"/\"},\"headers\":[{\"level\":2,\"title\":\"单片机学习\",\"slug\":\"单片机学习\",\"link\":\"#单片机学习\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"singlechip.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
