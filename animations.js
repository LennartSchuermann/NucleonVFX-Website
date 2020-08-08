//Landing Page Animations
TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".caption", 1, {
    delay: 2.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeOutIn
})
TweenMax.staggerFrom(".navbar div ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeOutIn
}, 0.2)