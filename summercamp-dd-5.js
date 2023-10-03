// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true; // Animation starts in reversed state

// Add actions to the entrance animation with "ease" easing
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationSummerCamp() {
  console.log("Playing entrance animation");
  // Start the entrance animation
  enterTimelineSummerCamp.play();
  isAnimationReversedSummerCamp = false;

  // Set the id in hover state
  navLinkSummerCamp.classList.add('hovered');
}

// Function to execute the reverse of the exit animation and handle hover state
function reverseExitAnimationSummerCamp() {
  console.log("Entering reverseExitAnimationSummerCamp");

  // Hide the elements on hover out with instant animation
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
  gsap.set('.dropdown_menu-component.is-summer-camp', { display: 'none' });

  // Set the animation state to reversed
  isAnimationReversedSummerCamp = true;

  // Remove hover state when the animation is "reversed"
  navLinkSummerCamp.classList.remove('hovered');
  console.log("Exiting reverseExitAnimationSummerCamp");
}

// Add the hover event to activate the entrance animation
navLinkSummerCamp.addEventListener('mouseenter', function() {
  // Start the entrance animation
  playEnterAnimationSummerCamp();
});

// Add the hover event to hide elements on hover out
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

// Add the hover event to .hero-navbar_link except those with id hero-navlink-summer-camp
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      // Hide elements only if the animation has not been "reversed"
      if (!isAnimationReversedSummerCamp) {
        reverseExitAnimationSummerCamp();
      }
    });
  }
}

// Add onComplete callback to handle the end of the animation
enterTimelineSummerCamp.eventCallback("onComplete", function() {
  // Additional logic to execute after the animation ends
  console.log("Animation completed!");

  // You can add more logic here if needed

  // Reset the timeline to the beginning for the next trigger
  enterTimelineSummerCamp.seek(0);
  enterTimelineSummerCamp.pause();
});
