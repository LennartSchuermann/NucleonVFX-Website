TweenMax.staggerFrom(".navbar div ul li", 1, {
    opacity: 0,
    y: 20,
    ease: Expo.easeOutIn
}, 0.1)

//Gallery
TweenMax.staggerFrom(".gallery_ div img", 1, {
    delay: 0.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeOutIn
}, 0.1)

//Animations
TweenMax.staggerFrom(".content_box iframe", 1, {
    delay: 0.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeOutIn
}, 0.1)