
gsap.registerPlugin('ScrollTrigger');
gsap.fromTo('.container',{scale:4},{scale:1,
    scrollTrigger:{
        trigger:'.center',
        start:'center center',
        scrub:1,
        pin:'.container',
        onEnter:()=>{
            gsap.set('figure:not(.center)',{autoAlpha:1})
            gsap.to('footer', {
              autoAlpha: 0
            })
        },
        onLeaveBack:()=>{
            gsap.set('figure:not(.center)',{autoAlpha:0})
            gsap.to('footer', {
              autoAlpha: 1
            })
        },
    }
})