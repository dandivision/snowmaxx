// DROPDOWN menu SLIM Summer Camp
var enterTimelineslimSummerCamp = gsap.timeline({ paused: true });
var navLinkslimSummerCamp = document.getElementById('navlink-summer-camp');
var isAnimationReversedslimSummerCamp = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineslimSummerCamp
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-slim-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationslimSummerCamp() {
  // Avvia l'animazione di entrata
  enterTimelineslimSummerCamp.play();
  isAnimationReversedslimSummerCamp = false;

  // Imposta l'id in stato di hover
  navLinkslimSummerCamp.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationslimSummerCamp() {
  enterTimelineslimSummerCamp.reverse(0.28);
  isAnimationReversedslimSummerCamp = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkslimSummerCamp.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkslimSummerCamp.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationslimSummerCamp();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-slim-summer-camp per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-slim-summer-camp').addEventListener('mouseleave', reverseExitAnimationslimSummerCamp);

// Aggiungiamo l'evento mouseenter su .navbar_link tranne quelle con id navlink-summer-camp
var heroNavLinksslimSummerCamp = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksslimSummerCamp.length; i++) {
  var link = heroNavLinksslimSummerCamp[i];
  if (link.id !== 'navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedslimSummerCamp) {
        reverseExitAnimationslimSummerCamp();
      }
    });
  }
}

// DROPDOWN menu SLIM Lesson
var enterTimelineslimLesson = gsap.timeline({ paused: true });
var navLinkslimLesson = document.getElementById('navlink-lesson');
var isAnimationReversedslimLesson = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineslimLesson
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-lesson', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-slim-lesson', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-lesson', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationslimLesson() {
  // Avvia l'animazione di entrata
  enterTimelineslimLesson.play();
  isAnimationReversedslimLesson = false;

  // Imposta l'id in stato di hover
  navLinkslimLesson.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationslimLesson() {
  enterTimelineslimLesson.reverse(0.28);
  isAnimationReversedslimLesson = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkslimLesson.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkslimLesson.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationslimLesson();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-slim-lesson per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-slim-lesson').addEventListener('mouseleave', reverseExitAnimationslimLesson);

// Aggiungiamo l'evento mouseenter su .navbar_link tranne quelle con id navlink-lesson
var heroNavLinksslimLesson = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksslimLesson.length; i++) {
  var link = heroNavLinksslimLesson[i];
  if (link.id !== 'navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedslimLesson) {
        reverseExitAnimationslimLesson();
      }
    });
  }
}

// DROPDOWN menu SLIM Courses
var enterTimelineslimCourses = gsap.timeline({ paused: true });
var navLinkslimCourses = document.getElementById('navlink-courses');
var isAnimationReversedslimCourses = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineslimCourses
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-courses', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-slim-courses', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-courses', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationslimCourses() {
  // Avvia l'animazione di entrata
  enterTimelineslimCourses.play();
  isAnimationReversedslimCourses = false;

  // Imposta l'id in stato di hover
  navLinkslimCourses.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationslimCourses() {
  enterTimelineslimCourses.reverse(0.28);
  isAnimationReversedslimCourses = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkslimCourses.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkslimCourses.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationslimCourses();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-slim-courses per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-slim-courses').addEventListener('mouseleave', reverseExitAnimationslimCourses);

// Aggiungiamo l'evento mouseenter su .navbar_link tranne quelle con id navlink-courses
var heroNavLinksslimCourses = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksslimCourses.length; i++) {
  var link = heroNavLinksslimCourses[i];
  if (link.id !== 'navlink-courses') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedslimCourses) {
        reverseExitAnimationslimCourses();
      }
    });
  }
}

// DROPDOWN menu SLIM Academy
var enterTimelineslimAcademy = gsap.timeline({ paused: true });
var navLinkslimAcademy = document.getElementById('navlink-academy');
var isAnimationReversedslimAcademy = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimelineslimAcademy
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-slim-academy', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-slim-academy', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-slim-academy', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimationslimAcademy() {
  // Avvia l'animazione di entrata
  enterTimelineslimAcademy.play();
  isAnimationReversedslimAcademy = false;

  // Imposta l'id in stato di hover
  navLinkslimAcademy.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimationslimAcademy() {
  enterTimelineslimAcademy.reverse(0.28);
  isAnimationReversedslimAcademy = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLinkslimAcademy.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLinkslimAcademy.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimationslimAcademy();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-slim-academy per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-slim-academy').addEventListener('mouseleave', reverseExitAnimationslimAcademy);

// Aggiungiamo l'evento mouseenter su .navbar_link tranne quelle con id navlink-academy
var heroNavLinksslimAcademy = document.querySelectorAll('.navbar_link');
for (var i = 0; i < heroNavLinksslimAcademy.length; i++) {
  var link = heroNavLinksslimAcademy[i];
  if (link.id !== 'navlink-academy') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversedslimAcademy) {
        reverseExitAnimationslimAcademy();
      }
    });
  }
}
