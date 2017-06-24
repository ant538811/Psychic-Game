    //Our array of computer choices
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //Variables to keep track of our wins, losses, ties.
    var wins = 0;
    var losses = 0;
    var triesRemaining = 9;
    var totalAttempts = 0;
    var totalGames = 1;
    var wins = 0;
    var losses = 0;
    var youGuessed = [];
    var guessCounter = 0;
    var hiddenLetter = letter[Math.floor(Math.random() * letter.length)];
    document.onkeyup = function(event) {
        if (event.key >= "a" && event.key <= "z")
        {
        var guessLetter = event.key;
        }
        if (guessLetter === hiddenLetter) 
            {
                wins++;
                triesRemaining = 0;
                totalAttempts++;
                youGuessed[guessCounter] = guessLetter;
                var previousGuessed = youGuessed.join(" ");
            }
        else if (guessLetter !== hiddenLetter)
            {
                triesRemaining--;
                totalAttempts++;
                youGuessed[guessCounter] = guessLetter;
                guessCounter++;
                var previousGuessed = youGuessed.join(" ");
                if (triesRemaining == 0)
                    {
                        losses++; //counts losses when attempts reach zero
                    }
            }
      if (triesRemaining == 0) //resets the game by changing the hidden letter and resetting the remaining attempts
      {
        
        triesRemaining = 9;
        totalGames++;
        youGuessed = [];
        hiddenLetter = letter[Math.floor(Math.random() * letter.length)];
      }


        var html = "<p>Guess what letter I am thinking of.</p>" +
                   "<p>Wins: " + wins + "</p>" +
                   "<p>Losses: " + losses + "</p>" +
                   "<p>Tries Remaining: " + triesRemaining + "</p>" +
                   "<p>You previously guessed: " + previousGuessed + "</p>" +
                   "<p>Total Attempts: " + totalAttempts + "<p>" +
                   "<p>Total Games: " + totalGames + "<p>"
                  // "<p>Computer Guess: " + hiddenLetter + "</p>";  //answer

        document.querySelector("#game").innerHTML = html;

    }