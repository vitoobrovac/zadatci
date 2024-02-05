




function random(){
    return Math.floor(Math.random() * 100) + 1;
}
function randomB(){
    return Math.floor(Math.random() * 2) + 1;
}
function randomC(){
    return Math.floor(Math.random() * 61) - 30;
}
function randomD(){
    return Math.floor(Math.random() * 3) + 1;
}


let e=3


function gumbadva(koji,broj,prvi,drugi,treci){
    o=random();
    b=random();
    c=o+b;
    z=randomD()
    if(z===1){
        uno=c;
        duo=c+randomC();
        tre=c+randomC();
        znj=1
    }else if(z===2){
        tre=c;
        duo=c+randomC();
        uno=c+randomC();
        znj=2
    }else{
        duo=c;
        tre=c+randomC();
        uno=c+randomC();
        znj=3
    }
    let buttonB = document.getElementById(koji);
    buttonB.addEventListener('click', () => {
        if(e===broj){
            document.getElementById(prvi).classList.add('light-red');
            document.getElementById(drugi).classList.add('light-red');
            document.getElementById(treci).classList.add('light-red');
            document.getElementById(prvi).innerText =uno;
            document.getElementById(drugi).innerText =duo;
            document.getElementById(treci).innerText=tre;
            zaRez= String(b) + '+' + String(o);
            document.getElementById('zadatak').innerText =zaRez;
        }
        else{
            location.reload();
        }
        
    });
    return znj;
};



function sljedeci(random1,random2,random3){
    a=random1+random2;
    b=a+randomC();
    Result = String(random1)+'+'+String(random2);
    document.getElementById('zadatak').innerText = Result;
    if(random3===1){
        document.getElementById('prvi').innerText = a;
        document.getElementById('drugi').innerText = b;
        document.getElementById('prvi').classList.add('light-red');
        document.getElementById('drugi').classList.add('light-red');
        e=1
    }
    else{document.getElementById('drugi').innerText = a;
    document.getElementById('prvi').innerText = b;
    document.getElementById('prvi').classList.add('light-red');
    document.getElementById('drugi').classList.add('light-red');
    e=2
    };
    a=gumbadva('prvi',1,'prviB','drugiB','treciB');
    a=gumbadva('drugi',2,'drugiB','treciB','cetvrtiB');
    return e
};





let josjedan=sljedeci(random(),random(),randomB());


