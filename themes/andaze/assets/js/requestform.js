export function handleForm() {
    const form = document.getElementById('accordion-collapse');
    const expander = document.querySelector('#accordion-collapse-heading-request > p');
    const expander_body = document.getElementById('accordion-collapse-body-request');

    let first_shown = true;

    form.style.opacity = 0;
    form.style.visibility = "hidden";

    const key_visual = document.getElementById("key-visual");
    let key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
    let target_static = key_visual_bottom - (window.innerHeight * 0.88);

    var timeoutId;

    if (window.innerWidth >= 900) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= target_static) {

                form.style.opacity = 0;

                clearTimeout( timeoutId ) ;

                timeoutId = setTimeout( function () {
                    if (window.scrollY >= target_static) {
                        form.style.opacity = 1;
                        form.style.visibility = "visible";
                        if (first_shown) {
                            first_shown = !first_shown;
                        } else if (!first_shown & expander.getAttribute('aria-expanded') === "false") {
                            expander_body.classList.add("hidden");
                        }
                    }
                }, 500 ) ;
            } else if (window.scrollY < target_static) {
                form.style.opacity = 0;
                form.style.visibility = "hidden";
            }
        });
    } else {
        const button_wrapper = document.getElementById('request-form-mobile');
        const button = document.querySelector('#request-form-mobile > button');
        const original_text = button.textContent;
        let clicked = false;

        const black_background = document.getElementById('black_background');


        window.addEventListener('scroll', () => {

            if (window.scrollY >= target_static) {
                button_wrapper.style.opacity = 1;
                button_wrapper.style.visibility = "visible";
            } else {
                button_wrapper.style.opacity = 0;
                button_wrapper.style.visibility = "hidden";
                black_background.style.visibility = "hidden";

                form.style.opacity = 0;
                form.style.visibility = "hidden";

                if (clicked) {
                    window.setTimeout(() => {
                        clicked = false;
                        button.textContent = original_text;
                    }, 1000);
                }

            }
        })
        button.addEventListener('click', () => {

            if (!clicked) {
                form.style.opacity = 1;
                form.style.visibility = "visible";

                black_background.style.opacity = 0.6;
                black_background.style.visibility = "visible";

                clicked = true;
                button.textContent = "閉じる";
            } else {
                form.style.opacity = 0;
                form.style.visibility = "hidden";

                black_background.style.opacity = 0;
                black_background.style.visibility = "hidden";

                clicked = false;
                button.textContent = original_text;
            }
        });
    }

}
