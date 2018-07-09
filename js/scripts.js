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
            function nextPlayer() {


	if(activePlayer === 0) {
		activePlayer = 1;
	}  else {
		activePlayer = 0;
	 }
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'http://www.wpclipart.com/recreation/games/dice/die_face_' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
