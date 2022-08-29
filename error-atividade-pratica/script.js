function validacaoErro(array, num){
    try {
        if (!array && !num){
            throw new ReferenceError(["Defina os parâmetros!"])
        }
    
        if(typeof array !== "object"){
            throw new TypeError(["Seu array não é um objeto!"])
        }
    
        if(typeof num !== "number"){
            throw new TypeError(["Seu número não é um numero!"])
        }
    
        if(array.length != num){
            throw new RangeError(["O tamanho do array não corresponder ao número enviado!"])
        }
    
        return array;
        
    } catch (e) {
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else if (e instanceof TypeError) {
            console.log('TypeError')
            console.log(e.stack)		
		} else {
            console.log('Outro tipo de erro!');
			console.log(e.stack);
        }
    }
}

// REFERENCE ERROR
let refError = console.log(validacaoErro())
refError;

// TYPE ERROR - OBJECT
let arr = "hey"
let objArr = console.log(validacaoErro(arr, 5))
objArr;

// TYPE ERROR - NUMBER
let arr_2 = [1, 2, 3, 4]
let numArr = console.log(validacaoErro(arr_2, "hey"))
numArr;

// RANGE ERROR
let arr_3 = [1, 2, 3, 4]
let rangeError = console.log(validacaoErro(arr_3, 1))
rangeError;