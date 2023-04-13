const movie_thumbnails = document.querySelectorAll(".movie-thumbnail");

const movie_modal = document.getElementById("movie-modal");
const movie_close = document.getElementById("modal-close");
let isOpen = false;

const target_iframe = document.getElementById("youtube-video");

const links = document.querySelectorAll("a");

export async function handleYoutube() {

    movie_thumbnails.forEach((movie_thumbnail) => {
        movie_thumbnail.addEventListener("click", async (e) => {
            await sleep(10);
            target_iframe.src =
                "https://www.youtube.com/embed/" + e.target.id + "?enablejsapi=1";

            await modalOpen();

            movie_close.addEventListener("click", () => {
                modalClose("stopVideo");
                target_iframe.src = "";
            });

            links.forEach((link) => {
                link.addEventListener("click", () => {
                modalClose("stopVideo");
                target_iframe.src = "";
                });
            });
        });
    });
}
  

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//APIのコマンドを送信する関数
const videoControl = function (targetWindow, action, arg = null) {
    targetWindow.postMessage(
    `{"event":"command", "func":"${action}", "args":${arg}}`,
    "*"
    );
};

const modalOpen = async () => {
    if (isOpen === false) {
        await sleep(100);
        movie_modal.style.visibility = "visible";
        movie_modal.style.opacity = 1;

        await sleep(300);
        const targetWindow = target_iframe.contentWindow;
        videoControl(targetWindow, "playVideo");

        await sleep(500);
        isOpen = true;
    }
};

const modalClose = async (option) => {
    if (isOpen === true) {
        const targetWindow = target_iframe.contentWindow;
        await sleep(100);
        videoControl(targetWindow, option);

        await sleep(300);
        movie_modal.style.opacity = 0;
        movie_modal.style.visibility = "hidden";

        await sleep(500);
        isOpen = false;
    }
};