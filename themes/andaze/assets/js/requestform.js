export function handleForm() {
    const form = document.getElementById('accordion-collapse');
    const expander = document.querySelector('#accordion-collapse-heading-request > p');
    const expander_body = document.getElementById('accordion-collapse-body-request');
    console.log(expander)
    console.log(expander.getAttribute('aria-expanded'))

    let first_shown = true;

    form.style.opacity = 0;
    form.style.visibility = "invisible";

    const key_visual = document.getElementById("key-visual");
    let key_visual_bottom = key_visual.getBoundingClientRect().bottom + window.pageYOffset;
    let target_static = key_visual_bottom - (window.innerHeight * 0.88);

    var timeoutId;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= target_static) {

            form.style.opacity = 0;
            form.style.visibility = "invisible";

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
            form.style.visibility = "invisible";
        }
    });

    window.setInterval(() => {
        console.log(first_shown)
    }, 500)

}
