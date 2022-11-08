export class handleYoutube {

  constructor() {
    this.showMulipleMovie();
    this.showCompanyMovie();
  }

    // YouTubeチャンネル動画の取得
    showMulipleMovie() {
      let contentNum = 3;
  
      $.ajax({
          type: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCfjT9TH2TOy7QRp1X_Ibr4A&maxResults=' + contentNum.toString() + '&order=date&type=video&key=AIzaSyCQdG7SoPSJVX-vhkkzhjSB6luh6a8Kyno',
          datatype: 'json',
          success: function(json){
              console.log('success')
              var num = json.items.length;
              for(var i = 0; i < num ; i++){
                  var ID = json.items[i].id.videoId;
                  var image = json.items[i].snippet.thumbnails.medium.url;
                  var title = json.items[i].snippet.title;
                  $("#youtubeList").append(
                      '<div class="w-full lg:w-[31.3%] mb-8 sm:mb-0"><img class="h-[180px] w-full object-cover m-0 js-modal-video" src="' + image + '" data-video-id="' + ID + '"><p class="font-bold pt-5 text-sm">' + title + '</p></div>'
                  );
              }
          },
          error: function(){
              alert('error');
          }
      }).done(function() {
          if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
              console.log('done')
            $(".js-modal-video").modalVideo({
              channel: "youtube",
              youtube: {
                rel: 0, //関連動画の指定
                autoplay: 0, //自動再生の指定
                controls: 0, //コントロールさせるかどうかの指定
              },
            });
            if(document.getElementById("top_main")) {
              // トップページmainタグの高さを取得してfooterのmargin-topに設定
              let main_height = document.getElementById("top_main").clientHeight;
              document.querySelector("footer").style.marginTop = main_height + "px";
            }
          }
      });
    }

    // 会社説明動画用
    showCompanyMovie() {
      const movie_thumbnail = document.getElementById('movie-thumbnail');

      const movie_modal = document.getElementById('movie-modal');
      const movie_close = document.getElementById('modal-close');
      let isOpen = false;
  
      const targetWindow = document.getElementById('youtube-video').contentWindow;
  
      const links = document.querySelectorAll('a');
  
      //APIのコマンドを送信する関数
      const videoControl = function(action,arg=null){
          targetWindow.postMessage('{"event":"command", "func":"'+action+'", "args":'+arg+'}', '*');
      };
  
      movie_thumbnail.addEventListener('click', () => {
          modalOpen();
      });
  
      movie_close.addEventListener('click', () => {
          modalClose('pauseVideo');
      });
  
      links.forEach(link => {
          link.addEventListener('click', () => {
              modalClose('stopVideo');
          });
      });
  
      function modalOpen() {
          if(!isOpen) {
              new Promise((resolve) => {
                  setTimeout(() => {
                      movie_modal.style.visibility = "visible";
                      movie_modal.style.opacity = 1;
                  }, 100);
                  resolve();
              }).then(() => {
                  setTimeout(() => {
                      videoControl('playVideo');
                  }, 300)
              }).then(() => {
                  setTimeout(() => {
                      isOpen = !isOpen;
                  }, 500);
              })
          }
      }
  
      function modalClose(option) {
          if(isOpen) {
              new Promise((resolve) => {
                  setTimeout(() => {
                      videoControl(option);
                  }, 100);
                  resolve();
              }).then(() => {
                  setTimeout(() => {
                      movie_modal.style.opacity = 0;
                      movie_modal.style.visibility = "hidden";
                  }, 300);
              }).then(() => {
                  setTimeout(() => {
                      isOpen = !isOpen;
                  }, 500);
              })
          }
      }
    }

}