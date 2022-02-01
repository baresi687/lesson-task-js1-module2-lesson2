const button = document.querySelector("button");
const spanCount = document.querySelector("span.count");

button.onclick = function () {
  let counter = 0;
  const interValId = setInterval(function () {
    button.disabled = true;
    counter++;
    spanCount.innerHTML = counter;
    if (counter === 7) {
      clearInterval(interValId);
      button.disabled = false;
      counter = 0;
    }
  }, 1000);
};
