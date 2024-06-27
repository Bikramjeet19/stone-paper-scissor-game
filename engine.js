let userscore = 0;
let compscore = 0;

const option = document.querySelectorAll(".choice")
const uscore = document.querySelector("#user-score")
const comscore = document.querySelector("#computer-score")
const movetxt = document.querySelector("#inter")

const computergenerate = () => {
    const choose = ["Stone", "Paper", "Scissor"]
    const random = Math.floor(Math.random() * 3)
    return choose[random]
}

const winner = (userwin, userchoice, computerchoice) => {
    if (userwin) {
        userscore++;
        uscore.innerHTML = userscore
        movetxt.innerHTML = `Congratulations! You Win. Your ${userchoice} beats ${computerchoice}`
        movetxt.style.backgroundColor = "green"
    }
    else {
        compscore++;
        comscore.innerHTML = compscore;
        movetxt.innerHTML = `You lose! Computer's ${computerchoice} beats Your ${userchoice}`
        movetxt.style.backgroundColor = "red"
        movetxt.style.border = "none"
    }
}

const gameplay = (userchoice) => {
    const computerchoice = computergenerate()

    if (userchoice === computerchoice) {
        movetxt.innerHTML = "It's a tie"
        movetxt.style.backgroundColor = "#06D6A0"
        movetxt.style.border = "none"
    }
    else {
        let userwin = true

        if (userchoice === "Stone") {
            userwin = computerchoice === "Paper" ? false : true
        }
        else if (userchoice === "Paper") {
            userwin = computerchoice === "Scissor" ? false : true
        }
        else {
            userwin = computerchoice === "Stone" ? false : true
        }
        winner(userwin, userchoice, computerchoice);
    }
};
option.forEach((option) => {
    option.addEventListener("click", () => {
        const userchoice = option.getAttribute("id");
        gameplay(userchoice);
    });
})
