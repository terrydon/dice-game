var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-hold').addEventListener("click", function() {
    if (gamePlaying) {
            scores[activePlayer] += roundScore;

            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                    // Check if player won the game
                    if (scores[activePlayer] >= 100) {
                        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                        document.querySelector('.dice').style.display = 'none';
                        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                        gamePlaying = false;
                    } else {
                        //Next player
                        nextPlayer();
                    }
                }
            });
