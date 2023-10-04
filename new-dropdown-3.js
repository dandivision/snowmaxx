// Function to create a GSAP timeline for dropdown animations
function createDropdownTimeline(selector) {
  var timeline = gsap.timeline({ paused: true });

  timeline
    .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
    .fromTo(selector, { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
    .fromTo(selector + ' .dropdown_menu-image', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
    .fromTo(selector + ' .dropdown_menu-text-wrapper', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

  return timeline;
}

// Function to handle enter animation
function playEnterAnimation(timeline, navLink, isAnimationReversed) {
  timeline.play();
  isAnimationReversed = false;
  navLink.classList.add('hovered');
}

// Function to handle exit animation
function reverseExitAnimation(timeline, navLink, isAnimationReversed) {
  timeline.reverse(0.1); // Faster exit animation
  isAnimationReversed = true;
  navLink.classList.remove('hovered');
}

// Dropdown menus configuration
var dropdownMenus = [
  { id: 'summer-camp', class: 'is-summer-camp' },
  { id: 'lesson', class: 'is-lesson' },
  { id: 'courses', class: 'is-courses' },
  { id: 'academy', class: 'is-academy' },
];

// Loop through each dropdown configuration
dropdownMenus.forEach(function(menu) {
  var enterTimeline = createDropdownTimeline('.dropdown_menu-component.' + menu.class);
  var navLink = document.getElementById('hero-navlink-' + menu.id);
  var isAnimationReversed = true;

  navLink.addEventListener('mouseenter', function() {
    playEnterAnimation(enterTimeline, navLink, isAnimationReversed);
  });

  document.querySelector('.dropdown_menu-component.' + menu.class).addEventListener('mouseleave', function() {
    reverseExitAnimation(enterTimeline, navLink, isAnimationReversed);
  });

  var heroNavLinks = document.querySelectorAll('.hero-navbar_link');
  for (var i = 0; i < heroNavLinks.length; i++) {
    var link = heroNavLinks[i];
    if (link.id !== 'hero-navlink-' + menu.id) {
      link.addEventListener('mouseenter', function() {
        if (!isAnimationReversed) {
          reverseExitAnimation(enterTimeline, navLink, isAnimationReversed);
        }
      });
    }
  }
});
