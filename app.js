
function formSelector () {
    if (selection.value === "3" && selector_switch === false){
        outcome = document.getElementById("outcomes");
        outcome.innerHTML += `<p>Outcome 3: <input id="c" type="number"> Stake 3: <input id="stake3" type="text" disabled="" value=""> Return: <input type="text"> <br> <br> </p>`;
        selector_switch = true;
    }
    if (selection.value === "2" && selector_switch === true){
        outcome.removeChild(outcome.lastElementChild);
        selector_switch = false;
    }
   

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

selector_switch = false;