// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true; // Animation starts as reversed

// Add actions to the entrance animation with easing "ease"
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

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
  // Hide only the target class .hero-navbar_dropdown instead of reversing the timeline
  gsap.to('.hero-navbar_dropdown', { display: 'none' });

  // Restore the initial values of the target classes
  gsap.set('.dropdown_menu-component.is-summer-camp, .dropdown_menu-image.is-summer-camp, .dropdown_menu-text-wrapper.is-summer-camp', { display: 'none', opacity: 0, scale: 1.3, y: '7%' });

  isAnimationReversedSummerCamp = true;

  // Remove the hover state when the animation is reversed
  navLinkSummerCamp.classList.remove('hovered');
}

// Add mouseenter event to trigger the entrance animation
navLinkSummerCamp.addEventListener('mouseenter', function() {
  // Start the entrance animation
  playEnterAnimationSummerCamp();
});

// Add mouseleave event to .dropdown_menu-component.is-summer-camp to restart the exit animation
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-summer-camp
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      // Reverse the exit animation only if the animation has not been reversed
      if (!isAnimationReversedSummerCamp) {
        reverseExitAnimationSummerCamp();
      }
    });
  }
}

// Add a callback to replay the animation every time it is completed
enterTimelineSummerCamp.eventCallback("onComplete", function() {
  isAnimationReversedSummerCamp = true;
});
