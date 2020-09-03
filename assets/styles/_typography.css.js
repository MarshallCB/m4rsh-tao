const { css } = require('ucontent');

module.exports = css`
  @font-face {
    font-family: 'Unna';
    src: url('/fonts/unna-regular.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Unna';
    src: url('/fonts/unna-bolditalic.woff2') format('woff2');
    font-weight: bold;
    font-display: swap;
  }

  html,body{
    font-family: 'Unna', serif;
    font-size: 18px;
    color: hsl(220,30%,20%);
  }
`