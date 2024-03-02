new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: false,

});

function animateText() {
    gsap.from(".animated-text1", {
        opacity: 0, // Start from opacity 0
        duration: 1.5, // Animation duration
        delay: 0.5, // Delay before animation starts
        ease: "power2.out" // Easing function
    })
    gsap.from(".animated-text2", {
        opacity: 0, // Start from opacity 0
        duration: 5, // Animation duration
        delay: 1, // Delay before animation starts
        ease: "power2.out" // Easing function
    })
    gsap.from(".animated-text3", {
        opacity: 0, // Start from opacity 0
        duration: 5, // Animation duration
        delay: 1.5, // Delay before animation starts
        ease: "power2.out" // Easing function
    })
    gsap.from(".animated-text4", {
        opacity: 0, // Start from opacity 0
        duration: 5, // Animation duration
        delay: 2, // Delay before animation starts
        ease: "power2.out" // Easing function
    })
    ;
}

// Call the animation function when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    animateText();
});