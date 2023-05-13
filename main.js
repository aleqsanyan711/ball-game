
//const ball = new Ball({
 // color: 'green',
  //speed: 20,
  //controls: {
    //up: 'ArrowUp',
    //down: 'ArrowDown',
    //left: 'ArrowLeft',
    //right:'ArrowRight',
  //}
//});

//const ball2 = new Ball ({
  //color: 'blue',
  //speed: 30,
  //controls: {
   // left: 'KeyA',
    //right: 'KeyD',
    //up: 'KeyW',
    //down:'KeyS',
  //}
//})

//console.log(ball);



const palyer1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click',function() {
  const player1Name = player1Input.value;
  const player2Name = player2Input.value;

  if (player1Name && player2Name) {
    start();
  } else {
    alert('Please feel inputs');
  }
});