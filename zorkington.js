//hash of rooms and actions
let rooms = {
    firstRoom: firstRoomText = "\n182 Main St.\n" 
    + "You are standing on Main Street between Church and South Winooski.\n"
    + "There is a door here.\n"
    + "A keypad sits on the handle.\n"
    + "On the door is a handwritten sign.",
      firstSign: firstRoomSign =  "\nThe sign says Welcome to Burlington Code Academy!\n" 
      + "Come on up to the third floor.\n"
      + "If the door is locked,\n"
      + "use the code 12345.",
      takeSign: takeSignAction = "That would be selfish. How will other students find their way?",
        blockedDoor: blockedDoorAction = "\nThe door is locked. There is a keypad on the door handle.",      
}

//initial start output 
console.log(rooms.firstRoom);

//mian program
let userCommands = process.argv.slice(2);
  userCommands.forEach(userMove => {
    return console.log(userMove);
  });

    const readline = require('readline');
    const terminal = readline.createInterface(process.stdin, process.stdout);

      terminal.setPrompt('>_');
      terminal.prompt();                                                      //call prompt on terminal 
      terminal.on('line', function (userMove) {

    let userCommand = (userMove);                                    
//if-else-if statement to determine if move is correct
      if (userCommand == "read sign" ) { 
        console.log(firstRoomSign); 
          } 
          else if (userCommand == "take sign") {
                   console.log(takeSignAction); 
              }
              else if (userCommand == "open door") {
                      console.log(blockedDoorAction); 
                  }
                  else if (userCommand === "read sign" || "take sign" || "open door") {
                        console.log("Sorry, I don'y know how to " + userCommand + ".");
                      }
                      else 
                        terminal.setPrompt('>_');
                        terminal.prompt('>_');
                           });
     


