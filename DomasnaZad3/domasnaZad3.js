let words = ["apple", "stone", "grape", "flash", "bliss", "cloud", "crisp", "shard", "brave", "quick"];

    let start = document.getElementById("start");
    let hint = document.getElementById("hint");
    let game = document.getElementById("game");
    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popupMessage");
    game.style.display = 'none';

    function Game(){
        start.style.display = 'none';
        game.style.display = '';

        let random_int = Math.floor(Math.random() * words.length);

        let random_letter1 = Math.floor(Math.random() * 5);
        let random_letter2 = Math.floor(Math.random() * 5);
        while (random_letter1 === random_letter2){
            random_letter2 = Math.floor(Math.random() * 5);
        }

        let random_word_arr = words[random_int];
        guess_word = random_word_arr;
        random_word_arr = random_word_arr.split("");

        for(let i = 0; i < random_word_arr.length; i++){
            if(i !== random_letter1 && i !== random_letter2){
                random_word_arr[i] = "_";
            }
        }

        random_word_arr = random_word_arr.join(" ");
        hint.innerHTML = random_word_arr;
    }

    document.getElementById("myGuess").addEventListener("keyup", enterKey);

    function enterKey (event) {

    if (event.key === "Enter") { 
        Guess();
    }

    }

    function Guess(){
        let numGuesses = document.getElementById("GuessNumber").innerHTML;
        let myGuess = document.getElementById("myGuess").value;

        if(Number(numGuesses) !== 1){
            if(myGuess === guess_word){
                popupMessage.innerHTML = "You Won The Game!";
                popup.style.display = 'flex';
                resetGame();
            } else {
                document.getElementById("GuessNumber").innerHTML -= 1;
                document.getElementById("myGuess").value = '';
                document.getElementById("wGuess").innerHTML += myGuess + ', '
            }
        } else {
            popupMessage.innerHTML = "You Lost The Game!";
            popupWord.innerHTML = "The word was " + guess_word;
            popup.style.display = 'flex';
            resetGame();
        }
    }

    function resetGame() {
        start.style.display = '';
        game.style.display = 'none';
        document.getElementById("GuessNumber").innerHTML = 5;
        document.getElementById("myGuess").value = '';
    }

    function playAgain() {
        popup.style.display = 'none';
        start.style.display = '';
        game.style.display = 'none';
        guessWord.style.display = 'none'
    }

    window.addEventListener( "load", game, false );