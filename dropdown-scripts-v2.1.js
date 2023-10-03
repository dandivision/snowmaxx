var enterTimelineAnimations = gsap.timeline({ paused: true });
var isAnimationReversedAnimations = true;

var initialValuesAnimations = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

enterTimelineAnimations
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component', { ...initialValuesAnimations.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image', { ...initialValuesAnimations.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper', { ...initialValuesAnimations.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

function playEnterAnimationAnimations(targetNavLink) {
  enterTimelineAnimations.restart();
  isAnimationReversedAnimations = false;
  targetNavLink.classList.add('hovered');
}

function reverseExitAnimationAnimations() {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
  gsap.set('.dropdown_menu-component', { ...initialValuesAnimations.dropdown });
  gsap.set('.dropdown_menu-image', { ...initialValuesAnimations.image });
  gsap.set('.dropdown_menu-text-wrapper', { ...initialValuesAnimations.textWrapper });
  isAnimationReversedAnimations = true;

  document.querySelectorAll('.hero-navbar_link').forEach(function (navLink) {
    navLink.classList.remove('hovered');
  });
}

document.querySelectorAll('.hero-navbar_link').forEach(function (navLink) {
  navLink.addEventListener('mouseenter', function () {
    playEnterAnimationAnimations(navLink);
  });

  navLink.addEventListener('mouseleave', function () {
    if (!isAnimationReversedAnimations) {
      reverseExitAnimationAnimations();
    }
  });
});

document.querySelectorAll('.dropdown_menu-component').forEach(function (dropdownComponent) {
  dropdownComponent.addEventListener('mouseleave', reverseExitAnimationAnimations);
});

enterTimelineAnimations.eventCallback("onComplete", function () {
  isAnimationReversedAnimations = true;
});
