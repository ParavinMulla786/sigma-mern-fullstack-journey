// user enters a max number & then tries to guess  a random number between 1 to max
const max = prompt("Enter a Max Number");

const random = Math.floor( Math.random() * max) +1 ;
console.log(random );

let guess = prompt("Guess Number");
while(true){
    if (guess == "quit"){
        console.log("use quit");
        break;
    }
    if(guess == random){
        console.log("you are right . Congrats!!");
        break;
    } else if(guess < random){
        prompt("You Are to small. please try again")

    }
    else if(
        guess > random
    ){
        prompt("Your guess is to large")
    }

    else{
 guess = prompt("Your guess was wrong , please try again");
    }
}