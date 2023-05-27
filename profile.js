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
                  delay: 0.1,
                  duration: 0.4,
                  ease: "power2.out",
                })

                gsap.to("#profileImg", {
                    // scale: 1.1,
                    opcaity: 0,
                    duration: .3, 
                    delay: .5,
                    ease: "power2.out",
                })


                ityped.init(document.querySelector("#myname"), {
                    strings: [
                        `Matsuda Kaito`
                    ], 
                    loop:false,
                    showCursor: false,
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
                    
                })

                observer.unobserve(entry.target);

                
            }
        });
    }


    const observer = new IntersectionObserver(callback, options)
    observer.observe(targets);
}



