let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let score = document.querySelector("p");

let turnO = true; // Who is playing
let count =0;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

// Logic for New Game button
const NewGame = () =>{
    turnO = true;
    enableBoxes();
    score.classList.add("hide");

}

// To write X or O
boxes.forEach( (box)=>{
    box.addEventListener("click", ()=>{
       if(turnO){ // Player O
        box.innerText = "O";
        turnO = false;
       }
       else{ // Player X
        box.innerText = "X";
        turnO = true;
       }
    box.disabled = true;
    count++;

    checkWinner();
    })
})

// To disable boxes or buttons after getting winner
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// To enable boxes or buttons after getting winner
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// To check for the winner
const checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        // If three boxes aew filled then only check
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            score.innerText = `Winner is ${pos1Val}`;
            score.classList.remove("hide");
            disableBoxes();
        }
        // If count is 9 and no three boxes are matching (Draw)
        else if(count == "9" && pos1Val != pos2Val && pos2Val !== pos3Val){
            score.innerText = `Draw`;
            score.classList.remove("hide");
        }
    }
}
}

newBtn.addEventListener("click", NewGame);