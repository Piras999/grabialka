var happyBirthdayImg = document.getElementById("happy-birthday-img");

// console.log(happyBirthdayImg);

// var deleteHiddenClass = function (event) {
//     happyBirthdayImg.classList.remove('hidden');
// }

// var timeout = setTimeout (function () {
//     deleteHiddenClass(happyBirthdayImg);
// }, 1000);

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

  happyBirthdayImg.onclick = function() {

    let to = main.clientHeight - happyBirthdayImg.clientHeight;

    animate({
      duration: 2000,
      timing: makeEaseOut(bounce),
      draw(progress) {
        happyBirthdayImg.style.top = to * progress + 'px'
      }
    });


  };



