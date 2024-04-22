// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = Math.floor(Math.random() * 10)+2
let secondCard = Math.floor(Math.random() * 10)+2
//console.log(firstCard)
//console.log(secondCard)

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard
//console.log(sum)

let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") //this version is more dynamic so needs #id specifier

let message = "Let's play!"
//console.log(message)

//If sum <21 :)
//If sum == 21 :D
//If sum > 21 :( lose




function drawCard(){
	firstCard = Math.floor(Math.random() * 10)+2
	secondCard = Math.floor(Math.random() * 10)+2
	sum = firstCard + secondCard
	
	if (sum <= 20) {
	message = "Want a new card?"
		
	} else if (sum === 21){
		message = "Wow! Blackjack!"
		hasBlackJack = true
	} else{
		message = "You're out of the game!"
		isAlive = false
	}

	messageEl.textContent = message
	cardEl.textContent = "Cards: " + firstCard + " " + secondCard
	sumEl.textContent = "Sum: " + sum
	
	//console.log(message)
	}
