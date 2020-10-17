/*
 * @Author: jiarong.deng
 * @Date: 2020-10-14 16:09:38
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-10-14 16:14:39
 * @Description: file content
 */
import hljs from 'highlight.js';


export function fetchFile(url) {
  return fetch(url).then(res => {
    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let text = '';
    const push = ({ value, done }) => {
          if (done) {
            try { 
              return JSON.parse(text);
            } catch (parseErr) {
              return text;
            }
          }
          text += decoder.decode(value, { stream: true });
          return reader.read().then(push);
      };
      return reader.read().then(push);
  });
}

/**
 * @description: 
 * @param {type} 
 * @return {type} 
 */
export function parsetoHtml(url) {
  const md = require('markdown-it')({
    html: true,
    linkify: true,
    breaks: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs bs"><code>' +
                 hljs.highlight(lang, str, true).value +
                 '</code></pre>';
        } catch (__) {}
      }
  
      return '<pre class="hljs bs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  return fetchFile(url).then(text => md.render(text));
}