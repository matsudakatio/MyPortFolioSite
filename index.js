{
    'use strict';
{
    const targets = document.getElementById("profile")

    console.log(targets)
    const options = {
        threshold: 0.1,
    }

    const callback = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                ityped.init(document.querySelector("#ityped"), {
                    strings: [
                        `
                        Loading...///
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
                
                        textテキストtexttextテキストtext
                
                
                        texttextテキストtexttextテキス
                
                        textテキストtexttextテキストtexttex
                
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
}