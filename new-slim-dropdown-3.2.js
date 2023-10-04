// DROPDOWN menu Summer Camp
var enterTimelineSlimSummerCamp = gsap.timeline({ paused: true });
var navLinkSlimSummerCamp = document.getElementById('navlink-summer-camp');
var isAnimationReversedSlimSummerCamp = true;

enterTimelineSlimSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-slim-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationSummerCamp() {
  enterTimelineSlimSummerCamp.play();
  isAnimationReversedSlimSummerCamp = false;
  navLinkSlimSummerCamp.classList.add('hovered');
}

function reverseExitAnimationSlimSummerCamp() {
  enterTimelineSlimSummerCamp.reverse(0.09);
  isAnimationReversedSlimSummerCamp = true;
  navLinkSlimSummerCamp.classList.remove('hovered');
}

navLinkSlimSummerCamp.addEventListener('mouseenter', playEnterAnimationSummerCamp);
document.querySelector('.dropdown_menu-component.is-slim-summer-camp').addEventListener('mouseleave', reverseExitAnimationSlimSummerCamp);

var heroNavLinksSlimSummerCamp = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksSlimSummerCamp.length; i++) {
  var link = heroNavLinksSlimSummerCamp[i];
  if (link.id !== 'navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedSlimSummerCamp) {
        reverseExitAnimationSlimSummerCamp();
      }
    });
  }
}

// DROPDOWN menu Lesson
var enterTimelineSlimLesson = gsap.timeline({ paused: true });
var navLinkSlimLesson = document.getElementById('navlink-lesson');
var isAnimationReversedSlimLesson = true;

enterTimelineSlimLesson
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-lesson', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-slim-lesson', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-lesson', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationSlimLesson() {
  enterTimelineSlimLesson.play();
  isAnimationReversedSlimLesson = false;
  navLinkSlimLesson.classList.add('hovered');
}

function reverseExitAnimationSlimLesson() {
  enterTimelineSlimLesson.reverse(0.09);
  isAnimationReversedSlimLesson = true;
  navLinkSlimLesson.classList.remove('hovered');
}

navLinkSlimLesson.addEventListener('mouseenter', playEnterAnimationSlimLesson);
document.querySelector('.dropdown_menu-component.is-slim-lesson').addEventListener('mouseleave', reverseExitAnimationSlimLesson);

var heroNavLinksSlimLesson = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksSlimLesson.length; i++) {
  var link = heroNavLinksSlimLesson[i];
  if (link.id !== 'navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedSlimLesson) {
        reverseExitAnimationSlimLesson();
      }
    });
  }
}

// DROPDOWN menu Courses
var enterTimelineSlimCourses = gsap.timeline({ paused: true });
var navLinkSlimCourses = document.getElementById('navlink-courses');
var isAnimationReversedSlimCourses = true;

enterTimelineSlimCourses
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-courses', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-slim-courses', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-courses', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationSlimCourses() {
  enterTimelineSlimCourses.play();
  isAnimationReversedSlimCourses = false;
  navLinkSlimCourses.classList.add('hovered');
}

function playEnterAnimationSlimSlimCourses() {
  enterTimelineSlimCourses.reverse(0.09);
  isAnimationReversedSlimCourses = true;
  navLinkSlimCourses.classList.remove('hovered');
}

navLinkSlimCourses.addEventListener('mouseenter', playEnterAnimationSlimCourses);
document.querySelector('.dropdown_menu-component.is-slim-courses').addEventListener('mouseleave', playEnterAnimationSlimSlimCourses);

var heroNavLinksSlimCourses = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksSlimCourses.length; i++) {
  var link = heroNavLinksSlimCourses[i];
  if (link.id !== 'navlink-courses') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedSlimCourses) {
        playEnterAnimationSlimSlimCourses();
      }
    });
  }
}

// DROPDOWN menu Academy
var enterTimelineSlimAcademy = gsap.timeline({ paused: true });
var navLinkSlimAcademy = document.getElementById('navlink-academy');
var isAnimationReversedSlimAcademy = true;

enterTimelineSlimAcademy
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-academy', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-image.is-slim-academy', { scale: 1.3 }, { scale: 1, duration: 0.2, ease: 'ease' }, '-=0.1')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-academy', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.2, ease: 'ease' }, '-=0.1');

function playEnterAnimationSlimAcademy() {
  enterTimelineSlimAcademy.play();
  isAnimationReversedSlimAcademy = false;
  navLinkSlimAcademy.classList.add('hovered');
}

function reverseExitAnimationSlimAcademy() {
  enterTimelineSlimAcademy.reverse(0.09);
  isAnimationReversedSlimAcademy = true;
  navLinkSlimAcademy.classList.remove('hovered');
}

navLinkSlimAcademy.addEventListener('mouseenter', playEnterAnimationSlimAcademy);
document.querySelector('.dropdown_menu-component.is-slim-academy').addEventListener('mouseleave', reverseExitAnimationSlimAcademy);

var heroNavLinksSlimAcademy = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksSlimAcademy.length; i++) {
  var link = heroNavLinksSlimAcademy[i];
  if (link.id !== 'navlink-academy') {
    link.addEventListener('mouseenter', function() {
      if (!isAnimationReversedSlimAcademy) {
        reverseExitAnimationSlimAcademy();
      }
    });
  }
}
