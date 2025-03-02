
let turn = 'X';
let isgameOver = false;

let resetButton = document.getElementsByClassName("Reset")[0];

//Function to change the turn
const changeTurn = () =>{
  return turn === "X"? "0" :"X"
}


//function to check for a win
const checkWin = () => {
  let boxText = document.getElementsByClassName('boxText')
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  wins.forEach (e =>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '') ){
      document.querySelector('.info').innerText = boxText[e[0]].innerText + " "+ "Won"
      isgameOver = true
    }
  })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.boxText')
  element.addEventListener('click', () => {
    if(boxText.innerText === ""){
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameOver){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + "" + turn;
      }
      boxText.style.color = "#0ef";
      
    }
  })
})

// Add onclick listener to reset button 
resetButton.addEventListener('click', () => {
let boxtexts = document.querySelectorAll(".boxText");
Array.from(boxtexts).forEach(element => {
  element.innerText = "";
});
turn = "X";
isgameOver = false;
document.getElementsByClassName("info")[0].innerText = "Turn for " + "" + turn; 
})