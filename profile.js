'use strict';
{
    const targets = document.getElementById("profile")
    const text = new SplitType('h1')
    gsap.registerPlugin('ScrollTrigger');

    // console.log(targets)
    const options = {
        threshold: 0.1,
    }

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                gsap.to(".char", {
                  y: 0,
                  stagger: 0.05,
                  delay: 0.2,
                  duration: 0.4,
                  ease: "power2.out",
                })

                ityped.init(document.querySelector("#myname"), {
                    strings: [
                        `Matsuda Kaito`
                    ], 
                    loop:false,
                    typeSpeed: 32,
                    showCursor: false,
                    startDelay: 2000,
                })

                gsap.from("#katagaki", {
                    y: 8,
                    duration: .4,
                    autoAlpha: 0,
                    delay: 2.2,
                    ease: "power2.out",
                  })

                gsap.from("#profileImg", {
                    // scale: 1.1,
                    autoAlpha: 0,
                    duration: .3, 
                    delay: 3,
                    ease: "power2.out",
                })
                

                
                ityped.init(document.querySelector("#profileText"), {
                    strings: [
                        `
                        textテキストtexttextテキストtexttextテキストtexttextテキストtexttextテキtextテキストtexttextテキストtexttexttextテキストtexttextテキスtextテキストtexttextテキストtexttextexttextテキストtexttextテキtextテキストtexttextテキストtexttextテキストtexttextテキストtexttextテキス
                        `
                    ],
                    typeSpeed: 32,
                    loop: false,
                    showCursor: false,
                    startDelay: 2400,
                    
                })

                observer.unobserve(entry.target);

                
            }
        });
    }


    const observer = new IntersectionObserver(callback, options)
    observer.observe(targets);
}



