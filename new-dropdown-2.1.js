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
function handleNavbarLinkMouseEnterSummerCamp() {
  // Reverse the exit animation
  reverseExitAnimationSummerCamp();
}

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-summer-camp
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', handleNavbarLinkMouseEnterSummerCamp);
  }
}

// Add mouseenter event to trigger the entrance animation
navLinkSummerCamp.addEventListener('mouseenter', function () {
  // Start the entrance animation
  playEnterAnimationSummerCamp();
});

// Add mouseleave event to .dropdown_menu-component.is-summer-camp to restart the exit animation
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

// Add a callback to replay the animation every time it is completed
enterTimelineSummerCamp.eventCallback("onComplete", function () {
  isAnimationReversedSummerCamp = true;
});

// Add a callback to set display to 'none' when the reverse animation is complete
enterTimelineSummerCamp.eventCallback("onReverseComplete", function () {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
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
  enterTimelineLesson.restart();
  isAnimationReversedLesson = false;

  // Set the id to the hovered state
  navLinkLesson.classList.add('hovered');
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationLesson() {
  // Reverse the timeline to play the exit animation
  enterTimelineLesson.reverse();
}

// Function to handle mouseenter event for .hero-navbar_link elements (except the one with id 'hero-navlink-lesson')
function handleNavbarLinkMouseEnterLesson() {
  // Reverse the exit animation
  reverseExitAnimationLesson();
}

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-lesson
var heroNavLinksLesson = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksLesson.length; i++) {
  var link = heroNavLinksLesson[i];
  if (link.id !== 'hero-navlink-lesson') {
    link.addEventListener('mouseenter', handleNavbarLinkMouseEnterLesson);
  }
}

// Add mouseenter event to trigger the entrance animation
navLinkLesson.addEventListener('mouseenter', function () {
  // Start the entrance animation
  playEnterAnimationLesson();
});

// Add mouseleave event to .dropdown_menu-component.is-lesson to restart the exit animation
document.querySelector('.dropdown_menu-component.is-lesson').addEventListener('mouseleave', reverseExitAnimationLesson);

// Add a callback to replay the animation every time it is completed
enterTimelineLesson.eventCallback("onComplete", function () {
  isAnimationReversedLesson = true;
});

// Add a callback to set display to 'none' when the reverse animation is complete
enterTimelineLesson.eventCallback("onReverseComplete", function () {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
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
  enterTimelineCourses.restart();
  isAnimationReversedCourses = false;

  // Set the id to the hovered state
  navLinkCourses.classList.add('hovered');
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationCourses() {
  // Reverse the timeline to play the exit animation
  enterTimelineCourses.reverse();
}

// Function to handle mouseenter event for .hero-navbar_link elements (except the one with id 'hero-navlink-courses')
function handleNavbarLinkMouseEnterCourses() {
  // Reverse the exit animation
  reverseExitAnimationCourses();
}

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-courses
var heroNavLinksCourses = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksCourses.length; i++) {
  var link = heroNavLinksCourses[i];
  if (link.id !== 'hero-navlink-courses') {
    link.addEventListener('mouseenter', handleNavbarLinkMouseEnterCourses);
  }
}

// Add mouseenter event to trigger the entrance animation
navLinkCourses.addEventListener('mouseenter', function () {
  // Start the entrance animation
  playEnterAnimationCourses();
});

// Add mouseleave event to .dropdown_menu-component.is-courses to restart the exit animation
document.querySelector('.dropdown_menu-component.is-courses').addEventListener('mouseleave', reverseExitAnimationCourses);

// Add a callback to replay the animation every time it is completed
enterTimelineCourses.eventCallback("onComplete", function () {
  isAnimationReversedCourses = true;
});

// Add a callback to set display to 'none' when the reverse animation is complete
enterTimelineCourses.eventCallback("onReverseComplete", function () {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
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
  enterTimelineAcademy.restart();
  isAnimationReversedAcademy = false;

  // Set the id to the hovered state
  navLinkAcademy.classList.add('hovered');
}

// Function to reverse the exit animation and handle hover state
function reverseExitAnimationAcademy() {
  // Reverse the timeline to play the exit animation
  enterTimelineAcademy.reverse();
}

// Function to handle mouseenter event for .hero-navbar_link elements (except the one with id 'hero-navlink-academy')
function handleNavbarLinkMouseEnterAcademy() {
  // Reverse the exit animation
  reverseExitAnimationAcademy();
}

// Add mouseenter event to .hero-navbar_link except those with id hero-navlink-academy
var heroNavLinksAcademy = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksAcademy.length; i++) {
  var link = heroNavLinksAcademy[i];
  if (link.id !== 'hero-navlink-academy') {
    link.addEventListener('mouseenter', handleNavbarLinkMouseEnterAcademy);
  }
}

// Add mouseenter event to trigger the entrance animation
navLinkAcademy.addEventListener('mouseenter', function () {
  // Start the entrance animation
  playEnterAnimationAcademy();
});

// Add mouseleave event to .dropdown_menu-component.is-academy to restart the exit animation
document.querySelector('.dropdown_menu-component.is-academy').addEventListener('mouseleave', reverseExitAnimationAcademy);

// Add a callback to replay the animation every time it is completed
enterTimelineAcademy.eventCallback("onComplete", function () {
  isAnimationReversedAcademy = true;
});

// Add a callback to set display to 'none' when the reverse animation is complete
enterTimelineAcademy.eventCallback("onReverseComplete", function () {
  gsap.set('.hero-navbar_dropdown', { display: 'none' });
});
