var i;
var elements = document.getElementsByClassName('fade-in')
var arrayLength = elements.length;

async function fadeIn() {
  for (i = 0; i < arrayLength; i++) {
    elements[i].style.opacity = 1;
    sleep(1000);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
