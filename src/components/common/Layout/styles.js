import { createGlobalStyle } from 'styled-components';
import colors from "tokens/colors";


export const Global = createGlobalStyle`


:root {
  font-size: 16px;
  // The unity bellow makes sure that paragraphs elements will never exceed this width. It's a comproved width that guarantees better readability.
  --measure: 70ch;
}

* {
  box-sizing: border-box;
}
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    div,
    summary {
      display: block ;
      max-width: none;
    }
  
   
    img {
      border-style: none;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    
 
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    
    html {
      font: 112.5%/1.45em georgia, serif;
      box-sizing: border-box;
      overflow-y: scroll;
    }
  
    img {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }

    small {
      font-size: 1em;
      font-family: 'Sarabun', sans-serif;
      font-weight: 400;
      color: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
      color: inherit;
      font-weight: 300;
      font-family: "MillerBanner", Serif;
      text-rendering: optimizeLegibility;
    }

    h1 {
      font-size: 5rem;
      margin-bottom: 1rem;
      line-height: 1.1;
      font-weight: 300;
      color: ${colors.$bordo};

    }

    h2 {
      margin-bottom: 1.45rem;
      font-size: 1.25rem;
      font-family: "Sarabun", sans;
      line-height: 1.1;
      color: ${colors.$textonormal};
      
    }
    h3 {
      font-size: 1.38316rem;
      line-height: 1;
    }
    h4 {
      font-size: 1rem;s
      line-height: 1.1;
    }
    h5 {
      font-size: 0.85028rem;
      line-height: 1.1;
    }
    h6 {
      font-size: 0.78405rem;
      line-height: 1.1;
    }
    hgroup {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    ul {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    ol {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    dl {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    dd {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    p {
      margin: 0 0 1.5rem 0;
      padding: 0;
      line-height: 1.3;
      font-size: 1rem;
      max-width: var(--measure);
      font-family: 'Sarabun', Sans;
      color: ${colors.$textonormal};
    }
    figure {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    pre {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 0.85rem;
      line-height: 1.42;
      background: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      overflow: auto;
      word-wrap: normal;
      padding: 1.45rem;
    }
    table {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 1rem;
      line-height: 1.45rem;
      border-collapse: collapse;
      width: 100%;
    }
    fieldset {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    blockquote {
      margin-left: 1.45rem;
      margin-right: 1.45rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    form {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    noscript {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    iframe {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    hr {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.45rem - 1px);
      background: hsla(0, 0%, 0%, 0.2);
      border: none;
      height: 1px;
    }
    address {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(1.45rem / 2);
    }
    ol li {
      padding-left: 0;
    }
    ul li {
      padding-left: 0;
    }
    li > ol {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    li > ul {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    li *:last-child {
      margin-bottom: 0;
    }
    p *:last-child {
      margin-bottom: 0;
    }
    li > p {
      margin-bottom: calc(1.45rem / 2);
    }
    code {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    kbd {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    button {
      font-family: "Sarabun", Sans;
      font-size: .85rem;
      padding: 0;
    }

    
    
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
    body {
      margin: 0;
      padding: 0;
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      font-family: 'Sarabun',sans-serif;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      background: ${colors.$creme};
    }
    a {
      text-decoration: none;
      font-weight: 400;
      color: #402C32;
      font-family: 'MillerBanner',sans-serif;
    }
    input, select, textarea, button {
      border: none;
      resize: none; 
      background-color: transparent;


      &:focus {
        outline: none;
      }
    }
  }
`