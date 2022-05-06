

var choise = ["rock","paper","scissors"]
var image = [   ]

function remove_img(){
    document.getElementsByClassName('game')[0].remove();
}



var chose = document.querySelectorAll(".chose")
 var heroScore = 0
 // we create a varivale and we assing to it the player score it will be increamanted after every round winning
 var ennemieScore = 0
 // we create a varivale and we assing to it the computer score it will be increamanted after every round winning
 chose .forEach((choice) => {
    choice.addEventListener("click", function () {
      var eInput = this.value;
      var eChose = ["Rock", "Paper", "Scissors"];
      var eInput = cOptions[Math.floor(Math.random() * 3)]
      updateMoves(hInput, eInput);
      compareInputs(hInput, eInput);
      updateScore();
      if(checkWinner()){
        heroScore = ennemieScore= 0;
        updateScore();
      }
    });
  });
  function updateMoves(hInput, eInput){
    document.getElementById("h-move").src = `./assets/${pInput}.svg`;
    document.getElementById("e-move").src = `./assets/${cInput}.svg`;
  }
  function compareInputs(hInput, eInput) {
    const currentMatch = `${hInput} vs ${eInput}`;
    if (hInput === eInput) {
      alert(`${currentMatch} is a Tie`);
      return;
    }
    if (hInput === "Rock") {
      if (eInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
        heroScore++;
      } else {
        alert(`${currentMatch} = Computer Wins`);
        ennemieScore ++;
      }
    }
    else if (hInput === "Paper") {
      if (eInput === "Rock") {
        alert(`${currentMatch} = You Win`);
        heroScore++;
      } else {
        alert(`${currentMatch} = Computer Wins`);
        ennemieScore ++;
      }
    }
    else {
      if (eInput === "Paper") {
        alert(`${currentMatch} = You Win`);
        heroScore++;
      } else {
        alert(`${currentMatch} = Computer Wins`);
        ennemieScore ++
      }
    }
  }
  function updateScore() {
    document.getElementById("h-score").textContent = heroScore;
    document.getElementById("e-score").textContent = ennemieScore;
  }
  function checkWinner() {
    if (hScore === 5 ) {
          alert("You win the game! Congratulations!")
    }
    alert("Computer wins the game! Try again next time!")
  }
