import{a as u,S as m,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="53375029-d8153a1ccdcfd643a785188b2",y="https://pixabay.com/api/";u.defaults.baseURL=y;async function h(a){const r={key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get("",{params:r})).data}const p=document.querySelector(".gallery"),i=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({largeImageURL:s,webformatURL:o,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item"><span>Likes</span> ${t}</p>
          <p class="gallery-info-item"><span>Views</span> ${n}</p>
          <p class="gallery-info-item"><span>Comments</span> ${d}</p>
          <p class="gallery-info-item"><span>Downloads</span> ${f}</p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){p.innerHTML=""}function E(){i&&i.classList.remove("is-hidden")}function S(){i&&i.classList.add("is-hidden")}const c=document.querySelector(".form"),q=c.elements["search-text"];c.addEventListener("submit",v);async function v(a){a.preventDefault();const r=q.value.trim();if(!r){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(),E();try{const o=(await h(r)).hits;if(!o||o.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o)}catch(s){console.error(s),l.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}finally{S(),c.reset()}}
//# sourceMappingURL=index.js.map
