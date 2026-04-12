const favmovie = "avatar";

let guess = prompt("Guess my favorite movie:");

while (guess != favmovie) {
    if (guess == "quit") {
        break;
    }
    guess = prompt("Wrong guess, please try again:");
}

if (guess == favmovie) {
    console.log("Congratulations!");
} else {
    console.log("You quit");
}