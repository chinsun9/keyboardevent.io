"use strict";
const message_span = document.querySelector("#message");

document.addEventListener(
  "keydown",
  (event) => {
    event.preventDefault()
    const { key, altKey, code, ctrlKey, keyCode, shiftKey } = event;
    const key_info = {
      key,
      keyCode,
      code,
      ctrlKey,
      altKey,
      shiftKey,
    };

    message_span.innerHTML = JSON.stringify(key_info, null, 2);
  },
  false
);
