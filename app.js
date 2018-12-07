function formSelector () {
    if (selection.value === "3" && selector_switch === false){
        outcome = document.getElementById("outcomes");
        outcome.innerHTML += `<p>Outcome 3: <input class="number" type="number"> Stake 3: <input id="stake3" type="text" disabled="" value=""> Return: <input type="text"> <br> <br> </p>`;
        selector_switch = true;
    }
    if (selection.value === "2" && selector_switch === true){
        outcome.removeChild(outcome.lastElementChild);
        selector_switch = false;
    }
}

function isDefined() {

}

function calculate (numbers) {
    let combine_margin = 0;
    let total_stake = document.getElementById("total_stake").value;
    console.log(numbers);
    numbers.forEach((item, index) => {
        console.log(item);
        combine_margin += (1/parseInt(item.value));
    });
    console.log(combine_margin);
    if (combine_margin <= 1) {
        numbers.forEach((item, index) => {
            let stake = document.getElementById(`stake${index + 1}`).value = (total_stake * (1/parseInt(item.value)))/combine_margin;
        });
        document.getElementById("%profit").value = (1 - combine_margin)*100;
        document.getElementById("profit").value = (1 - combine_margin)*total_stake;
        header = document.getElementById("header");
        header.style.background = "Green";
        header.innerHTML = `<h1>Arb Calculator</h1><br><h2>Arb Exists </h2>`; 

    } else {
        header = document.getElementById("header");
        header.style.background = "red";
        header.innerHTML = `<h1>Arb Calculator</h1><br><h2> No Arb Exists </h2>`; 
    }

}
    

let button = document.getElementById("button");
button.addEventListener("click", () => {
    let numbers = document.querySelectorAll(".number");
    numbers = Array.from(numbers);
    calculate(numbers);
});

let selection = document.getElementById("outcome_option");
selection.addEventListener("click", formSelector)

selector_switch = false;