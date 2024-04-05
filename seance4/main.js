// je localise mon bouton effacer
const clearButton = document.querySelector('[data-all-clear]')
// je localise l'affichage
const output = document.querySelector('[data-output]')
// je localise mes boutons 0-9-. ALL = appels a plusieurs éléments.
const numberButtons = document.querySelectorAll('[data-number]')
// je localise les boutons d'opération
const operationButtons = document.querySelectorAll('[data-operation]')
// je localise le bouton =
const equalsButton = document.querySelector('[data-equals]')

console.info(clearButton)
console.log(numberButtons)

clearButton.addEventListener('click', ()=> {
    console.info('effacer')
    clear();
})

function clear() {
    output.innerText=''
    OperationCalcul = undefined
}


numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        appendNumber(button.innerText); 
    })
})
function appendNumber(number) {
    console.info(number)
    output.innerText = output.innerText + number
}

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})

var OperationCalcul = undefined
function chooseOperation(operation) {
    if( output.innerText.includes('x') || output.innerText.includes('+') || output.innerText.includes('÷') || output.innerText.includes('-')  ) calcul()
    OperationCalcul = operation
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}


equalsButton.addEventListener('click', button => {
    calcul()
})
function calcul() {
    // si rien de saisie, on arrete la le caclul
    if(output.innerText === '') return 
    // ici on va découper la zone 'output' en 2 valeur  à partir du signe d'opération
    let split = output.innerHTML.split(OperationCalcul)
    
     // recupération des 2 valeurs
     let nombre1 = parseFloat(split[0])
     let nombre2 = parseFloat(split[1])
     
     // verification qu'il y a bien eu des valeurs de saisies
     if (isNaN(nombre1) || isNaN(nombre2)) return
     
     console.log(nombre1)
     console.log(nombre2)
     console.log(OperationCalcul)

     let moncalcul;
    
     switch (OperationCalcul) {
         case '+':
             moncalcul =  nombre1 + nombre2 
             break
         case '-':
             moncalcul =  nombre1 - nombre2 
             break
         case '÷':
             moncalcul =  nombre1 / nombre2 
             break
         case 'x':
             moncalcul =  nombre1 * nombre2 
             break
         default:
             return
     }
     console.info(moncalcul)

     output.innerText = moncalcul
     OperationCalcul = undefined
}