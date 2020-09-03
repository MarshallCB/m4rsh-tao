import { html } from 'ucontent'
import document from './_document'
import tao from './tao.json.js'

export default document({
  meta: {
    title: "Tao Te Ching",
    description: "English version of the Tao Te Ching, or Laozi, a classic Chinese text."
  },
  body: html`
    <h2 class="top-title">
      <a href="https://en.wikipedia.org/wiki/Tao_Te_Ching">
        Laozi, 6th Century BCE
      </a>  
    </h2>
    <h1 class="title">
      Tao Te Ching
    </h1>
    <nav>
      <ul class="links">
        ${JSON.parse(tao).map(c => html`
          <li>
            <a href=${`/chapter/${c.number}`}>
              <span class="menu-item">
                ${c.number}
              </span>
            </a>
          </li>
        `)}
      </ul>
    </nav>
    <footer>
      <a href="https://en.wikipedia.org/wiki/Tao_Te_Ching">History</a>
      <a href="https://en.wikisource.org/wiki/Translation:Tao_Te_Ching">References</a>
      <a href="https://github.com/MarshallCB/tao-m4rsh">Source Code</a>
    </footer>
  `
})