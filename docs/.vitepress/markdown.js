import container from 'markdown-it-container'

export function md_config(md) {
  md.use(container, 'bibleref', {
    render(tokens, idx) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        const info = token.info.trim().slice('bibleref'.length).trim()
        return `
          <div class="bibleref">
            <div class="verse-ref">
              ${info}
            </div>
        `
      } else {
        return `</div>`
      }
    }
  })

  md.use(container, 'spotlight', {
    render(tokens, idx) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        const info = token.info.trim().slice('spotlight'.length).trim()
        return `
          <div class='spotlight'>
            <h3 class='spotlight-title'>
              ${info}
            </h3>
        `
      } else {
        return '</div>'
      }
    }
  })
}
