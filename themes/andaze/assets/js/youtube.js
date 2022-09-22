export function handleYoutube() {
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
    
    movie_thumbnail.addEventListener('mouseenter', () => {
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
            movie_modal.style.visibility = "visible";
            movie_modal.style.opacity = 1;
            videoControl('playVideo');
        }
        setTimeout(() => {
            isOpen = !isOpen;
        }, 500);
    }
    
    function modalClose(option) {
        if(isOpen) {
            videoControl(option);
            movie_modal.style.opacity = 0;
            movie_modal.style.visibility = "hidden";
        }
        setTimeout(() => {
            isOpen = !isOpen;
        }, 500);
    }
}
