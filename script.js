// Redirect to the "Yes" page
document.getElementById('yes-button').addEventListener('click', function () {
  window.location.href = 'yes.html';
});

// Fun effect for the "Better Luck" button
document.getElementById('no-button').addEventListener('click', function () {
  alert("Just kidding! You have to say YES!");
  this.style.transform = 'translateX(100px)';
  setTimeout(() => {
    this.style.transform = 'translateX(0)';
  }, 500);
});

// Confetti effect for the "Yes" page
if (window.location.pathname.includes('yes.html')) {
  const confettiCount = 100;
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confetti);
  }
}