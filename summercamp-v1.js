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

  // Nascondi anche la classe .hero-navbar_dropdown
  gsap.to('.hero-navbar_dropdown', { display: 'none', duration: 0 });
}

// Aggiungiamo l'evento mouseenter per attivare l'animazione di entrata
navLinkSummerCamp.addEventListener('mouseenter', function() {
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

// Aggiungi un callback per riprodurre l'animazione ogni volta che viene completata
enterTimelineSummerCamp.eventCallback("onComplete", function() {
  isAnimationReversedSummerCamp = true;
});
