const greeting = document.querySelector('.hero-card h1');
const tabs = document.querySelectorAll('.tab');
const quickCards = document.querySelectorAll('.quick-card');

function setGreeting() {
  const hour = new Date().getHours();
  const label = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  if (greeting) greeting.textContent = `${label}, Shaya.`;
}

function setActiveTab(tab) {
  tabs.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setActiveTab(tab));
});

quickCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(0.985)' },
        { transform: 'scale(1)' }
      ],
      { duration: 180, easing: 'ease-out' }
    );
  });
});

setGreeting();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // The shell still works if service worker registration fails.
    });
  });
}
