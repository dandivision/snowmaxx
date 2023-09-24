// DROPDOWN menu Summer Camp
var enterTimelineSummerCamp = gsap.timeline({ paused: true });
var navLinkSummerCamp = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversedSummerCamp = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationSummerCamp() {
  // Avvia l'animazione di entrata
  enterTimelineSummerCamp.play();
  isAnimationReversedSummerCamp = false;

  // Imposta l'id in stato di hover
  navLinkSummerCamp.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationSummerCamp() {
  enterTimelineSummerCamp.reverse(0.28);
  isAnimationReversedSummerCamp = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkSummerCamp.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkSummerCamp.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationSummerCamp();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-summer-camp per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimationSummerCamp);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-summer-camp
var heroNavLinksSummerCamp = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksSummerCamp.length; i++) {
  var link = heroNavLinksSummerCamp[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedSummerCamp) {
        reverseExitAnimationSummerCamp();
      }
    });
  }
}

// DROPDOWN menu Lesson
var enterTimelineLesson = gsap.timeline({ paused: true });
var navLinkLesson = document.getElementById('hero-navlink-lesson');
var isAnimationReversedLesson = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineLesson
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-lesson', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-lesson', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-lesson', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationLesson() {
  // Avvia l'animazione di entrata
  enterTimelineLesson.play();
  isAnimationReversedLesson = false;

  // Imposta l'id in stato di hover
  navLinkLesson.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationLesson() {
  enterTimelineLesson.reverse(0.28);
  isAnimationReversedLesson = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkLesson.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkLesson.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationLesson();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-lesson per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-lesson').addEventListener('mouseleave', reverseExitAnimationLesson);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-lesson
var heroNavLinksLesson = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksLesson.length; i++) {
  var link = heroNavLinksLesson[i];
  if (link.id !== 'hero-navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedLesson) {
        reverseExitAnimationLesson();
      }
    });
  }
}

// DROPDOWN menu Courses
var enterTimelineCourses = gsap.timeline({ paused: true });
var navLinkCourses = document.getElementById('hero-navlink-courses');
var isAnimationReversedCourses = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineCourses
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-courses', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-courses', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-courses', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationCourses() {
  // Avvia l'animazione di entrata
  enterTimelineCourses.play();
  isAnimationReversedCourses = false;

  // Imposta l'id in stato di hover
  navLinkCourses.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationCourses() {
  enterTimelineCourses.reverse(0.28);
  isAnimationReversedCourses = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkCourses.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkCourses.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationCourses();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-courses per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-courses').addEventListener('mouseleave', reverseExitAnimationCourses);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-courses
var heroNavLinksCourses = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksCourses.length; i++) {
  var link = heroNavLinksCourses[i];
  if (link.id !== 'hero-navlink-courses') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedCourses) {
        reverseExitAnimationCourses();
      }
    });
  }
}

// DROPDOWN menu Academy
var enterTimelineAcademy = gsap.timeline({ paused: true });
var navLinkAcademy = document.getElementById('hero-navlink-academy');
var isAnimationReversedAcademy = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineAcademy
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-academy', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-academy', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-academy', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationAcademy() {
  // Avvia l'animazione di entrata
  enterTimelineAcademy.play();
  isAnimationReversedAcademy = false;

  // Imposta l'id in stato di hover
  navLinkAcademy.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationAcademy() {
  enterTimelineAcademy.reverse(0.28);
  isAnimationReversedAcademy = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkAcademy.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkAcademy.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationAcademy();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-academy per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-academy').addEventListener('mouseleave', reverseExitAnimationAcademy);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-academy
var heroNavLinksAcademy = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinksAcademy.length; i++) {
  var link = heroNavLinksAcademy[i];
  if (link.id !== 'hero-navlink-academy') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedAcademy) {
        reverseExitAnimationAcademy();
      }
    });
  }
}
