// Implementation of throttling using setTimeout

const primaryButton = document.querySelector(".primary-button");

function throttling(cb, delay) {
  const context = this;
  let timer;

  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      cb.apply(context, args);
      timer = null;
    }, delay);
  };
}

function onPrimaryButtonClick() {
  console.log("primary button is clicked");
}

primaryButton.addEventListener("click", throttling(onPrimaryButtonClick, 500));
