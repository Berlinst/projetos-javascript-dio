function substituiPares(array){

    for(let i = 0; i < array.length; i++){    
        if(array[i] === 0){
            console.log("Vocé já é zero!")
        } else if(array[i] % 2 == 0) {
            array[i] = 0;
            console.log(array)
        } 
    }

    return array;
}

var hey  = [1, 2, 3, 4, 8, 9, 10, 22, 30, 37, 40, 45, 50]

console.log(substituiPares(hey))