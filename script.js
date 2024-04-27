
var tl = gsap.timeline();

tl.from('#rand', {
    y: "-40%",
    duration: 0.3,
    delay: 0.3,
    stagger: 0.3,
    opacity: 0
})

tl.from('#dand', {
    x: "50%",
    duration: 0.5,
    stagger: 0.3,
    opacity: 0
})

tl.from('#rand2', {
    y: -20,
    duration: 0.7,
    opacity: 0
})

tl.from('#mega', {
    x: "100%",
    rotate: -50,
    duration: 1
})

gsap.from('.service h2', {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".service h2",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 3
    }
})
gsap.from('.service p', {
    y: "-50%",
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: ".service p",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 3
    }
})
gsap.from('.HeadingOne h2', {
    y: "-100%",
    scale: 1.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: " .HeadingOne h2",
        start: "top 60%",
        end: "bottom 70%",
        scrub: 3,

    }
})

gsap.from('.HeadingTwo h2', {
    y: "-100%",
    scale: 1.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: " .HeadingTwo h2",
        start: "top 60%",
        end: "bottom 70%",
        scrub: 3,

    }
})
gsap.from('.HeadingThree h2', {
    y: "-100%",
    scale: 1.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: " .HeadingThree h2",
        start: "top 60%",
        end: "bottom 70%",
        scrub: 3,

    }
})
gsap.from('.HeadingFour h2', {
    y: "-100%",
    scale: 1.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: " .HeadingFour h2",
        start: "top 60%",
        end: "bottom 70%",
        scrub: 3,

    }
})
gsap.from('.OneshoeLeft', {
    x: "-100%",
    rotate: 30,
    scrollTrigger: {
        scroller: "body",
        trigger: ".OneshoeLeft",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 3
    }
})
gsap.from('.OneshoeRight', {
    rotate: -30,
    x: "100%",
    scrollTrigger: {
        scroller: "body",
        trigger: ".OneshoeRight",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 3
    }
})
gsap.from('.productsDada', {
    x: "100%",
    opacity: 0,
    duration: 1,
    stagger: 1,
    scale: 1.6,
    scrollTrigger: {
        scroller: "body",
        trigger: ".productsDadaOuter",
        start: "top 80%",
        end: "bottom 100%",
        scrub: 3
    }

})
gsap.from('.productsDada2', {
    x: "100%",
    opacity: 0,
    duration: 1,
    stagger: 1,
    scale: 1.6,
    scrollTrigger: {
        scroller: "body",
        trigger: ".productsDadaOuter2",
        start: "top 80%",
        end: "bottom 100%",
        scrub: 3
    }

})
gsap.from('.productsDada3', {
    x: "100%",
    opacity: 0,
    duration: 1,
    stagger: 1,
    scale: 1.6,
    scrollTrigger: {
        scroller: "body",
        trigger: ".productsDadaOuter3",
        start: "top 80%",
        end: "bottom 100%",
        scrub: 3
    }

})

gsap.from('.TwoshoeLeft', {
    x: "-100%",
    rotate: 30,
    scrollTrigger: {
        scroller: "body",
        trigger: ".TwoshoeLeft",
        start: "top 30%",
        end: "bottom 100%",
        scrub: 3
    }
})
gsap.from('.TwoshoeRight', {
    rotate: -30,
    x: "100%",
    scrollTrigger: {
        scroller: "body",
        trigger: ".TwoshoeRight",
        start: "top 30%",
        end: "bottom 100%",
        scrub: 3
    }
})

gsap.from('.leftPro', {
    x: "-50%",
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: ".leftPro",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 3
    }
})
gsap.from('.rightPro', {
    x: "50%",
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: ".rightPro",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 3
    }
})
gsap.from('.centerPro', {
    scale: 1.5,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: ".centerPro",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 3
    }
})
