function formSelector () {
    if (selection.value === "3" && selector_switch === false){
        outcome = document.getElementById("outcomes");
        outcome.innerHTML += `<p>Outcome 3: <input class="number" type="number"> Stake 3: <input id="stake3" type="text" disabled="" value=""> Return: <input type="text" disabled id="return3"> <br> </p>`;
        selector_switch = true;

        header = document.getElementById("header");
        header.style.background = 'lightseagreen';
        header.innerHTML = `<h1>Arb Calculator</h1>`; 
    }
    if (selection.value === "2" && selector_switch === true){
        outcome.removeChild(outcome.lastElementChild);
        selector_switch = false;

        header = document.getElementById("header");
        header.style.background = 'lightseagreen';
        header.innerHTML = `<h1>Arb Calculator</h1>`; 
    }
}

function isDefined() {

}

function calculate (numbers) {
    let combine_margin = 0;
    let total_stake = document.getElementById("total_stake").value;
    numbers.forEach((item, index) => {
        combine_margin += (1/(item.value));
    });
    if (combine_margin <= 1) {
        numbers.forEach((item, index) => {

            let stake = document.getElementById(`stake${index + 1}`).value = (total_stake * (1/(item.value))/combine_margin);
            document.getElementById(`return${index + 1}`).value = stake* item.value;
        });
        profit = document.getElementById("profit").value = (total_stake/combine_margin) - total_stake;
        document.getElementById("%profit").value = ((parseFloat(total_stake) + parseFloat(profit))/parseFloat(total_stake) -1)*100;
        console.log(profit);
        console.log(total_stake);
        
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