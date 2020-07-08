let pCount = 0;
        let cCount = 0;

        function computerPlay() {
            const possiblePlays = ["Rock", "Paper", "Scissors"];
            return possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
        }

        function playRound(playerSelection, computerSelection) {
            computerSelection = computerPlay();

            if (playerSelection === computerSelection.toLowerCase()) {
                return `The computer picked ${computerSelection}. It's a tie. Play again!`;
            } else if (playerSelection === "rock" && computerSelection === "Paper") {
                cCount++;
                return `The computer picked ${computerSelection}. You lose.\nComputer: ${cCount} You: ${pCount}`;
            } else if (playerSelection === "rock" && computerSelection === "Scissors") {
                pCount++;
                return `The computer picked ${computerSelection}. You win.\nComputer: ${cCount} You: ${pCount}`;
            } else if (playerSelection === "paper" && computerSelection === "Rock") {
                pCount++;
                return `The computer picked ${computerSelection}. You win.\nComputer: ${cCount} You: ${pCount}`;
            } else if (playerSelection === "paper" && computerSelection === "Scissors") {
                cCount++;
                return `The computer picked ${computerSelection}. You lose.\nComputer: ${cCount} You: ${pCount}`;
            } else if (playerSelection === "scissors" && computerSelection === "Rock") {
                cCount++;
                return `The computer picked ${computerSelection}. You lose.\nComputer: ${cCount} You: ${pCount}`;
            } else if (playerSelection === "scissors" && computerSelection === "Paper") {
                pCount++;
                return `The computer picked ${computerSelection}. You win.\nComputer: ${cCount} You: ${pCount}`;
            } else return "Enter a valid option!";
        }

        const body = document.querySelector("body");
        // HEADER
        const header = document.createElement("header");
        const title = document.createElement("h1");
        title.textContent = "Rock, Paper and Scissors";
        header.appendChild(title);
        body.appendChild(header);

        // BUTTONS
        const divbtn = document.createElement("div");
        divbtn.setAttribute("class", "buttons");
        const btn_rock = document.createElement("button");
        btn_rock.setAttribute("id", "rock");
        btn_rock.textContent = "Rock";
        const btn_paper = document.createElement("button");
        btn_paper.setAttribute("id", "paper");
        btn_paper.textContent = "Paper";
        const btn_scissors = document.createElement("button");
        btn_scissors.setAttribute("id", "scissors");
        btn_scissors.textContent = "Scissors";
        divbtn.appendChild(btn_paper);
        divbtn.appendChild(btn_rock);
        divbtn.appendChild(btn_scissors);
        body.appendChild(divbtn);
        const result = document.createElement("div");
        result.setAttribute("id", "result");
        body.appendChild(result);
        const finalResult = document.createElement("div");
        finalResult.setAttribute("id", "finalResult");
        body.appendChild(finalResult);
        const replayDiv = document.createElement("div");
        replayDiv.setAttribute("class", "replay");
        const btn_replay = document.createElement("button");
        btn_replay.setAttribute("id", "replay");
        replayDiv.setAttribute("onClick", "window.location.reload();");
        btn_replay.textContent = "Replay";
        replayDiv.appendChild(btn_replay);



        // ADDING THE EVENT
        let buttonClick = document.querySelectorAll("button");
        buttonClick.forEach((button) => {
            button.addEventListener("click", (e) => {
                const computerSelection = computerPlay();
                const resultText = playRound(e.target.id, computerSelection);

                const roundResult = document.getElementById("result")
                roundResult.textContent = resultText;

                const firstToFive = document.getElementById("finalResult");
                if (pCount === 5) {
                    firstToFive.textContent =
                        `You won!\nFinal score - Computer: ${cCount} You: ${pCount}`;
                    body.appendChild(replayDiv);
                    document.getElementById("paper").disabled = true;
                    document.getElementById("rock").disabled = true;
                    document.getElementById("scissors").disabled = true;
                    
                }
                if (cCount === 5) {
                    firstToFive.textContent =
                        `You lost!\nFinal score - Computer: ${cCount} You: ${pCount}`;
                    body.appendChild(replayDiv);
                    document.getElementById("paper").disabled = true;
                    document.getElementById("rock").disabled = true;
                    document.getElementById("scissors").disabled = true;
                    
                }
            })
        })