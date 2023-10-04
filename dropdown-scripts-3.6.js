var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true;

var initialValues = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { ...initialValues.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { ...initialValues.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

function playEnterAnimationSummerCamp() {
  enterTimelineSummerCamp.restart();
  isAnimationReversedSummerCamp = false;
  navLinkSummerCamp.classList.add('hovered');
}

function reverseExitAnimationSummerCamp() {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
  gsap.set('.dropdown_menu-component.is-summer-camp', { ...initialValues.dropdown });
  gsap.set('.dropdown_menu-image.is-summer-camp', { ...initialValues.image });
  gsap.set('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValues.textWrapper });
  isAnimationReversedSummerCamp = true;
  navLinkSummerCamp.classList.remove('hovered');
}

navLinkSummerCamp.addEventListener('mouseenter', function() {
  playEnterAnimationSummerCamp();
});

// Add mouseleave event to .hero-navbar_link to restart the exit animation
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    console.log('Adding event listener to', link.id);
    link.addEventListener('mouseenter', function() {
      console.log('Mouse entered:', link.id);
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
