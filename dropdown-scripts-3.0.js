// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
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

  // Set the id to the hovered state
  navLinkSummerCamp.classList.add('hovered');
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


// DROPDOWN menu Lesson
var enterTimelineLesson = gsap.timeline({ paused: true });
var navLinkLesson = document.getElementById('hero-navlink-lesson');
var isAnimationReversedLesson = true; // Animation starts as reversed

// Capture initial values for the reverseExitAnimationLesson function
var initialValues = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineLesson
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-lesson', { ...initialValues.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-lesson', { ...initialValues.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-lesson', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

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
  // Hide only the target class .hero-navbar_dropdown instead of reversing the timeline
  gsap.set('.hero-navbar_dropdown', { display: 'none' });

  // Restore the initial values of the target classes
  gsap.set('.dropdown_menu-component.is-lesson', { ...initialValues.dropdown });
  gsap.set('.dropdown_menu-image.is-lesson', { ...initialValues.image });
  gsap.set('.dropdown_menu-text-wrapper.is-lesson', { ...initialValues.textWrapper });

  isAnimationReversedLesson = true;

  // Remove the hover state when the animation is reversed
  navLinkLesson.classList.remove('hovered');
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
var initialValues = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineCourses
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-courses', { ...initialValues.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-courses', { ...initialValues.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-courses', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

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
  // Hide only the target class .hero-navbar_dropdown instead of reversing the timeline
  gsap.set('.hero-navbar_dropdown', { display: 'none' });

  // Restore the initial values of the target classes
  gsap.set('.dropdown_menu-component.is-courses', { ...initialValues.dropdown });
  gsap.set('.dropdown_menu-image.is-courses', { ...initialValues.image });
  gsap.set('.dropdown_menu-text-wrapper.is-courses', { ...initialValues.textWrapper });

  isAnimationReversedCourses = true;

  // Remove the hover state when the animation is reversed
  navLinkCourses.classList.remove('hovered');
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
var initialValues = {
  dropdown: { display: 'none', opacity: 0 },
  image: { scale: 1.3 },
  textWrapper: { opacity: 0, y: '7%' }
};

// Add actions to the entrance animation with easing "ease"
enterTimelineAcademy
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-academy', { ...initialValues.dropdown }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-academy', { ...initialValues.image }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-academy', { ...initialValues.textWrapper }, { opacity: 1, y: '0%', duration: 0.3, ease: 'ease' }, '-=0.2');

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
  // Hide only the target class .hero-navbar_dropdown instead of reversing the timeline
  gsap.set('.hero-navbar_dropdown', { display: 'none' });

  // Restore the initial values of the target classes
  gsap.set('.dropdown_menu-component.is-academy', { ...initialValues.dropdown });
  gsap.set('.dropdown_menu-image.is-academy', { ...initialValues.image });
  gsap.set('.dropdown_menu-text-wrapper.is-academy', { ...initialValues.textWrapper });

  isAnimationReversedAcademy = true;

  // Remove the hover state when the animation is reversed
  navLinkAcademy.classList.remove('hovered');
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
