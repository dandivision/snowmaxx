// DROPDOWN menu Animations
var enterTimelineAnimations = gsap.timeline({ paused: true });
var navLinks = document.querySelectorAll('.hero-navbar_link');
var isAnimationReversedAnimations = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationAnimations function
var initialValuesAnimations = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineAnimations
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component', { ...initialValuesAnimations.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image', { ...initialValuesAnimations.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper', { ...initialValuesAnimations.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationAnimations(targetNavLink) {
  // Restart the animation from the beginning
  enterTimelineAnimations.restart();
  isAnimationReversedAnimations = false;

  // Set the id to the hovered state
  targetNavLink.classList.add('hovered');
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationAnimations() {
  // Hide only the target class .hero-navbar_dropdown instead of reversing the timeline
  gsap.set('.hero-navbar_dropdown', { display: 'none' });

  // Restore the initial values of the target classes
  gsap.set('.dropdown_menu-component', { ...initialValuesAnimations.dropdown });
  gsap.set('.dropdown_menu-image', { ...initialValuesAnimations.image });
  gsap.set('.dropdown_menu-text-wrapper', { ...initialValuesAnimations.textWrapper });

  isAnimationReversedAnimations = true;

  // Remove the hover state when the animation is reversed
  document.querySelectorAll('.hero-navbar_link').forEach(function (navLink) {
    navLink.classList.remove('hovered');
  });
}

// Add mouseenter event to trigger the entrance animation
navLinks.forEach(function (navLink) {
  navLink.addEventListener('mouseenter', function () {
    // Start the entrance animation
    playEnterAnimationAnimations(navLink);
  });
});

// Add mouseleave event to .dropdown_menu-component to restart the exit animation
document.querySelectorAll('.dropdown_menu-component').forEach(function (dropdownComponent) {
  dropdownComponent.addEventListener('mouseleave', reverseExitAnimationAnimations);
});

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-summer-camp
navLinks.forEach(function (navLink) {
  navLink.addEventListener('mouseenter', function () {
    // Reverse the exit animation only if the animation has not been reversed
    if (!isAnimationReversedAnimations) {
      reverseExitAnimationAnimations();
    }
  });
});

// Add a callback to replay the animation every time it is completed
enterTimelineAnimations.eventCallback("onComplete", function () {
  isAnimationReversedAnimations = true;
});
