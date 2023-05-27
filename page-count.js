{
    gsap.fromTo('circle',{rotate:0,strokeDasharray:'0,905'},{rotate:0,strokeDasharray:'905,905',
    scrollTrigger:{
        trigger:'.profile',
        start:'center center',
        scrub:1,
        pin:true,
        // markers: true,
        ease:'none',
    }
})
}

{
    gsap.from('.colorBox',{
        scaleY: "auto",
        scrollTrigger:{
            trigger:'.profile',
            start:'center center',
            scrub:1,
            ease:'none',
        }
    })
}


