(()=>{var o=document.getElementById("accordion-collapse"),y=document.getElementById("request-form-pc"),E=document.querySelector("#accordion-collapse-heading-request > p"),w=document.getElementById("accordion-collapse-body-request"),_=document.getElementById("request-form-mobile"),i=document.querySelector("#request-form-mobile > button"),v=i.textContent,r=!1;var n=document.getElementById("black_background");i.addEventListener("click",()=>{r?(new Promise(d=>{setTimeout(()=>{o.style.opacity=0,n.style.opacity=0,y.style.pointerEvents="none"},10),d()}).then(()=>{setTimeout(()=>{o.style.visibility="hidden",n.style.visibility="hidden"},500)}),r=!1,i.textContent=v):(o.style.opacity=1,o.style.visibility="visible",y.style.pointerEvents="auto",n.style.opacity=.6,n.style.visibility="visible",r=!0,i.textContent="\u9589\u3058\u308B")});var f=document.querySelectorAll(".movie-thumbnail"),s=document.getElementById("movie-modal"),g=document.getElementById("modal-close"),l=!1,c=document.getElementById("youtube-video"),h=document.querySelectorAll("a");f.forEach(d=>{d.addEventListener("click",p=>{new Promise(t=>{setTimeout(()=>{c.src="https://www.youtube.com/embed/"+p.target.id+"?enablejsapi=1"},10),t()}).then(()=>{setTimeout(()=>{b();let t=c.contentWindow;console.log(t);let a=function(e,m=null){t.postMessage('{"event":"command", "func":"'+e+'", "args":'+m+"}","*")};g.addEventListener("click",()=>{u("stopVideo"),c.src=""}),h.forEach(e=>{e.addEventListener("click",()=>{u("stopVideo"),c.src=""})});function b(){l===!1&&new Promise(e=>{setTimeout(()=>{s.style.visibility="visible",s.style.opacity=1},100),e()}).then(()=>{setTimeout(()=>{a("playVideo")},300)}).then(()=>{setTimeout(()=>{l=!0},500)})}function u(e){l===!0&&new Promise(m=>{setTimeout(()=>{a(e)},100),m()}).then(()=>{setTimeout(()=>{s.style.opacity=0,s.style.visibility="hidden"},300)}).then(()=>{setTimeout(()=>{l=!1},500)})}},100)})})});})();
