// Common function to close active dropdown
function closeActiveDropdown(dropdown, timeline, navLink) {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
  gsap.set(dropdown, { ...initialValues.dropdown });
  gsap.set('.dropdown_menu-image', { ...initialValues.image });
  gsap.set('.dropdown_menu-text-wrapper', { ...initialValues.textWrapper });
  timeline.reverse();
  isAnimationReversed = true;
  navLink.classList.remove('hovered');
}

// Common function to set active dropdown
function setActiveDropdown(dropdown, timeline, navLink) {
  closeActiveDropdown();
  dropdown.style.display = 'block';
  timeline.restart();
  isAnimationReversed = false;
  navLink.classList.add('hovered');
}

// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationSummerCamp function
var initialValuesSummerCamp = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { ...initialValuesSummerCamp.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { ...initialValuesSummerCamp.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { ...initialValuesSummerCamp.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationSummerCamp() {
  // Restart the animation from the beginning
  setActiveDropdown('.dropdown_menu-component.is-summer-camp', enterTimelineSummerCamp, navLinkSummerCamp);
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationSummerCamp() {
  closeActiveDropdown('.dropdown_menu-component.is-summer-camp', enterTimelineSummerCamp, navLinkSummerCamp);
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

// DROPDOWN menu Lesson
var enterTimelineLesson = gsap.timeline({ paused: true });
var navLinkLesson = document.getElementById('hero-navlink-lesson');
var isAnimationReversedLesson = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationLesson function
var initialValuesLesson = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineLesson
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-lesson', { ...initialValuesLesson.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-lesson', { ...initialValuesLesson.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-lesson', { ...initialValuesLesson.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationLesson() {
  // Restart the animation from the beginning
  setActiveDropdown('.dropdown_menu-component.is-lesson', enterTimelineLesson, navLinkLesson);
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationLesson() {
  closeActiveDropdown('.dropdown_menu-component.is-lesson', enterTimelineLesson, navLinkLesson);
}

// Add mouseenter event to trigger the entrance animation
navLinkLesson.addEventListener('mouseenter', function() {
  // Start the entrance animation
  playEnterAnimationLesson();
});

// Add mouseleave event to .dropdown_menu-component.is-lesson to restart the exit animation
document.querySelector('.dropdown_menu-component.is-lesson').addEventListener('mouseleave', reverseExitAnimationLesson);

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-lesson
var heroNavLinksLesson = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksLesson.length; i++) {
  var link = heroNavLinksLesson[i];
  if (link.id !== 'hero-navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      // Reverse the exit animation only if the animation has not been reversed
      if (!isAnimationReversedLesson) {
        reverseExitAnimationLesson();
      }
    });
  }
}

// Add a callback to replay the animation every time it is completed
enterTimelineLesson.eventCallback("onComplete", function() {
  isAnimationReversedLesson = true;
});

// DROPDOWN menu Courses
var enterTimelineCourses = gsap.timeline({ paused: true });
var navLinkCourses = document.getElementById('hero-navlink-courses');
var isAnimationReversedCourses = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationCourses function
var initialValuesCourses = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineCourses
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-courses', { ...initialValuesCourses.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-courses', { ...initialValuesCourses.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-courses', { ...initialValuesCourses.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationCourses() {
  // Restart the animation from the beginning
  setActiveDropdown('.dropdown_menu-component.is-courses', enterTimelineCourses, navLinkCourses);
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationCourses() {
  closeActiveDropdown('.dropdown_menu-component.is-courses', enterTimelineCourses, navLinkCourses);
}

// Add mouseenter event to trigger the entrance animation
navLinkCourses.addEventListener('mouseenter', function() {
  // Start the entrance animation
  playEnterAnimationCourses();
});

// Add mouseleave event to .dropdown_menu-component.is-courses to restart the exit animation
document.querySelector('.dropdown_menu-component.is-courses').addEventListener('mouseleave', reverseExitAnimationCourses);

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-courses
var heroNavLinksCourses = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksCourses.length; i++) {
  var link = heroNavLinksCourses[i];
  if (link.id !== 'hero-navlink-courses') {
    link.addEventListener('mouseenter', function() {
      // Reverse the exit animation only if the animation has not been reversed
      if (!isAnimationReversedCourses) {
        reverseExitAnimationCourses();
      }
    });
  }
}

// Add a callback to replay the animation every time it is completed
enterTimelineCourses.eventCallback("onComplete", function() {
  isAnimationReversedCourses = true;
});

// DROPDOWN menu Academy
var enterTimelineAcademy = gsap.timeline({ paused: true });
var navLinkAcademy = document.getElementById('hero-navlink-academy');
var isAnimationReversedAcademy = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationAcademy function
var initialValuesAcademy = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineAcademy
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-academy', { ...initialValuesAcademy.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-academy', { ...initialValuesAcademy.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-academy', { ...initialValuesAcademy.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

// Function to start the entrance animation and handle hover state
function playEnterAnimationAcademy() {
  // Restart the animation from the beginning
  setActiveDropdown('.dropdown_menu-component.is-academy', enterTimelineAcademy, navLinkAcademy);
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationAcademy() {
  closeActiveDropdown('.dropdown_menu-component.is-academy', enterTimelineAcademy, navLinkAcademy);
}

// Add mouseenter event to trigger the entrance animation
navLinkAcademy.addEventListener('mouseenter', function() {
  // Start the entrance animation
  playEnterAnimationAcademy();
});

// Add mouseleave event to .dropdown_menu-component.is-academy to restart the exit animation
document.querySelector('.dropdown_menu-component.is-academy').addEventListener('mouseleave', reverseExitAnimationAcademy);

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-academy
var heroNavLinksAcademy = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksAcademy.length; i++) {
  var link = heroNavLinksAcademy[i];
  if (link.id !== 'hero-navlink-academy') {
    link.addEventListener('mouseenter', function() {
      // Reverse the exit animation only if the animation has not been reversed
      if (!isAnimationReversedAcademy) {
        reverseExitAnimationAcademy();
      }
    });
  }
}

// Add a callback to replay the animation every time it is completed
enterTimelineAcademy.eventCallback("onComplete", function() {
  isAnimationReversedAcademy = true;
});
