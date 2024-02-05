
var trenutniInterval;

function odbrojavanje() {
  var sekunde = 3;
  document.getElementById("brojac").textContent = '4';

  
  if (trenutniInterval) {
    clearInterval(trenutniInterval);
  }

  trenutniInterval = setInterval(function() {
    document.getElementById("brojac").textContent = sekunde;

    if (sekunde === 0) {
      clearInterval(trenutniInterval);
      location.reload();
    } else {
      sekunde--;
    }
  }, 1000);
}

function zaustaviOdbrojavanje() {
    // Ako postoji trenutni interval, očisti ga
    if (trenutniInterval) {
      clearInterval(trenutniInterval);
      document.getElementById("brojac").textContent = 'vrijeme zaustavljeno';}}




  

  



//------------random funkcije----------------------

function random(){
    return Math.floor(Math.random() * 100) + 1;
}
function randomB(){
    return Math.floor(Math.random() * 2) + 1;
}
function randomC(){
    return Math.floor(Math.random() * 81) - 40;
}
function randomD(){
    return Math.floor(Math.random() * 3) + 1;
}


//---------stvaranje prvog zadatka----------------
let a=random();
let b=random();
let c=a+b+randomC();
let tocanB=1

Result = String(a)+'+'+String(b);
document.getElementById('zadatak').innerText = Result;
let tocan=0
if(randomB()===1){
    document.getElementById('prvi').innerText = a+b;
    document.getElementById('drugi').innerText = c;
    document.getElementById('prvi').classList.add('light-red');
    document.getElementById('drugi').classList.add('light-red');
    tocan=1
   
}
else{document.getElementById('drugi').innerText = a+b;
document.getElementById('prvi').innerText = c;
document.getElementById('prvi').classList.add('light-red');
document.getElementById('drugi').classList.add('light-red');
tocan=2
}


console.log(a+b,tocan)

//----------funkcija za 3 nova-----------------

function triNova(prvi,drugi,treci,cetvrti){
    if(tocan===cetvrti){
        a=random();
        b=random();
        c=a+b;
        z=randomD()
        if(z===1){
            uno=c;
            duo=c+randomC();
            tre=c+randomC();
            tocanB=1;
        }else if(z===2){
            tre=c;
            duo=c+randomC();
            uno=c+randomC();
            tocanB=2;
        }else{
            duo=c;
            tre=c+randomC();
            uno=c+randomC();
            tocanB=3;
        }
        Result = String(a)+'+'+String(b);
        document.getElementById('zadatak').innerText = Result;

        document.getElementById(prvi).classList.add('light-red');
        document.getElementById(drugi).classList.add('light-red');
        document.getElementById(treci).classList.add('light-red');
        document.getElementById(prvi).innerText =uno;
        document.getElementById(drugi).innerText =duo;
        document.getElementById(treci).innerText=tre;
        sljedeciTocan=c
        console.log(c)
        odbrojavanje()
    }else{
        location.reload();
    }

}



function triNovaB(prvi,drugi,treci,peti){
    var buttonElement = document.getElementById(peti);
    if(sljedeciTocan==buttonElement.innerText){
        a=random();
        b=random();
        c=a+b;
        z=randomD()
        if(z===1){
            uno=c;
            duo=c+randomC();
            tre=c+randomC();
            tocanB=1;
        }else if(z===2){
            tre=c;
            duo=c+randomC();
            uno=c+randomC();
            tocanB=2;
        }else{
            duo=c;
            tre=c+randomC();
            uno=c+randomC();
            tocanB=3;
        }
        Result = String(a)+'+'+String(b);
        document.getElementById('zadatak').innerText = Result;

        document.getElementById(prvi).classList.add('light-red');
        document.getElementById(drugi).classList.add('light-red');
        document.getElementById(treci).classList.add('light-red');
        document.getElementById(prvi).innerText =uno;
        document.getElementById(drugi).innerText =duo;
        document.getElementById(treci).innerText=tre;
        sljedeciTocan=c
        console.log(c)
        odbrojavanje();
    }else{
        location.reload();
    }

}


function triNovaC(prvi,drugi,peti){
    var buttonElement = document.getElementById(peti);
    if(sljedeciTocan==buttonElement.innerText){
        a=random();
        b=random();
        c=a+b;
        z=randomD()
        if(z===1){
            uno=c;
            duo=c+randomC();
            tocanB=1;
        }else{
            duo=c;
            uno=c+randomC();
            tocanB=2;
        }
        Result = String(a)+'+'+String(b);
        document.getElementById('zadatak').innerText = Result;

        document.getElementById(prvi).classList.add('light-red');
        document.getElementById(drugi).classList.add('light-red');
        document.getElementById(prvi).innerText =uno;
        document.getElementById(drugi).innerText =duo;
        sljedeciTocan=c
        console.log(c)
        odbrojavanje();
    }else{
        location.reload();
    }

}



function triNovaD(peti){
    var buttonElement = document.getElementById(peti);
    if(sljedeciTocan==buttonElement.innerText){
       document.getElementById('kraj').innerHTML='bravo';
       zaustaviOdbrojavanje();
    }else{
        location.reload();
    }

}

