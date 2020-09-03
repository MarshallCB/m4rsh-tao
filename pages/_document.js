import { html, css, raw, svg, js } from 'ucontent';

export default ({meta, body}) => html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <base href="/" >
      <title>${meta.title}</title>
      <meta name="description" content="${meta.description}" />

      <!-- Favicon generated using realfavicongenerator.net -->
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=eEY59WGawk">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=eEY59WGawk">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=eEY59WGawk">
      <link rel="manifest" href="/favicon/site.webmanifest?v=eEY59WGawk">
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=eEY59WGawk" color="#3d668f">
      <link rel="shortcut icon" href="/favicon/favicon.ico?v=eEY59WGawk">
      <meta name="msapplication-TileColor" content="#3d668f">
      <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=eEY59WGawk">
      <meta name="theme-color" content="#ffffff">

      <link rel="stylesheet" type="text/css" href="/styles/global.css" />
    </head>
    <body>
      <script src="/scripts/global.js" />
      <div class="background"></div>
      <div class="container">
        ${body}
        <footer class="b">
          <a href="https://en.wikipedia.org/wiki/Tao_Te_Ching">History</a>
          <a href="https://en.wikisource.org/wiki/Translation:Tao_Te_Ching">References</a>
          <a href="https://github.com/MarshallCB/m4rsh-tao">Source Code</a>
        </footer>
      </div>
    </body>
  </html>
`.min().toString()