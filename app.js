

var scores, roundScore, activPlayer, dice, gamePlaying;
init() 
/* 
scores = [0, 0]; 
roundScore = 0; 
activPlayer = 0; 

//vlerat qe merr zari
//dice = Math.floor(Math.random() * 6) + 1; 
//console.log(dice); 

//document.querySelector('#current-' + activPlayer).textContent = dice; 
//document.querySelector('#current-' + activPlayer).innerHTML = '<em>' + dice + '</em>'; -> 
//                                                           atributi i html patjeter ne thonjzen e string sepse ndryshe e merr si vlere 
//var x = document.querySelector('#current-' + activPlayer).textContent  -> merr vleren e x qe ndodhet ne html 
//console.log(x);

document.querySelector('.dice').style.display  = 'none';    

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0; 
*/
/* 
function btn(){
    //do sth
}

//thirrja qe i bejme ne 
btn(); 

//CALL BACK FUNCTION
document.querySelector('.btn-roll').addEventListener('click', btn); 
*/
//Mqs funkioni i butonit nuk na duhet ne vend tjeter e bejm anonymous function 
//ANONYMUS FUNCTION
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. random number sapo dikush clikon
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.display result 
        var diceDOM = document.querySelector('.dice'); 
        diceDOM.style.display = 'block'; 
        diceDOM.src = 'dice-' + dice + '.png'; 

        //3. update the round score IF the rolled number was NOT 1
        if(dice !== 1){
            //Add Score
            roundScore = roundScore + dice; 
            document.querySelector('#current-' + activPlayer).textContent = roundScore; 
        }
        else{
            //next Player
            nextPlayer(); 
        }
    }
}); 


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add CURRENT score to GLOBAL score
        scores[activPlayer] = scores[activPlayer] + roundScore; 

        //Update the user IU(user interface)
        document.querySelector('#score-' + activPlayer).textContent = scores[activPlayer]; 

        //Check if the player won the game 
        if(scores[activPlayer] >= 10){
            document.querySelector('#name-' + activPlayer).textContent = 'WINNER'; 
            document.querySelector('.dice').style.display  = 'none'; 
            document.querySelector('.player-' + activPlayer + '-panel').classList.add('winner'); 
            document.querySelector('.player-' + activPlayer + '-panel').classList.remove('active'); 
            gamePlaying = false; 
        }
        else{
            //next Player
            nextPlayer()
        }
    }
    
}); 


function nextPlayer(){
    activPlayer === 0 ? activPlayer = 1 : activPlayer = 0; 
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active'); 
    //document.querySelector('.player-1-panel').classList.add('active'); 

    document.querySelector('.dice').style.display = 'none'; 
}

document.querySelector('.btn-new').addEventListener('click', init); 

function init(){
    scores = [0, 0]; 
    roundScore = 0; 
    activPlayer = 0; 
    gamePlaying = true; 
    
    document.querySelector('.dice').style.display  = 'none';    

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0; 

    document.querySelector('#name-0').textContent = 'Player 1'; 
    document.querySelector('#name-1').textContent = 'Player 2'; 

    
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active');
    


}


















