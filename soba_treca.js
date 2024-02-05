
let lista = [];

function generateRandomNumber(x) {
  var broj;
  do {
    broj = Math.floor(Math.random() * 9) + 1;
  } while (x.indexOf(broj) !== -1);
  x.push(broj);
  return broj;
}

function postavljanje(x, y) {
  var randomNumberDivs = document.querySelectorAll(x);
  var randomNum = generateRandomNumber(y); 
  randomNumberDivs.forEach(function (div) {
    div.innerHTML = randomNum;
  });
  return randomNum; 
}


postavljanje('.sest',lista);
var dva   =postavljanje('.dva',lista);
postavljanje('.jedan',lista);
var cetiri=postavljanje('.cetiri',lista);
var nula  =postavljanje('.nula',lista);
postavljanje('.sedam',lista);
postavljanje('.tri',lista);
postavljanje('.osam',lista);



let button = document.getElementById('gumbic');
    button.addEventListener('click', () => {
      const unosA = parseInt(document.getElementById('unosA').value);
      const unosB = parseInt(document.getElementById('unosB').value);
      const unosC = parseInt(document.getElementById('unosC').value);
      var dynamicLink = document.createElement("a");
      var dynamicDiv = document.createElement("div");

      if (unosA === nula) {
        if (unosB === cetiri) {
            if (unosC === dva) {
                dynamicLink.classList.add("linkzasobu");
                dynamicLink.textContent = "zadatak 4";
                dynamicLink.href="/soba_cetvrta/soba_cetvrta.html"
                var container = document.getElementById("lokot");
                container.appendChild(dynamicLink);

        
      }}} else{
            dynamicDiv.classList.add("linkzasobu");
            dynamicDiv.textContent = "probaj opet";
            var container = document.getElementById("lokot");
            container.appendChild(dynamicDiv);
      }
    });
console.log(nula,cetiri,dva)