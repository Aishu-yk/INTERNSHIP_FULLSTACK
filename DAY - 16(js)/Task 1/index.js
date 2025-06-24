//practice file

var noOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<noOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    var val= this.innerHTML;
    alert("You Clicked " + val);
    makeSound(val);
    buttonAnimation(val);

  });
}
document.addEventListener("keypress", function(e) {
  makeSound(e.key);
  buttonAnimation(e.key);jklkoi
});

function makeSound(key) {
  switch (key) {
    case "w":
      var t1 = new Audio("./sounds/tom-1.mp3")
      t1.play();
      break;
    case "a":
      var t2 = new Audio("./sounds/tom-2.mp3")
      t2.play();
      break;
    case "s":
      var t3 = new Audio("./sounds/tom-3.mp3")
      t3.play();
      break;
    case "d":
      var t4 = new Audio("./sounds/tom-4.mp3")
      t4.play();
      break;
    case "j":
      var j = new Audio("./sounds/snare.mp3")
      j.play();
      break;
    case "k":
      var k = new Audio("./sounds/crash.mp3")
      k.play();
      break;
    case "l":
      var l = new Audio("./sounds/kick-bass.mp3")
      l.play();
      break;

  }

}

function buttonAnimation(currentkey) {
  var actionbutton = document.querySelector("." +currentkey);
  actionbutton.classList.add("pressed");
  setTimeout(function () {
    actionbutton.classList.remove("pressed");
  }, 100);
}