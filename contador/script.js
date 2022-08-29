var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber >= 10){
        document.getElementById("plusButton").disabled = true;
        document.getElementById("plusButton").style.border = "gray"
        document.getElementById("plusButton").style.color = "gray"
        var notAcceptWrapper = document.getElementById("notAccept");
        var notAccept = "O programa não aceita número maior que 10!";
        notAcceptWrapper.innerHTML = notAccept;  
    } 

    if (currentNumber > -1) {
        currentNumberWrapper.style.color = "black"
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber != 10) {
        document.getElementById("plusButton").disabled = false;
        var notAcceptWrapper = document.getElementById("notAccept");
        var notAccept = " ";
        notAcceptWrapper.innerHTML = notAccept; 
        document.getElementById("plusButton").style.border = "2px solid lightcoral"
        document.getElementById("plusButton").style.color = "lightcoral"
    }

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red"
    }

}