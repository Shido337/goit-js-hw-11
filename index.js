import{a as u,S as f,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="54652097-fa33845d90f17562231f3e558",m="https://pixabay.com/api/";async function p(a){return(await u.get(m,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery");let y=new f(".gallery a");function g(a){const o=a.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){l.innerHTML=""}function L(){document.querySelector(".loader").classList.add("active")}function w(){document.querySelector(".loader").classList.remove("active")}const c=document.querySelector(".form");c.addEventListener("submit",async a=>{a.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term"});return}h(),L();try{const r=await p(o);r.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}catch{n.error({title:"Error",message:"Something went wrong. Try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
