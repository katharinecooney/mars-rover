// Rover Object Goes Here
var rover = {direction: "N", x: 0, y: 0, travelLog: []}
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
    rover.y++;
  } else if (rover.direction === "S") {
    rover.y--;
  } else if (rover.direction === "E") {
    rover.x++;
  } else if (rover.direction === "W") {
    rover.x--;
  }
}


function obeyCommand(){
  var userCommand = prompt("Enter your commands! Turn right: r, Turn left: l, Move forward: f, Quit: quit"); 
  while (userCommand !== 'quit') {
    for (var i = 0; i < userCommand.length; i++){
      if (userCommand[i] === 'r') {
        turnRight();
      } else if (userCommand[i] === 'l') {
        turnLeft();
      } else if (userCommand[i] === 'f') {

        moveForward();
      } 
      console.log("The rover is located at " + rover.x + ", " + rover.y);
      rover.travelLog.push(rover.x + ", " + rover.y);
    }
    var userCommand = prompt("what is the command?"); 
  }
}

obeyCommand();
