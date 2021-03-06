// Zmienne
var happyBirthdayImg = document.getElementById("happy-birthday-img");
var hidden = document.getElementsByClassName('hidden');


// Snippet opadania napisu
function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  // Pojawienie się napisu po 500 ms
  setTimeout (function() {
    happyBirthdayImg.classList.remove('hidden');
  }, 500);

  // Opadnięcie napisu po 500 ms
  setTimeout(function() {
    let to = main.clientHeight - happyBirthdayImg.clientHeight + 80;

    animate({
      duration: 2000,
      timing: makeEaseOut(bounce),
      draw(progress) {
        happyBirthdayImg.style.top =  to * progress + 'px'
      }
    });
  }, 500);