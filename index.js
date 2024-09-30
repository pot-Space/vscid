'use strict';

function randomInt() {
  let rand = 0.5 + Math.random() * (2 - 0.5);
  return rand.toFixed(2);
}

document.querySelectorAll('.bubble').forEach(bubble => {

  bubble.addEventListener('click', () => {
    bubble.style.cssText = 'display: none';
    setTimeout(() => {
      bubble.style.cssText = 'display: block';
    }, 2500);
  });

  bubble.addEventListener('mouseover', () => {
    const coord = bubble.dataset.translate.split(',').map(Number);

    bubble.style.transition = `transform ${randomInt()}s`;
    bubble.style.transform = `translate(${coord[0]}rem, ${coord[1]}rem)`;
  });

  bubble.addEventListener('mouseout', () => {

    if (window.getComputedStyle(bubble).getPropertyValue('display') === 'block') {
      setTimeout(() => {
        bubble.style.cssText = `transform: translate(0); transition: transform ${randomInt()}s`;
      }, 1000);
    }
  });
});