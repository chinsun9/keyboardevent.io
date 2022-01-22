'use strict';
let currentKeyValue = '';
const messageElement = document.querySelector('#message');

document.addEventListener(
  'keydown',
  (event) => {
    if (event.key === 'F12') return;
    event.preventDefault();
    const { key, altKey, code, ctrlKey, shiftKey } = event;
    const keyInfo = {
      key,
      code,
      ctrlKey,
      altKey,
      shiftKey,
      asciiCode: key.length === 1 ? key.charCodeAt(0) : undefined,
    };

    messageElement.innerHTML = JSON.stringify(keyInfo, null, 2);
    currentKeyValue = keyInfo.key;
  },
  false
);

document.addEventListener('click', (event) => {
  if (!event.target.closest('.flexbox-item')) return;
  navigator.clipboard.writeText(currentKeyValue);
});
