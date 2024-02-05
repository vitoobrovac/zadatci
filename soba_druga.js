let button = document.getElementById('gumbic');
let unosA, unosB, unosC, unosD; 

button.addEventListener('click', () => {
  unosA = document.getElementById('unosA').value;
  unosB = document.getElementById('unosB').value;
  unosC = document.getElementById('unosC').value;
  unosD = document.getElementById('unosD').value;
  var dynamicLink = document.createElement("a");
  var dynamicDiv = document.createElement("div");
  if (unosA === '1c' && unosB === '2a' && unosC === '3b' && unosD === '4d') {
    dynamicLink.classList.add("linkzasobu");
    dynamicLink.textContent = "zadatak 3";
    dynamicLink.href = "/soba_treca/soba_treca.html"
    var container = document.getElementById("stolcina");
    container.appendChild(dynamicLink);
  } else {
    dynamicDiv.classList.add("linkzasobu");
    dynamicDiv.textContent = "probaj opet";
    var container = document.getElementById("stolcina");
    container.appendChild(dynamicDiv);
  }
});

console.log(unosA);
console.log(unosB);
