
var cadArr, cardBack, theScore, show, loose, easy, a,cad, wrong, correct, 
mainScore, clap, theScore, hard, cardNum, down, pick, initNum, score, scoreKeep, difficulty, shuffledNumber;

cardNum = document.querySelectorAll(".card__front");
cardBack = document.querySelectorAll(".card__back");

down = document.querySelectorAll('.down');
easy = document.querySelector('.btn-e');
hard = document.querySelector('.btn-h');
mainScore = document.querySelector('#main-score');
theScore = 0;
scoreKeep = 0;
loose = 0;
score = [];
difficulty = 'easy';

wrong = document.querySelector('#wrong');
correct = document.querySelector('#correct');
clap = document.querySelector('#clap');


  
reset();



// for(var i = 0; i < cardNum.length; i++){
//     this.addEventListener('click', innerCalc(i));
// }



cardNum[0].onclick = function(){
    a = 0;
    innerCalc(a);
};

cardNum[1].addEventListener('click' , function(){
    a = 1;
    innerCalc(a);
}); 

cardNum[2].addEventListener('click' , function(){
    a = 2;
    innerCalc(a);
}); 

cardNum[3].addEventListener('click' , function(){
    a = 3;
    innerCalc(a);
}); 

cardNum[4].addEventListener('click' , function(){
    a = 4;
    innerCalc(a);
}); 

cardNum[5].addEventListener('click' , function(){
    a = 5;
    innerCalc(a);
}); 


cardNum[6].addEventListener('click' , function(){
    a = 6;
    innerCalc(a);
}); 

cardNum[7].addEventListener('click' , function(){
    a = 7;
    innerCalc(a);
}); 

cardNum[8].addEventListener('click' , function(){
    a = 8;
    innerCalc(a);
}); 

cardNum[9].addEventListener('click' , function(){
    a = 9;
    innerCalc(a);
}); 

cardNum[10].addEventListener('click' , function(){
    a = 10;
    innerCalc(a);
}); 

cardNum[11].addEventListener('click' , function(){
    a = 11;
    innerCalc(a);
}); 



cardNum[12].addEventListener('click' , function(){
    a = 12;
    innerCalc(a);
}); 

cardNum[13].addEventListener('click' , function(){
    a = 13;
    innerCalc(a);
}); 

cardNum[14].addEventListener('click' , function(){
    a = 14;
    innerCalc(a);
}); 

cardNum[15].addEventListener('click' , function(){
    a = 15;
    innerCalc(a);
}); 








easy.addEventListener('click' , function(){
    this.classList.add('selected');
    hard.classList.remove('selected');

    down[0].style.display = 'none';
    down[1].style.display = 'none';
    down[2].style.display = 'none';
    down[3].style.display = 'none';
    difficulty = 'easy';

    reset();
});

hard.addEventListener('click' , function(){
    this.classList.add('selected');
    easy.classList.remove('selected');

    down[0].style.display = 'inherit';
    down[1].style.display = 'inherit';
    down[2].style.display = 'inherit';
    down[3].style.display = 'inherit';
    difficulty = 'hard';

  
    reset();
});







function shuffle(cadArr){
    cadArr.sort(() => Math.random() - 0.5);
}


function reset(){
    for(var i = 0; i < cardNum.length; i++){
        // cardNum[i].textContent = 'H';
        // cardNum[i].style.background = '#0d0d16';

        cardNum[i].style.backgroundImage = `url('./homa.jpg')`;
        cardNum[i].style.backgroundSize = 'Cover';
    }

    if(difficulty === 'easy'){
        cadArr = [1, 2, 3, 3, 2, 1, 4, 5, 4, 6, 6, 5];
        initNum = cadArr[Math.floor(Math.random() * cadArr.length)];
    } else if(difficulty === 'hard') {
        cadArr = [1, 2, 3, 3, 2, 1, 4, 4, 5, 6, 5, 7, 8, 6, 8, 7];
        initNum = cadArr[Math.floor(Math.random() * cadArr.length)];
    };

    shuffle(cadArr); 

    loose = 0;
    score = []; 
    scoreKeep = 0;
    theScore = 0;
    theReset();
}



function theReset(){
    score = [];
    scoreKeep = 0;
}



function click(){
    // score[0].style.background = 'white';
    // score[1].style.background = 'white';

    theScore++;
    mainScore.textContent = theScore;

    theReset();
    stop();
}



function innerCalc(a){

if(cardBack[a].style.background !== 'white'){

    cad = cardBack[a];

    shuffledNumber = [cadArr[a]]

    cardBack[a].style.backgroundImage = `url('${shuffledNumber}.jpg')`;
    cardBack[a].style.backgroundSize = 'Cover';
    cardBack[a].textContent = shuffledNumber;
    flipped();

    if(score.length < 2){
        score.push(cad);
        
        scoreKeep++;
    }

    if(score[0].textContent === cad){
        score.push(cardBack[a]);
        scoreKeep++;
    }

    if(score[1]){
        if(score[0].textContent === score[1].textContent){
            click();
            correct.play();
        }else{
            wrong.play();
            var s1 = score[0].parentNode;
            var s2 = score[1].parentNode;
            theReset();

            setTimeout(() => {
                s1.classList.toggle('card--flipped');
                s2.classList.toggle('card--flipped');
            }, 1000);
        }
    }
}
gameOver();
} 




function gameOver(){
    if(theScore === 6 && difficulty === 'easy'){
        clap.play();
        setTimeout(() => {
            alert('==== GMOOOVE! ====Click -OK- to PLAY AGAIN');
            document.location.reload();
        }, 1200);
    } else if(theScore === 8 && difficulty === 'hard'){
        clap.play();
        setTimeout(() => {
            alert('==== GMOOOVE! ====Click -OK- to PLAY AGAIN');
            document.location.reload();   
        }, 1200);
    }
}



 function flipped(){
 let cards = document.getElementsByClassName('card__inner');            
        // Loop through all the card elements
        // Array.from(cards).forEach((card) => {
            
        // Track the clicks on the card element
        // card.addEventListener('click', () => {
            // Toggle the `flippedstate` CSS class
            cards[a].classList.toggle('card--flipped');
        // });
        // });
}

    















