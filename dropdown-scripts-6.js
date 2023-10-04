// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationSummerCamp function
var initialValues = {
  dropdown: { opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { opacity: 0 }, { opacity: 1, duration: 0.1, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { ...initialValues.dropdown }, { opacity: 1, duration: 0.1, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-image.is-summer-camp', { ...initialValues.image }, { scale: 1, duration: 0.1, ease: 'ease' }, '-=0.05')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.1, ease: 'ease' }, '-=0.05');

// Function to start the entrance animation and handle hover state
function playEnterAnimationSummerCamp() {
  // Restart the animation from the beginning
  enterTimelineSummerCamp.restart();
  isAnimationReversedSummerCamp = false;

  // Set the id to the hovered state
  navLinkSummerCamp.classList.add('hovered');
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationSummerCamp() {
  // Reverse the timeline to play the exit animation
  enterTimelineSummerCamp.reverse();
}

// Function to handle mouseenter event for .hero-navbar_link elements (except the one with id 'hero-navlink-summer-camp')
function handleNavbarLinkMouseEnter() {
  // Reverse the exit animation
  reverseExitAnimationSummerCamp();

  // Set opacity to 0 after a slight delay
  gsap.delayedCall(0.1, function () {
    gsap.set('.hero-navbar_dropdown', { opacity: 0 });
  });
}

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-summer-camp
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', handleNavbarLinkMouseEnter);
  }
}

// Add mouseenter event to trigger the entrance animation
navLinkSummerCamp.addEventListener('mouseenter', function () {
  // Start the entrance animation
  playEnterAnimationSummerCamp();
});

// Add mouseleave event to .dropdown_menu-component.is-summer-camp to set opacity to 0
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', function () {
  // Set opacity to 0 after a slight delay
  gsap.delayedCall(0.1, function () {
    gsap.set('.hero-navbar_dropdown', { opacity: 0 });
  });
});

// Add a callback to replay the animation every time it is completed
enterTimelineSummerCamp.eventCallback("onComplete", function () {
  isAnimationReversedSummerCamp = true;
});
