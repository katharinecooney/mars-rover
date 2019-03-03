// Rover Object Goes Here
var rover = {direction: "N", x: 0, y: 0};
// ======================


function turnLeft(roverName){
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
    default:
      console.log("That's not a direction!")
      break;
  }
}

function turnRight(roverName){
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "W":
      rover.direction = "N"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "E":
      rover.direction = "S"
      break;
    default:
      console.log("That's not a direction!")
      break;
  }
}

function moveForward(roverName){
  if (rover.direction === "N") {
    rover.y += 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "W") {
    rover.y -= 1;
  }
}

function obeyCommand(){
  var userCommand = prompt("Enter your command!");
  for(var i = 0; i < userCommand.length; i++){
    if(userCommand[i] === "r") {
      turnRight();
    } else if (userCommand[i] === "l") {
      turnLeft();
    } else if (userCommand[i] === "f") {
      moveForward();
    } else {
      console.log("I can't do that!");
    }
  }
  console.log("The rover is located at " + rover.x + ", " + rover.y);
}

obeyCommand();