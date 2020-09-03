const { css } = require('ucontent');

const reset = require('./_reset.css.js');
const typography = require('./_typography.css.js');

module.exports = css`
  ${reset}
  ${typography}
  ::selection{
    background-color: hsl(210, 60%, 90%);
    color: hsl(210, 100%, 40%);
  }
  html,body{
    background-color: hsl(210,30%,40%);
  }
  .background{
    position: fixed;
    pointer-events: none;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    background-image: linear-gradient(to bottom, hsl(210,30%,40%) 0%, hsl(210,50%,30%) 100%);
  }
  .container{
    width: 94%;
    max-width: 50rem;
    margin: 0 auto;
    padding: 3rem 0;
    position: relative;
  }
  .top-title{
    position: absolute;
    top: 1em;
    color: #fff;
    text-align: center;
    width: 100%;
    font-weight: normal;
  }
  .title{
    width: 100%;
    font-size: 3em;
    line-height: 1;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    position: relative;
  }
  .links>li{
    display: inline-block;
    width: calc(100%/9);
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    position: relative;
  }
  @media(max-width: 800px){
    .links>li{
      display: inline-block;
      width: calc(100%/6);
      color: #fff;
      font-size: 2em;
      font-weight: bold;
      position: relative;
    }
  }
  @media(max-width: 600px){
    .links>li{
      display: inline-block;
      width: calc(100%/3);
      line-height: 0;
      font-size: 2em;
      font-weight: bold;
      position: relative;
    }
  }
  .links>li>a{
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 999px;
    transition: background 0.1s;
    color: #fff;
  }
  .links>li>a:visited{
    color: hsl(210,100%,80%);
  }
  .links>li:hover>a,.links>li>a:focus{
    text-decoration: underline;
    background: hsla(210,100%,20%,0.2);
  }
  .menu-item{
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translate(0,-55%);
    text-decoration: inherit;
  }
  .card{
    width: 100%;
    background-color: hsl(210,90%,95%);
    box-sizing: border-box;
    line-height: 1.5;
    padding: 3rem;
    border-radius: 0.5em;
    position: relative;
  }
  .card:after,.card:before{
    content: '';
    position: absolute;
    pointer-events: none;
    background: transparent;
    border: 1px solid hsl(210, 100%, 70%);
    border-radius: 0.25em;
    left: 1em;
    top: 1em;
    bottom: 1em;
    right: 1em;
  }
  .card:after{
    left: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
    right: 0.5em;
  }
  .card>p{
    padding: 0.75em 0;
  }
  footer{
    margin-top: 3em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: hsl(210,100%,80%);
  }
  footer>a{
    padding: 0 1em;
  }
`.min().toString()