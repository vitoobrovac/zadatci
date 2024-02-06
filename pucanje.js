function stvorimetu(){
    const labirint = document.getElementById("okvir");
    const noviDiv = document.createElement("Button");
    noviDiv.id = "novi-div";
    labirint.appendChild(noviDiv);
    const randomTop = Math.floor(Math.random() * (labirint.clientHeight - 100));
    const randomLeft = Math.floor(Math.random() * (labirint.clientWidth - 100));
    noviDiv.style.position = "absolute"; 
    noviDiv.style.top = randomTop + "px";
    noviDiv.style.left = randomLeft + "px";
    noviDiv.addEventListener("click", function() {
        maknibumb()});}

let bodovi=0;
function maknibumb(){
    var gumb=document.getElementById('novi-div');
    gumb.parentNode.removeChild(gumb)
    stvorimetu()
    bodovi++
    document.getElementById('bodovi').innerText='bodovi: '+bodovi;
    var audio = new Audio('piju2-1.m4a');
    audio.play();
    return bodovi;


}
var trenutniInterval;
function odbrojavanje() {
    var sekunde = 29;
    document.getElementById("brojac").textContent = 'vrijeme: 30';
  
    trenutniInterval = setInterval(function() {
      document.getElementById("brojac").textContent = 'vrijeme: '+sekunde;
  
      if (sekunde === 0) {
        clearInterval(trenutniInterval);
        gotovo();
      } else {
        sekunde--;
      }
    }, 1000);
  }


const vrijeme=document.getElementById('kreni');
vrijeme.addEventListener("click", function() {
    odbrojavanje()})
vrijeme.addEventListener("click", function() {
    vrijeme.parentNode.removeChild(vrijeme)})


function gotovo(){
    document.getElementById('brojac').innerHTML='vrijeme zaustavljeno'
    document.getElementById('bodovi').innerHTML='imaš '+maknibumb()+' boda';
    var maknucemo=document.getElementById('novi-div');
    maknucemo.parentNode.removeChild(maknucemo);
}

   


