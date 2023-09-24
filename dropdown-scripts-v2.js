// DROPDOWN menu Summer Camp
var enterTimeline = gsap.timeline({ paused: true });
var navLink = document.getElementById('hero-navlink-summer-camp');
var isAnimationReversed = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimeline
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-summer-camp', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-summer-camp', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-summer-camp', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimation() {
  // Avvia l'animazione di entrata
  enterTimeline.play();
  isAnimationReversed = false;

  // Imposta l'id in stato di hover
  navLink.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimation() {
  enterTimeline.reverse(0.28);
  isAnimationReversed = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLink.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLink.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimation();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-summer-camp per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-summer-camp').addEventListener('mouseleave', reverseExitAnimation);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-summer-camp
var heroNavLinks = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinks.length; i++) {
  var link = heroNavLinks[i];
  if (link.id !== 'hero-navlink-summer-camp') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversed) {
        reverseExitAnimation();
      }
    });
  }
}


// DROPDOWN menu Lesson
var enterTimeline2 = gsap.timeline({ paused: true });
var navLink2 = document.getElementById('hero-navlink-lesson');
var isAnimationReversed2 = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimeline2
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-lesson', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-lesson', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-lesson', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimation() {
  // Avvia l'animazione di entrata
  enterTimeline2.play();
  isAnimationReversed2 = false;

  // Imposta l'id in stato di hover
  navLink2.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimation() {
  enterTimeline2.reverse(0.28);
  isAnimationReversed2 = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLink2.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLink2.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimation();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-lesson per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-lesson').addEventListener('mouseleave', reverseExitAnimation);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-lesson
var heroNavLinks2 = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinks2.length; i++) {
  var link = heroNavLinks2[i];
  if (link.id !== 'hero-navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversed2) {
        reverseExitAnimation();
      }
    });
  }
}


// DROPDOWN menu Courses
var enterTimeline3 = gsap.timeline({ paused: true });
var navLink3 = document.getElementById('hero-navlink-courses');
var isAnimationReversed3 = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimeline3
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-courses', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-courses', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-courses', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimation() {
  // Avvia l'animazione di entrata
  enterTimeline3.play();
  isAnimationReversed3 = false;

  // Imposta l'id in stato di hover
  navLink3.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimation() {
  enterTimeline3.reverse(0.28);
  isAnimationReversed3 = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLink3.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLink3.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimation();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-courses per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-courses').addEventListener('mouseleave', reverseExitAnimation);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-courses
var heroNavLinks3 = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinks.length; i++) {
  var link = heroNavLinks3[i];
  if (link.id !== 'hero-navlink-courses') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversed3) {
        reverseExitAnimation();
      }
    });
  }
}


// DROPDOWN menu Academy
var enterTimeline4 = gsap.timeline({ paused: true });
var navLink4 = document.getElementById('hero-navlink-academy');
var isAnimationReversed4 = true; // L'animazione inizia come invertita

// Aggiungiamo le azioni all'animazione di entrata con easing "ease"
enterTimeline4
  .fromTo('.hero-navbar_dropdown', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' })
  .fromTo('.dropdown_menu-component.is-academy', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.3')
  .fromTo('.dropdown_menu-image.is-academy', { scale: 1.3 }, { scale: 1, duration: 0.3, ease: 'ease' }, '-=0.2')
  .fromTo('.dropdown_menu-text-wrapper.is-academy', { y: '7%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.3, ease: 'ease' }, '-=0.2');

// Funzione per avviare l'animazione di entrata e gestire lo stato di hover
function playEnterAnimation() {
  // Avvia l'animazione di entrata
  enterTimeline4.play();
  isAnimationReversed4 = false;

  // Imposta l'id in stato di hover
  navLink4.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimation() {
  enterTimeline4.reverse(0.28);
  isAnimationReversed4 = true;

  // Rimuovi lo stato di hover quando l'animazione è invertita
  navLink4.classList.remove('hovered');
}

// Aggiungiamo l'evento click per attivare l'animazione di entrata
navLink4.addEventListener('click', function() {
  // Avvia l'animazione di entrata
  playEnterAnimation();
});

// Aggiungiamo l'evento mouseleave su .dropdown_menu-component.is-academy per riavviare l'animazione di uscita
document.querySelector('.dropdown_menu-component.is-academy').addEventListener('mouseleave', reverseExitAnimation);

// Aggiungiamo l'evento mouseenter su .hero-navbar_link tranne quelle con id hero-navlink-academy
var heroNavLinks4 = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinks4.length; i++) {
  var link = heroNavLinks[i];
  if (link.id !== 'hero-navlink-academy') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversed4) {
        reverseExitAnimation();
      }
    });
  }
}
