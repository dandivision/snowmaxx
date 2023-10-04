// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true;

enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationSummerCamp() {
  enterTimelineSummerCamp.play();
  isAnimationReversedSummerCamp = false;
  navLinkSummerCamp.classList.add('hovered');
}

function reverseExitAnimationSummerCamp() {
  enterTimelineSummerCamp.reverse(0.09);
  isAnimationReversedSummerCamp = true;
  navLinkSummerCamp.classList.remove('hovered');
}

navLinkSummerCamp.addEventListener('mouseenter', playEnterAnimationSummerCamp);
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedSummerCamp) {
        reverseExitAnimationSummerCamp();
      }
    });
  }
}

// DROPDOWN menu Lesson
var enterTimelineLesson = gsap.timeline({ paused: true });
var navLinkLesson = document.getElementById('hero-navlink-lesson');
var isAnimationReversedLesson = true;

enterTimelineLesson
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-lesson', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-lesson', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-lesson', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationLesson() {
  enterTimelineLesson.play();
  isAnimationReversedLesson = false;
  navLinkLesson.classList.add('hovered');
}

function reverseExitAnimationLesson() {
  enterTimelineLesson.reverse(0.09);
  isAnimationReversedLesson = true;
  navLinkLesson.classList.remove('hovered');
}

navLinkLesson.addEventListener('mouseenter', playEnterAnimationLesson);
document.querySelector('.dropdown_menu-component.is-lesson').addEventListener('mouseleave', reverseExitAnimationLesson);

var heroNavLinksLesson = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksLesson.length; i++) {
  var link = heroNavLinksLesson[i];
  if (link.id !== 'hero-navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedLesson) {
        reverseExitAnimationLesson();
      }
    });
  }
}

// DROPDOWN menu Courses
var enterTimelineCourses = gsap.timeline({ paused: true });
var navLinkCourses = document.getElementById('hero-navlink-courses');
var isAnimationReversedCourses = true;

enterTimelineCourses
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-courses', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-courses', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-courses', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationCourses() {
  enterTimelineCourses.play();
  isAnimationReversedCourses = false;
  navLinkCourses.classList.add('hovered');
}

function reverseExitAnimationCourses() {
  enterTimelineCourses.reverse(0.09);
  isAnimationReversedCourses = true;
  navLinkCourses.classList.remove('hovered');
}

navLinkCourses.addEventListener('mouseenter', playEnterAnimationCourses);
document.querySelector('.dropdown_menu-component.is-courses').addEventListener('mouseleave', reverseExitAnimationCourses);

var heroNavLinksCourses = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksCourses.length; i++) {
  var link = heroNavLinksCourses[i];
  if (link.id !== 'hero-navlink-courses') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedCourses) {
        reverseExitAnimationCourses();
      }
    });
  }
}

// DROPDOWN menu Academy
var enterTimelineAcademy = gsap.timeline({ paused: true });
var navLinkAcademy = document.getElementById('hero-navlink-academy');
var isAnimationReversedAcademy = true;

enterTimelineAcademy
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-academy', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-academy', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-academy', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationAcademy() {
  enterTimelineAcademy.play();
  isAnimationReversedAcademy = false;
  navLinkAcademy.classList.add('hovered');
}

function reverseExitAnimationAcademy() {
  enterTimelineAcademy.reverse(0.09);
  isAnimationReversedAcademy = true;
  navLinkAcademy.classList.remove('hovered');
}

navLinkAcademy.addEventListener('mouseenter', playEnterAnimationAcademy);
document.querySelector('.dropdown_menu-component.is-academy').addEventListener('mouseleave', reverseExitAnimationAcademy);

var heroNavLinksAcademy = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksAcademy.length; i++) {
  var link = heroNavLinksAcademy[i];
  if (link.id !== 'hero-navlink-academy') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedAcademy) {
        reverseExitAnimationAcademy();
      }
    });
  }
}
