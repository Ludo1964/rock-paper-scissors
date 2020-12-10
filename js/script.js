
/*Player input through console*/
var playerSelection;
var computerSelection;
var comp = 0;
var player = 0;
const choices = document.querySelectorAll(".grid-item-play i");
let playerScore = document.querySelector(".grid-item-playerscore");
let compScore = document.querySelector(".grid-item-compscore");
const newGame = document.querySelector(".gameOver");
let icon = document.querySelectorAll(".iconHover");
let compRock = document.querySelector("#compRock");
let compPaper = document.querySelector("#compPaper");
let compScissors = document.querySelector("#compScissors");
let playRock = document.querySelector("#playRock");
let playPaper = document.querySelector("#playPaper");
let playScissors = document.querySelector("#playScissors");
let container = document.querySelector(".container");
let para;
let node;
let div;
let div1;

/*Create the divs for the paragraphs*/
function createDiv(){
	div1 = document.createElement("div");
	container.appendChild(div1);
	div = document.createElement("div");
	container.appendChild(div);
}

createDiv();

choices.forEach(choice => choice.addEventListener("click", playGame));

/*Start a New Game*/
newGame.addEventListener("click", function(){
	playerScore.innerHTML = player;
	compScore.innerHTML = comp;
	newGame.style.display = "none";
	choices.forEach(choice => choice.addEventListener("click", playGame));
	/*Add hovering back to icons when new game starts*/
	for(let i = 0; i < icon.length; i++){
			icon[i].classList.remove("no-hover");
		}
	compRock.style.display = "none";
	compPaper.style.display = "none";
	compScissors.style.display = "none";
	playRock.style.display = "none";
	playPaper.style.display = "none";
	playScissors.style.display = "none";
	container.removeChild(div);
	container.removeChild(div1);
	createDiv();
})

/*Play the game*/
function playGame(e){
	playerSelection = e.target.id;
	computerSelection = computerPlay();
	game();

	if(computerSelection == "rock"){
		compRock.style.display = "block";
		compPaper.style.display = "none";
		compScissors.style.display = "none";
	}else if(computerSelection == "paper"){
		compPaper.style.display = "block";
		compRock.style.display = "none";
		compScissors.style.display = "none";
	}else if(computerSelection == "scissors"){
		compScissors.style.display = "block";
		compPaper.style.display = "none";
		compRock.style.display = "none";
	}

	if(playerSelection == "rock"){
		playRock.style.display = "block";
		playPaper.style.display = "none";
		playScissors.style.display = "none";
	}else if(playerSelection == "paper"){
		playPaper.style.display = "block";
		playRock.style.display = "none";
		playScissors.style.display = "none";
	}else if(playerSelection == "scissors"){
		playScissors.style.display = "block";
		playPaper.style.display = "none";
		playRock.style.display = "none";
	}
}

/*Play a game of whre 5 wins will win the game*/
function game(){
	if(player < 5 && comp < 5 ){
		para = document.createElement("p");
		node = document.createTextNode(playRound(playerSelection, computerSelection));
		para.classList.add("par");
		para.appendChild(node);
		div.appendChild(para);
		console.log("Player score is " + player + " Computer score is " + comp);
		playerScore.innerHTML = player;
		compScore.innerHTML = comp;
	}if(player === 5 ){
		console.log("New game");
		para= document.createElement("p");
		node = document.createTextNode("Congrats, you have won my friend!");
		para.appendChild(node);
		div1.appendChild(para);
		para.classList.add("par");
		div1.classList.add("winner");
		comp = 0;
		player = 0;
		newGame.style.display = "block";
		choices.forEach(choice => choice.removeEventListener("click", playGame));

		/*Remove hovering from icon when game is over*/
		for(let i = 0; i < icon.length; i++){
			icon[i].classList.add("no-hover");
		}
	}else if( comp === 5){
		console.log("New game");
		para = document.createElement("p");
		node = document.createTextNode("You lost! Computer has won.");
		para.appendChild(node);
		div1.appendChild(para);
		para.classList.add("par");
		div1.classList.add("winner");
		comp = 0;
		player = 0;
		newGame.style.display = "block";
		choices.forEach(choice => choice.removeEventListener("click", playGame));
		/*Remove hovering from icon when game is over*/
		for(let i = 0; i < icon.length; i++){
			icon[i].classList.add("no-hover");
		}
	}
}

/*Random computer selection between 1 and 3 created*/
function computerPlay(){
      var x = Math.floor(Math.random() *(4-1) + 1);
      if(x == 1){
        return "rock"
        }else if(x == 2){
           return "paper"
        }else return "scissors"
}
 /*Play one round of game*/
function playRound(x, y){
	if(playerSelection.toLowerCase() == "rock" && computerSelection ==="scissors"){
		player++;
		return("You won rock beats scissors");
	}else if(playerSelection.toLowerCase() =="rock" && computerSelection === "paper"){
		comp++;
		return("You lost paper beats rock");
	}else if(playerSelection.toLowerCase() == "scissors" && computerSelection === "rock"){
		comp++;
		return("You lost rock beats scissors");
	}else if(playerSelection.toLowerCase() == "scissors" && computerSelection === "paper"){
		player++;
		return("You won scissors beat paper");
	}else if(playerSelection.toLowerCase() == "paper" && computerSelection === "scissors"){
		comp++;
		return("You lost scissors beat paper");
	}else if(playerSelection.toLowerCase() == "paper" && computerSelection === "rock"){
		player++;
		return("You won paper beats rock");
	}else if(x===y){
		return("Tie for the round "+playerSelection+" and "+computerSelection);
	}
}

