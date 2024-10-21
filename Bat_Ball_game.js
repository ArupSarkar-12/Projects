let scoreStr = localStorage.getItem('score');                                        //define getitem
let score;                               //global veriable
resetScore(scoreStr);                                     

function resetScore(scoreStr){                                              //create another function and call
    score = scoreStr ? JSON.parse(scoreStr) :{              //Check if scorestr is available         //if value undefined then print as usual
    Win: 0,                                                                             //Object Declare Syntax
    Lose: 0,
    Tie: 0,             
  };
score.displayScore = function() {                                                      //Encapsulation Method
        return `Win: ${score.Win}, Lose: ${score.Lose}, Tie: ${score.Tie}`;         

    };    
}
                                                                                                
function generateComputerCode(){
let randomnumber = Math.random() *3;
let computerChoice;

if(randomnumber>0 && randomnumber<=1){
    computerChoice = 'Bat';
    console.log('Computer Choice is Bat');
}else if(randomnumber>1 && randomnumber<=2){
    computerChoice ='Ball';
    console.log('Computer Choice is Ball');
}
else{
    computerChoice = 'stump';
    console.log('Computer Choice is Stump');
}
return computerChoice;
}
