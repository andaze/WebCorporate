(()=>{if(document.getElementById("request-form-pc")){let t=document.getElementById("download_form_wrapper"),o=document.getElementById("request-form-pc"),e=!1,n=document.getElementById("black_background");if(document.querySelector("#request-form-mobile > button")){let i=document.querySelector("#request-form-mobile > button"),l=i.textContent;i.addEventListener("click",()=>{e?(new Promise(s=>{setTimeout(()=>{t.style.opacity=0,n.style.opacity=0,o.style.pointerEvents="none"},10),s()}).then(()=>{setTimeout(()=>{t.style.visibility="hidden",n.style.visibility="hidden"},500)}),e=!1,i.textContent=l):(t.style.opacity=1,t.style.visibility="visible",o.style.pointerEvents="auto",n.style.opacity=.6,n.style.visibility="visible",e=!0,i.textContent="\u9589\u3058\u308B")})}}var v=document.querySelectorAll(".movie-thumbnail"),d=document.getElementById("movie-modal"),b=document.getElementById("modal-close"),m=!1,u=document.getElementById("youtube-video"),E=document.querySelectorAll("a");v.forEach(t=>{t.addEventListener("click",o=>{new Promise(e=>{setTimeout(()=>{u.src="https://www.youtube.com/embed/"+o.target.id+"?enablejsapi=1"},10),e()}).then(()=>{setTimeout(()=>{i();let e=u.contentWindow;console.log(e);let n=function(s,r=null){e.postMessage('{"event":"command", "func":"'+s+'", "args":'+r+"}","*")};b.addEventListener("click",()=>{l("stopVideo"),u.src=""}),E.forEach(s=>{s.addEventListener("click",()=>{l("stopVideo"),u.src=""})});function i(){m===!1&&new Promise(s=>{setTimeout(()=>{d.style.visibility="visible",d.style.opacity=1},100),s()}).then(()=>{setTimeout(()=>{n("playVideo")},300)}).then(()=>{setTimeout(()=>{m=!0},500)})}function l(s){m===!0&&new Promise(r=>{setTimeout(()=>{n(s)},100),r()}).then(()=>{setTimeout(()=>{d.style.opacity=0,d.style.visibility="hidden"},300)}).then(()=>{setTimeout(()=>{m=!1},500)})}},100)})})});var f=t=>new Promise(o=>{setTimeout(o,t)}),h=async(t,o)=>{let e=document.createElement("a");e.download=o,e.href=t,e.style.display="none",document.body.append(e),e.click(),await f(100),e.remove()};async function y(t,{rename:o}={}){if(!t)throw new Error("`urls` required");for(let[e,n]of t.entries()){let i=typeof o=="function"?o({url:n,index:e,urls:t}):"";await f(e*1e3),h(n,i)}}var a={send:function(t){return new Promise(function(o,e){t.nocache=Math.floor(1e6*Math.random()+1),t.Action="Send";var n=JSON.stringify(t);a.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",n,function(i){o(i)})})},ajaxPost:function(t,o,e){var n=a.createCORSRequest("POST",t);n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onload=function(){var i=n.responseText;e?.(i)},n.send(o)},ajax:function(t,o){var e=a.createCORSRequest("GET",t);e.onload=function(){var n=e.responseText;o?.(n)},e.send()},createCORSRequest:function(t,o){var e=new XMLHttpRequest;return"withCredentials"in e?e.open(t,o,!0):typeof XDomainRequest<"u"?(e=new XDomainRequest).open(t,o):e=null,e}};var c=document.querySelector(".downloadButton"),w=c.dataset.files.split(" ");document.querySelector("#privacy").addEventListener("click",()=>{B()});document.getElementById("download_form").addEventListener("submit",t=>{t.preventDefault(),g()});function g(){let t=document.getElementById("first_name").value,o=document.getElementById("last_name").value,e=document.getElementById("company_name").value,n=document.getElementById("email").value,i="7670de06-d726-44e6-af6c-96dca7e5b64f",l="contact@andaze.com",s="contact@andaze.com",r="contact@andaze.com",p=`\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30D5\u30A9\u30FC\u30E0\u304B\u3089\u30B8\u30A7\u30CD\u30EA\u30C3\u30AFDX\u306E\u8CC7\u6599\u304C\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3057\u305F\u3002:
    <hr>
    <br>
    \u540D := ${t} ${o}, <br> 
    \u4F1A\u793E\u540D:= ${e},<br> 
    \u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 := ${n},<br> `;a.send({SecureToken:i,To:l,From:r,Bcc:s,Subject:`\u8CC7\u6599\u304C\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3057\u305F\u3002 ${t} ${o}`,Body:p}).then(q=>alert("\u8CC7\u6599\u304C\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3057\u305F\u3002")).then(y(w))}function B(){document.getElementById("privacy").checked?(c.classList.remove("opacity-50","bg-black","!cursor-not-allowed","pointer-events-none"),c.classList.add("bg-[#E01E58]","hover:from-white","hover:to-white","bg-gradient-to-r","from-red-500","to-[#E01E5B]","hover:text-[#E01E58]","hover:border-[#E01E58]","cursor-pointer")):(c.classList.add("opacity-50","bg-black","!cursor-not-allowed","pointer-events-none"),c.classList.remove("bg-[#E01E58]","hover:from-white","hover:to-white","bg-gradient-to-r","from-red-500","to-[#E01E5B]","hover:text-[#E01E58]","hover:border-[#E01E58]","cursor-pointer"))}})();
