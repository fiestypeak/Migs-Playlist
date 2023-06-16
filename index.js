var currentSound = null;

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  if (currentSound) {
    currentSound.pause();
  }

  switch (key) {
    case "q":
      var zild = new Audio('/sounds/zild.mp3');
      zild.play();
      currentSound = zild;
      break;

    case "w":
      var always = new Audio('/sounds/always.mp3');
      always.play();
      currentSound = always;
      break;

    case "e":
      var caldwell = new Audio('/sounds/bobby-caldwell.mp3');
      caldwell.play();
      currentSound = caldwell;
      break;

    case "r":
      var glue = new Audio('/sounds/glue.mp3');
      glue.play();
      currentSound = glue;
      break;

    case "t":
      var mac = new Audio('/sounds/mac.mp3');
      mac.play();
      currentSound = mac;
      break;

    case "y":
      var jinji = new Audio('/sounds/jinji.mp3');
      jinji.play();
      currentSound = jinji;
      break;

    case "u":
      var willis = new Audio('/sounds/willis.mp3');
      willis.play();
      currentSound = willis;
      break;

    default:
      console.log(buttonInnerHTML);
  }
}