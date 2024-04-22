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

let message = "Let's play!"
console.log(message)

//If sum <21 :)
//If sum == 21 :D
//If sum > 21 :( lose

if (sum <= 20) {
	message = "Want a new card?"
	
} else if (sum === 21){
	message = "Wow! Blackjack!"
	hasBlackJack = true
} else{
	message = "You're out of the game!"
	isAlive = false
}

console.log(message)

