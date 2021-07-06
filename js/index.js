"use strict";
const message_span = document.querySelector("#message");

document.addEventListener(
  "keydown",
  (event) => {
    event.preventDefault();
    const { key, altKey, code, ctrlKey, shiftKey } = event;
    const keyInfo = {
      key,
      code,
      ctrlKey,
      altKey,
      shiftKey,
    };

    if (key.length === 1) {
      keyInfo["asciiCode"] = key.charCodeAt(0);
    }

    message_span.innerHTML = JSON.stringify(keyInfo, null, 2);
  },
  false
);
