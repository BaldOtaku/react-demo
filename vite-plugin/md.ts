import { marked } from 'marked'

const mdFileRegex = /\.md$/

function genMdComponent (content) {
  return `
    import { createElement } from 'react'
    export default ()=>createElement('div', {dangerouslySetInnerHTML:{__html:${content}}})
  `
}

function mdToReactFC (src) {
  const content = JSON.stringify(marked.parse(src))
  return genMdComponent(content)
}

function md () {
  return {
    name: 'transform-md',
    transform (src, id) {
      if (mdFileRegex.test(id)) {
        return {
          code: mdToReactFC(src)
        }
      }
    }
  }
}

export default md
