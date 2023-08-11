var tl=gsap.timeline()
tl.from("#nav",{
    y:-100,
    duration:1,
})
tl.from("#page1-cont h1,#page1-cont button,#page1-cont h5",{
    y:200,
    opacity:0,
    duration:1,
    stagger:.2,
    delay:-.8
})
tl.from("#page2 h2",{
    x:-100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        // markers:true,
        trigger:"#page2",
        scroller:"body",
        start:"top 70%",
        end:"top 20%",
        scrub:3


    }
    
})
tl.from("#page2-div",{
    x:300,
    opacity:0,
    duration:2,
    delay:0,
    scrollTrigger:{
        // markers:true,
        trigger:"#page2",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3

    }
})
tl.from("#page3 h1",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        // markers:/true,
        trigger:"#page3",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3

    }

})
tl.from("#page3-div .box",{
    y:100,
    opacity:0,
    duration:1,
    stagger:.2,
    scrollTrigger:{
        // markers:true,
        trigger:"#page3",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3

    }
})