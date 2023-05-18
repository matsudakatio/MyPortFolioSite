'use strict';
{
    const targets = document.getElementById("profile")
    const text = new SplitType('h1')
    gsap.registerPlugin('ScrollTrigger');

    console.log(targets)
    const options = {
        threshold: 0.1,
    }

    const callback = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                gsap.to(".char", {
                  y: 0,
                  stagger: 0.05,
                  delay: 0.1,
                  duration: 0.4,
                  ease: "power2.out",
                })
            }
        });
    }


    const observer = new IntersectionObserver(callback, options)
    observer.observe(targets);
}



