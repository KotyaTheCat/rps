const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');


        playButton.addEventListener(
            'click',
            () => {
                introScreen.classList.add('fadeOut')
                matchScreen.classList.add('fadeIn')
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
                winner.textContent = 'Player Wins!';
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
                winner.textContent = 'Player Wins!';
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
                winner.textContent = 'Player Wins!';
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

    // call all the inner functions
    startGame();
    playMatch();
}

game();