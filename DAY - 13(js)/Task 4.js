/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/


function main(){
   //your code here
   RightUpLeftUp();
   RightUpLeftUp();
   LastLine();
}
function RightUpLeftUp(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move(); 
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}

function LastLine(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}