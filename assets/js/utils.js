/*
 * @Author: jiarong.deng
 * @Date: 2020-10-14 16:09:38
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-10-14 16:14:39
 * @Description: file content
 */

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
