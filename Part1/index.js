const gamePlay = [];

const play = (paramClickedBoxIDeg3or5or9) => {
    const spanIdPLAYER = document.getElementById('player');
    const varClickedBox = document.getElementById(paramClickedBoxIDeg3or5or9)
    if (spanIdPLAYER.innerText === 'X') {
        spanIdPLAYER.innerText = 'O';
        varClickedBox.innerText = 'X';
        // gamePlay.splice(varClickedBox, 1, spanIdPLAYER.innerText)
        gamePlay[paramClickedBoxIDeg3or5or9] = 'X';} else {
            spanIdPLAYER.innerText = 'X';
            varClickedBox.innerText = 'O';
            // gamePlay.splice(varClickedBox, 1, spanIdPLAYER.innerText)
            gamePlay[paramClickedBoxIDeg3or5or9] = 'O';
        }
        console.log(gamePlay)
} 

function alertWin () {
    let b0 = document.getElementById(0);
    let b1 = document.getElementById(1);
    let b2 = document.getElementById(2);
    let b3 = document.getElementById(3);
    let b4 = document.getElementById(4);
    let b5 = document.getElementById(5);
    let b6 = document.getElementById(6);
    let b7 = document.getElementById(7);
    let b8 = document.getElementById(8);
    let b0I = b0.innerText;
    let b1I = b1.innerText;
    let b2I = b2.innerText;
    let b3I = b3.innerText;
    let b4I = b4.innerText;
    let b5I = b5.innerText;
    let b6I = b6.innerText;
    let b7I = b7.innerText;
    let b8I = b8.innerText;
    let pI = spanIdPLAYER.innerText
    if (
        (b0I === pI && b1I === pI && b2I === pI)||
        (b0I === pI && b3I === pI && b6I === pI)||
        (b0I === pI && b4I === pI && b8I === pI)||
        (b1I === pI && b4I === pI && b7I === pI)||
        (b2I === pI && b4I === pI && b6I === pI)||
        (b2I === pI && b5I === pI && b8I === pI)||
        (b3I === pI && b4I === pI && b5I === pI)||
        (b6I === pI && b7I === pI && b8I === pI)){
            alert `Player ${pI} Wins!`};
    //  else if (gamePlay.length === 9 && !gamePlay.includes(undefined)){alert 'CAT\'s Game!'}

}