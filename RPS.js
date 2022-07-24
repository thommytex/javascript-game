const pdisplay = document.querySelector('.p-display');
const compdisplay = document.querySelector('.comp-display');
const btn = document.querySelectorAll('button');
const display = document.querySelector('.display');

const ysr = document.querySelector('#ysr');
const csr = document.querySelector('#csr');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const Raudio = document.querySelector('#Raudio');
const Paudio = document.querySelector('#Paudio');
const Saudio = document.querySelector('#Saudio');

console.log(rock.play)
YS = 0;
CS = 0;


const array = ['Rock','Paper','Scissors'];
console.log(array[Math.floor(Math.random()*3)]);


btn.forEach((bot)=>{
   bot.addEventListener('click',()=>{
        
     pdisplay.innerText = bot.innerText;

     compdisplay.innerText = `${array[Math.floor(Math.random()*3)]}`;
    

    if(pdisplay.innerText == 'Rock' && compdisplay.innerText ==`${array[1]}`){
        display.innerText = 'COMPUTER'
    }
    else if(pdisplay.innerText == 'Rock' && compdisplay.innerText ==`${array[2]}`){
        display.innerText = 'POINT'
    }
    else if(pdisplay.innerText == 'Paper' && compdisplay.innerText ==`${array[0]}`){
        display.innerText = 'POINT'
    }
   else if(pdisplay.innerText == 'Paper' && compdisplay.innerText ==`${array[2]}`){
       display.innerText = 'COMPUTER'
   }
   else if(pdisplay.innerText == 'Scissors' && compdisplay.innerText ==`${array[0]}`){
    display.innerText = 'COMPUTER'
    }
    else if(pdisplay.innerText == 'Scissors' && compdisplay.innerText ==`${array[1]}`){
    display.innerText = 'POINT'
    }
    else{
    }

  

    if(pdisplay.innerText == compdisplay.innerText){
        display.innerText = 'DRAW'
    }
    if(display.innerText == 'COMPUTER'){
        CS +=2;
        csr.innerText = CS;
    }
    if(display.innerText == 'POINT'){
        YS +=2;
        ysr.innerText = YS;
    }

    if(csr.innerText == 10 || ysr.innerText == 10){
        if(CS>YS){
            alert(`You lost,your score is ${YS}`)
         }else if(YS>CS){
            alert(`You won,your score is ${YS}`)
         }

        YS = 0;
        CS = 0;
        csr.innerText = CS;
        ysr.innerText = YS;
    }
    

   })
})
rock.onclick = function(){
    Raudio.play()
}
paper.onclick = function(){
    Paudio.play()
}
scissors.onclick = function(){
   Saudio.play()
}