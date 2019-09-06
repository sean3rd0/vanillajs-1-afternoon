const gamePlay = [];



const play = (paramClickedBoxIDeg3or5or9) => {
    const spanIdPLAYER = document.getElementById('player');
    const varClickedBox = document.getElementById(paramClickedBoxIDeg3or5or9);

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
        
        const topLeft = gamePlay[0];
        const topCenter = gamePlay[1];
        const topRight = gamePlay[2];
        const middleLeft = gamePlay[3];
        const middleCenter = gamePlay[4];
        const middleRight = gamePlay[5];
        const bottomLeft = gamePlay[6];
        const bottomCenter = gamePlay[7];
        const bottomRight = gamePlay[8];
      
        if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
          alert(`${topLeft} is the winner`);
          return;
        }
        if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
          alert(`${middleLeft} is the winner`);
          return;
        }
        if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
          alert(`${bottomLeft} is the winner`);
          return;
        }
        if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
          alert(`${topLeft} is the winner`);
          return;
        }
        if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
          alert(`${topCenter} is the winner`);
          return;
        }
        if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
          alert(`${topRight} is the winner`);
          return;
        }
        if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
          alert(`${topLeft} is the winner`);
          return;
        }
        if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
          alert(`${bottomLeft} is the winner`);
          return;
        }
      
        let gamePlayFull = true;
        for (let i = 0; i <= 8; i++) {
          if (gamePlay[i] === undefined) {
            gamePlayFull = false;
          }
        }
        if (gamePlayFull === true) {
          alert("Cat's game, there is no winner");
        }
      }


        


    



// let b0 = document.getElementById(0);
// let b1 = document.getElementById(1);
// let b2 = document.getElementById(2);
// let b3 = document.getElementById(3);
// let b4 = document.getElementById(4);
// let b5 = document.getElementById(5);
// let b6 = document.getElementById(6);
// let b7 = document.getElementById(7);
// let b8 = document.getElementById(8);
//     let b0I = b0.innerText;
//     let b1I = b1.innerText;
//     let b2I = b2.innerText;
//     let b3I = b3.innerText;
//     let b4I = b4.innerText;
//     let b5I = b5.innerText;
//     let b6I = b6.innerText;
//     let b7I = b7.innerText;
//     let b8I = b8.innerText;
// let pI = spanIdPLAYER.innerText

//     if (
//         (b0I === b1I && b1I === b2I)||
//         (b0I === b3I && b3I === b6I)||
//         (b0I === b4I && b4I === b8I)||
//         (b1I === b4I && b4I === b7I)||
//         (b2I === b4I && b4I === b6I)||
//         (b2I === b5I === b8I)||
//         (b3I === b4I === b5I)||
//         (b6I === b7I === b8I)){
//             alert(`Player ${pI} Wins!`)}
//      else if (b0I !== undefined && b1I !== undefined && b2I !== undefined && b3I !== undefined && b4I !== undefined && b5I !== undefined && b6I !== undefined && b7I !== undefined && b8I !== undefined){alert ('CAT\'s Game!')}
            
    
