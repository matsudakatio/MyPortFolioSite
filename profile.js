'use strict';
{
    const targets = document.getElementById("profile")
    const text = new SplitType('h1')
    gsap.registerPlugin('ScrollTrigger');

    // console.log(targets)
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

                gsap.to("#profileImg", {
                    skewX:8,
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
                

                
                ityped.init(document.querySelector("#ityped"), {
                    strings: [
                        `
                        Loading.../
                        `,
                        `
                        自己紹介.txt
                        `,
                        `
                        textテキストtexttextテキストtexttextテキスト
                        texttextテキストtexttextテキス
                
                        textテキストtexttextテキストtext
                
                
                        texttextテキストtexttextテキス
                
                        textテキストtexttextテキストtexttex
                
                        texttextテキストtexttextテキス
                        textテキストtexttextテキストtexttextテキスト
                
                
                        texttextテキストtexttextテキス
                        `
                    ],
                    typeSpeed: 12,
                    loop: false,
                    // showCursor: true,
                })

                
            }
        });
    }


    const observer = new IntersectionObserver(callback, options)
    observer.observe(targets);
}



