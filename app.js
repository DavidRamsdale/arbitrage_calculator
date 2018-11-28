let selector = document.querySelector("outcome_option").addEventListener("change", formSelector);
// selector.addEventListener("change", formSelector);


function formSelector () {
    if (selector.value === 3){
    document.getElementById("input_outcome").innerHTML = "Hello World";
    }

    if (selector.value === 4){
        document.getElementById("input_outcome").innerHTML = "Hello World";
        }
}

function calculate () {
    
}