//uc2 roll the Dice
console.log("Welcom to snake and Ladder !");
let firstPlayerPosition = 0;
console.log("single player's position is at:"+firstPlayerPosition);

//roll the die
let first_player_roll=Math.floor(Math.random()*6)+1;
firstPlayerPosition=first_player_roll+firstPlayerPosition;
console.log("After rolls the die ,first player at position:"+firstPlayerPosition);