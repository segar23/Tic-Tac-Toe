let restart = document.querySelector("#restart_game")
let squares = document.querySelectorAll("td")
let previous = "O"

function clearBoard(){
    for (let i = 0; i < squares.length; i++){
        squares[i].textContent = "";
    }
}

restart.addEventListener("click", clearBoard);

function changeMarker() {
    if(previous === "O") {
        this.textContent = "X"
        previous = "X"
    } else {
        this.textContent = "O"
        previous = "O"
    }
}

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeMarker)
}