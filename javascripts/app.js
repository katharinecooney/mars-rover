// Rover Object Goes Here
var rover = {direction: "N", x: 0, y: 0};
// ======================


function turnLeft(roverName){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    case "W":
      rover.direction = "S"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    case "S":
      rover.direction = "E"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    case "E":
      rover.direction = "N"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    default:
      console.log("That's not a direction!")
      break;
  }
}

function turnRight(roverName){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    case "W":
      rover.direction = "N"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    case "S":
      rover.direction = "W"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    case "E":
      rover.direction = "S"
      console.log("Rover's current direction is: " + rover.direction)
      break;
    default:
      console.log("That's not a direction!")
      break;
  }
}

