import { html } from 'ucontent'
import document from './_document'

export default ({ number, text }) => {
  // Split text by "newline" signal and only include lines with text
  let ans = document({
    meta: {
      title: `Chapter ${number} | Tao Te Ching`,
      description: `${text[0]}...`
    },
    body: html`
      <h2 class="top-title">
        <a href="/">Tao Te Ching</a>
      </h2>
      <h1 class="title">
        Chapter ${number}
      </h1>
      <div class="card">
        ${text.map(line => html`
          <p>${line}</p>
        `)}
      </div>
    `
  })
  return ans.toString();
}