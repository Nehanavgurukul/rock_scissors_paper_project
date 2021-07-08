console.log("*********WELCOME TO THE GAME ************")
const readline = require("readline-sync");
const player_name = readline.question("enter the ur name-")
console.log("hi " + player_name + ", your most welcome in this game.")
const array = ["rock", "scissors", "paper"]

function rock_scissors_paper_game(){
    const computor_choise = array[Math.floor(Math.random() * array.length)]
    const user = readline.question("enter the ur choise-")
    if(computor_choise == "scissors" && user == "paper" || computor_choise == "paper" && user == "scissors"){
        if (computor_choise == "paper"){
            console.log(`${"computor won "} ! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
            const want_to_play = readline.question("Enter the choise if u want to play again then enter yes and not then enter no --")
            if(want_to_play == "yes"){
                rock_scissors_paper_game()
            }
            else if(want_to_play == "no"){
                console.log("bye bye thanks for visiting...")
            }
        }else{
            console.log(`${player_name} won! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
            const want_to_play = readline.question("Enter the choise if u want to play again then enter yes and not then enter no --")
            if(want_to_play == "yes"){
                rock_scissors_paper_game()
            }
            else if(want_to_play == "no"){
                console.log("bye bye thanks for visiting...")
            }
        }
    }
    else if(computor_choise == "scissors" && user == "rock" || computor_choise == "rock" && user == "scissors"){
        if (computor_choise == "rock"){
            console.log(`${"computor won "} ! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
            const want_to_play = readline.question("Enter the choise if u want to play again then enter yes and not then enter no --")
            if(want_to_play == "yes"){
                rock_scissors_paper_game()
            }
            else if(want_to_play == "no"){
                console.log("bye bye thanks for visiting...")
            }
        }else{
            console.log(`${player_name} won! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
            const want_to_play = readline.question("Enter the choise if u want to play again then enter yes and not then enter no --")
            if(want_to_play == "yes"){
                rock_scissors_paper_game()
            }
            else if(want_to_play == "no"){
                console.log("bye bye thanks for visiting...")
            }
        }
    }
    else if(computor_choise == "rock" && user == "paper" || computor_choise == "paper" && user == "rock"){
        if (computor_choise == "paper"){
            console.log(`${"computor won "} ! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
            const want_to_play = readline.question("Enter the choise if u want to play again then enter yes and not then enter no --")
            if(want_to_play == "yes"){
                rock_scissors_paper_game()
            }
            else if(want_to_play == "no"){
                console.log("bye bye thanks for visiting...")
            }
        }else{
            console.log(`${player_name} won! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
            const want_to_play = readline.question("Enter the choise if u want to play again then enter yes and not then enter no --")
            if(want_to_play == "yes"){
                rock_scissors_paper_game()
            }
            else if(want_to_play == "no"){
                console.log("bye bye thanks for visiting...")
            }
        }
    }else if(computor_choise == user){
        console.log(`Match Draw ! bcoz computor choosen ${computor_choise} and you choosen ${user}`)
        console.log("you have to choose again .")
        rock_scissors_paper_game()
    }
}
rock_scissors_paper_game()