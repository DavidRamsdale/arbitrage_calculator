
function formSelector () {
    // if (selection.value === "2"){
    //     document.getElementById("input_outcome").innerHTML = `Outcome 1: <input id="a" type="number"> Stake 1: <input id="stake1" type="text" disabled value=""> Return: <input type="text"> <br>
    //     Outcome 2: <input id="b" type="number"> Stake 2: <input id="stake2" type="text" disabled value=""> Return: <input type="text"> <br><br> <button id= "button" class= "btn btn-primary">Calculate</button>`;
    //     }

    // if (selection.value === "3"){
    // document.getElementById("input_outcome").innerHTML = `Outcome 1: <input id="a" type="number"> Stake 1: <input id="stake1" type="text" disabled value=""> Return: <input type="text"> <br>
    // Outcome 2: <input id="b" type="number"> Stake 2: <input id="stake2" type="text" disabled value=""> Return: <input type="text"> <br>
    // Outcome 3: <input id="c" type="number"> Stake 3: <input id="stake3" type="text" disabled value=""> Return: <input type="text"> <br><br> <button id= "button" class= "btn btn-primary">Calculate</button>`
    // }

}

function calculate (a,b,c) {
    let combine_margin = (1/a.value) + (1/b.value) + (1/c.value);
    let total_stake = document.getElementById("total_stake").value;
        if ( combine_margin <= 1){
            document.getElementById("stake1").value = (total_stake * (1/a.value))/combine_margin;
            document.getElementById("stake2").value = (total_stake * (1/b.value))/combine_margin;
            document.getElementById("stake3").value = (total_stake * (1/c.value))/combine_margin;
            document.getElementById("%profit").value = (1 - combine_margin)*100;
            document.getElementById("profit").value = (1 - combine_margin)*total_stake;
        }

        else {
            console.log("you dont");
        }
    }
    // if (selection.value === "2"){
    //     if ((1/a.value) + (1/b.value) <= 1){
    //         console.log("You have an arb");
    //     }

    //     else {
    //         console.log("you dont");
    //     }
    // }
    
    // if (selection.value === "3"){
    //     if ((1/a.value) + (1/b.value) +(1/c.value) <= 1){
    //         console.log("You have an arb");
    //     }

    //     else {
    //         console.log("you dont");
    //     }
    // }

    // if (selection.value === "4"){
    //     if ((1/a.value) + (1/b.value) + (1/c.value) + (1/d.value)  <= 1){
    //         console.log("You have an arb");
    //     }

    //     else {
    //         console.log("you dont");
    //     }
    // }

let button = document.getElementById("button");
button.addEventListener("click", () => calculate(a,b,c));

let selection = document.getElementById("outcome_option");
selection.addEventListener("click", formSelector)