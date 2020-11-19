"use strict";
const message_span = document.querySelector("#message");

document.addEventListener(
  "keydown",
  (event) => {
    const { key, altKey, code, ctrlKey, keyCode, shiftKey } = event;
    const key_info = {
      key,
      altKey,
      code,
      ctrlKey,
      keyCode,
      shiftKey,
    };

    message_span.innerHTML = JSON.stringify(key_info, null, 2);
  },
  false
);