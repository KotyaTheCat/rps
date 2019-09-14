const game = () => {
    let pScore = 0;
    let cScore = 0;
    const playerNameScreen = document.querySelector('.playerName');
    const introScreen = document.querySelector('.intro');
    let playerName = document.querySelector('.playerName input')
    let player = document.querySelector('.player-score h2')
    const matchScreen = document.querySelector('.match');
    const gameOverScreen = document.querySelector('.gameOver');



    const typeUserScreen = () => {
        const nextButton = document.querySelector('.intro button');

        nextButton.addEventListener(
            'click',
            () => {
                introScreen.classList.add('fadeOut')
                playerNameScreen.classList.remove('fadeOut')
                playerNameScreen.classList.add('fadeIn')
            }
        )
    }

    const startGame = () => {

        const playButton = document.querySelector('#submitName');

        playButton.addEventListener(
            'click',
            () => {
                playerNameScreen.classList.remove('fadeIn')
                playerNameScreen.classList.add('fadeOut')
                matchScreen.classList.remove('fadeOut')
                matchScreen.classList.add('fadeIn')
                playerName = playerName.value
                player.innerText = playerName.charAt(0).toUpperCase() + playerName.slice(1);

            }
        )



    }

    // Play Match

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');


        // Remove animation style
        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        console.log(options)
        // Computer Options
        const computerOption = ['rock' ,'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener("click", function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber]

                playerHand.src = './assets/rock.png';
                computerHand.src = './assets/rock.png';


                setTimeout(() => {

                    // Call compareHands
                    compareHands(this.textContent, computerChoice)

                    // Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease"
            });
        });

        const computerNumber = Math.floor(Math.random() * 3);

    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;


        gameOver();


    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice) {
            winner.textContent = "It's a tie!";
            return;
        };
        // Check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors'){
                winner.textContent = `${player.innerText} Wins!`;
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        };
        // Check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper') {
                winner.textContent = `${player.innerText} Wins!`;
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return
            }
        };
        // Check for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = `${player.innerText} Wins!`;
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        };

    }

    const gameOver = () => {

        if (pScore == 1) {
            console.log("You win!")
            matchScreen.classList.remove('fadeIn');
            matchScreen.classList.add('fadeOut');
            gameOverScreen.classList.add('fadeIn');
            gameOverScreen.classList.remove('fadeOut');
            pScore = 0;
            cScore = 0;
            return
        } else if (cScore == 1) {
            console.log("Computer win!");
            matchScreen.classList.remove('fadeIn');
            matchScreen.classList.add('fadeOut');
            gameOverScreen.classList.add('fadeIn');
            gameOverScreen.classList.remove('fadeOut');
            pScore = 0;
            cScore = 0;
        }

    }

    console.log(pScore + " / " + cScore)

    // call all the inner functions
    gameOver();
    typeUserScreen();
    startGame();
    playMatch();
}

game();