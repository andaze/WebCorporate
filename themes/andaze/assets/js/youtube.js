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

if (document.getElementById("youtube-video")) {
    handleYoutube();
}
