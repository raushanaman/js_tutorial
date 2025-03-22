let user_score = 0;
let computer_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const u_score = document.querySelector("#user");
const c_score = document.querySelector("#computer");
const computer_choice = () => {
    let options = ["rock", "paper", "scissors"];
    const rand_indx = Math.floor(Math.random() * 3);
    return options[rand_indx];

};
const draw = () => {
    msg.innerText = "Game was drawn. Play again!";
    msg.style.backgroundColor = "#081b31";
}
    const showWinner = (userwin) => {
        if (userwin) {
            user_score++;
            u_score.innerText = user_score;
            msg.innerText = "You win!";
            msg.style.backgroundColor = "green";
        }
        else {
            computer_score++;
            c_score.innerText = computer_score;
            msg.innerText = "You lose!";
            msg.style.backgroundColor = "red";
        }
    }
const playgame = (userchoice) => {
    const com_choice = computer_choice();
    if (userchoice === com_choice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = com_choice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = com_choice === "scissors" ? false : true;
        } else {
            userwin = com_choice === "rock" ? false : true;
        }
        showWinner(userwin);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});