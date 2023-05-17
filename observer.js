'use strict';
{
    const targets = document.querySelectorAll(".side-scroll__item")

    console.log(targets)
    const options = {
        threshold: 0.1,
    }

    const callback = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log("TEST")
                console.log(targets)
            } else {

            };
        });
    }

    const observer = new IntersectionObserver(callback, options)

    targets.forEach(target => {
        observer.observe(target);
    });
}



