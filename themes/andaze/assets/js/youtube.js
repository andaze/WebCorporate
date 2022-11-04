export function handleYoutube() {
    let contentNum;
    if (window.innerWidth > 280 && window.innerWidth < 851 ) {
        contentNum = 2;
    } else {
        contentNum = 3;
    }
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCfjT9TH2TOy7QRp1X_Ibr4A&maxResults=' + contentNum.toString() + '&order=date&type=video&key=AIzaSyCQdG7SoPSJVX-vhkkzhjSB6luh6a8Kyno',
        datatype: 'json',
        success: function(json){
            console.log('success')
            num = json.items.length;
            for(var i = 0; i < num ; i++){
                var ID = json.items[i].id.videoId;
                var image = json.items[i].snippet.thumbnails.medium.url;
                var title = json.items[i].snippet.title;
                $("#youtubeList").append(
                    '<div class="w-[31.3%]"><img class="h-[180px] w-full object-cover m-0 js-modal-video" src="' + image + '" data-video-id="' + ID + '"><p class="font-bold pt-5 text-sm">' + title + '</p></div>'
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
        }
    });
}