//uc3 option no play ,ladder,snake
console.log("Welcom to snake and Ladder !");
let firstPlayerPosition = 0;
console.log("single player's position is at:"+firstPlayerPosition);

//roll the die
let first_player_roll=Math.floor(Math.random()*6)+1;
firstPlayerPosition=first_player_roll+firstPlayerPosition;
console.log("After rolls the die ,first player at position:"+firstPlayerPosition);

//check for noplay,ladder and snake

let noplay=0,ladder=1,snake=2;
let checkPlay=Math.floor(math.random()*3);
switch(checkPlay){
    case noplay:
        break;
        case ladder:
            firstPlayerPosition=firstPlayerPosition - first_player_roll;
            break;
            case snake:
                firstPlayerPosition=firstPlayerPosition - first_player_roll;
                if(firstPlayerPosition<0)
                firstPlayerPosition=0;
                break;

}
console.log("player at position:"+firstPlayerPosition);
