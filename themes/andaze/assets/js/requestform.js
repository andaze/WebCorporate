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

    if (window.innerWidth >= 900) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= target_static) {

                form.style.opacity = 1;
                form.style.visibility = "visible";

            } else if (window.scrollY < target_static) {
                new Promise((resolve) => {
                    setTimeout(() => {
                        form.style.opacity = 0;
                        resolve();
                    }, 10);
                }).then(() => {
                    setTimeout(() => {
                        form.style.visibility = "hidden";
                    }, 500)
                });
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
    }

}
