// DROPDOWN menu Summer Camp
var enterTimeline2 = gsap.timeline({ paused: true });
var navLink2 = document.getElementById('hero-navlink-lesson');
var isAnimationReversed = true; // L'animazione inizia come invertita

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
  isAnimationReversed = false;

  // Imposta l'id in stato di hover
  navLink2.classList.add('hovered');
}

// Funzione per eseguire il reverse dell'animazione di uscita e gestire lo stato di hover
function reverseExitAnimation() {
  enterTimeline2.reverse(0.28);
  isAnimationReversed = true;

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
var heroNavLinks = document.querySelectorAll('.hero-navbar_link');
for (var i = 0; i < heroNavLinks.length; i++) {
  var link = heroNavLinks[i];
  if (link.id !== 'hero-navlink-lesson') {
    link.addEventListener('mouseenter', function() {
      // Esegui il reverse dell'animazione solo se l'animazione non è stata invertita
      if (!isAnimationReversed) {
        reverseExitAnimation();
      }
    });
  }
}
