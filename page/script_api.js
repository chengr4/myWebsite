// Medium’s API is a JSON-based OAuth2 API. All requests are made to endpoints beginning:
/*const medium_API_url = "https://api.medium.com/v1";

fetch(medium_API_url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });*/

import {  article_left, article_center,  article_right } from './alter.js';

// 文章欄 template
const article_template = 
  `
  <div class="post">
    <div class="post-preview">
    <h6 class="post-title">${article_left.title}</h6>
    <p class="post-intro">${article_left.introduction}</p>
    <a  href=${article_left.url}>Read More</a>
    </div>
  </div>

  <div class="post">
    <div class="post-preview">
    <h6 class="post-title">${article_center.title}</h6>
    <p class="post-intro">${article_center.introduction}</p>
    <a  href=${article_center.url}>Read More</a>
    </div>
  </div>

  <div class="post">
    <div class="post-preview">
    <h6 class="post-title">${article_right.title}</h6>
    <p class="post-intro">${article_right.introduction}</p>
    <a  href=${article_right.url}>Read More</a>
    </div>
  </div> `;

document.querySelector('#posts').innerHTML = article_template;

/* 沒在用，保留 code 日後可能有用
const fn = document.querySelector("#first-note");

fn.addEventListener("click", test);

function test() {
  console.log('link click');

  //redirect 
  location.href = 'https://fscheng4747.medium.com/algorithm-nodes-b5166a825c68';
}
*/