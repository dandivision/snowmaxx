// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationSummerCamp function
var initialValues = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.1, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { ...initialValues.dropdown }, { display: 'block', opacity: 1, duration: 0.1, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-image.is-summer-camp', { ...initialValues.image }, { scale: 1, duration: 0.1, ease: 'ease' }, '-=0.05')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.1, ease: 'ease' }, '-=0.05');

// Function to start the entrance animation and handle hover state
function playEnterAnimationSummerCamp() {
  // Restart the animation only if it's reversed
  if (isAnimationReversedSummerCamp) {
    enterTimelineSummerCamp.restart();
    isAnimationReversedSummerCamp = false;

    // Set the id to the hovered state
    navLinkSummerCamp.classList.add('hovered');
  }
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationSummerCamp() {
  // Reverse the timeline to play the exit animation
  enterTimelineSummerCamp.reverse();

  // Set display to 'none' after a slight delay
  gsap.delayedCall(0.1, function () {
    gsap.set('.hero-navbar_dropdown', { display: 'none' });
  });

  isAnimationReversedSummerCamp = true;

  // Remove the hover state when the animation is reversed
  navLinkSummerCamp.classList.remove('hovered');
}

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-summer-camp
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', playEnterAnimationSummerCamp);
    link.addEventListener('mouseleave', reverseExitAnimationSummerCamp);
  }
}

// Add mouseleave event to .dropdown_menu-component.is-summer-camp to set display to 'none'
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

// Add a callback to replay the animation every time it is completed
enterTimelineSummerCamp.eventCallback("onComplete", function () {
  isAnimationReversedSummerCamp = true;
});
