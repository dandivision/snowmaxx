// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var isAnimationReversedSummerCamp = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationSummerCamp function
var initialValues = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { ...initialValues.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { ...initialValues.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationSummerCamp() {
  // Restart the animation from the beginning
  enterTimelineSummerCamp.restart();
  isAnimationReversedSummerCamp = false;
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationSummerCamp() {
  // Hide only the target class .hero-navbar_dropdown instead of reversing the timeline
  gsap.set('.hero-navbar_dropdown', { display: 'none' });

  // Restore the initial values of the target classes
  gsap.set('.dropdown_menu-component.is-summer-camp', { ...initialValues.dropdown });
  gsap.set('.dropdown_menu-image.is-summer-camp', { ...initialValues.image });
  gsap.set('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValues.textWrapper });

  isAnimationReversedSummerCamp = true;
}

// Add mouseenter event to trigger the entrance animation
document.getElementById('hero-navlink-summer-camp').addEventListener('mouseenter', function () {
  playEnterAnimationSummerCamp();
});

// Add mouseleave event to .dropdown_menu-component.is-summer-camp to restart the exit animation
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

// Add event delegation for .hero-navbar_link elements except the one with ID hero-navlink-summer-camp
document.addEventListener('mouseenter', function (event) {
  var targetLink = event.target.closest('.hero-navbar_link');
  if (targetLink && targetLink.id !== 'hero-navlink-summer-camp' && !isAnimationReversedSummerCamp) {
    reverseExitAnimationSummerCamp();
  }
});

// Add a callback to replay the animation every time it is completed
enterTimelineSummerCamp.eventCallback("onComplete", function () {
  isAnimationReversedSummerCamp = true;
});