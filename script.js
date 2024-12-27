// Step 1: Create the UI
    // Design buttons for digits (0-9), operations (+, -, *, /), '=', and 'C' (clear).
    // Create a display area to show the input and result.

// Step 2: Implement 4 basic functions
    // add(a, b), subtract(a, b), multiply(a, b), divide(a, b)

    const add = (a,b) => Math.round(a+b * 100) / 100;
    const subtract = (a,b) => Math.round(a-b * 100) / 100;
    const multiply = (a,b) => Math.round(a*b * 100) / 100;
    const divide = (a,b) => Math.round(a/b * 100) / 100;

// Step 3: Implement a higher-order function
    // operate(operator, a, b): executes the correct operation based on the operator.

    function operate(operator,a,b){

        a = +a;
        b = +b;

        if(operator == "+") return add(a,b)
        else if(operator == "-") return subtract(a,b)
        else if(operator == "*") return multiply(a,b)
        else if(operator == "/") return divide(a,b)
    }


// Step 4: Set up state variables
    // operand1: stores the first number.
    // operand2: stores the second number.
    // operator: stores the selected operation.

    let operand1 = "";
    let operand2 = "";
    let operator = "";

// Step 5: Add event listeners to buttons
    // Numbers:
        // Append clicked number to operand1 or operand2 based on the context.
        
        const screen = document.querySelector(".screen")
        screen.textContent = "0"
        const numbers = document.querySelectorAll(".number")
        for (let number of numbers){
        number.addEventListener("click", ()=>{
            if(operator == "") {
                screen.innerHTML = "";
                operand1 += number.id;
                screen.textContent = operand1;

                deleteKey.addEventListener("click", ()=>{
                    if(operator == ""){
                        operand1 = "";
                        screen.innerHTML = "0";
                    }
                })

                decimal.addEventListener("click", ()=>{
                    if(operator == "" && !operand1.includes(".")){
                        operand1 += "."
                        screen.textContent = operand1;
                    }
                })

            }
            else {
                operand2 += number.id;
                screen.textContent = operand2;

                deleteKey.addEventListener("click", ()=>{
                    operand2 = "";
                    screen.innerHTML = operand2;
                })

                decimal.addEventListener("click", ()=>{
                    if(!operand2.includes(".")){
                        operand2 += "."
                        screen.textContent = operand2;
                    }
                })
                
            }

            console.table(`operand1 = ${operand1}`)
            console.log(`operand2 = ${operand2}`)
        })
    }
    
        // Operators:
        // Save the clicked operator in the operator variable.
        // Transition to capturing operand2.

    const operators = document.querySelectorAll(".operator")
    for (let operatorButton of operators){
        
        operatorButton.addEventListener("click",()=>{
            screen.innerHTML = "";
            operator = operatorButton.id;
        })
    }

    // '=' button:
        // Call operate() with operand1, operator, and operand2.
        // Display the result in the UI.
        // Reset or update state for the next calculation.

    const equalButton = document.querySelector(".function-operator")
    equalButton.addEventListener("click", ()=>{
        screen.innerHTML = "";
        operate(operator, operand1, operand2)
        screen.textContent = operate(operator, operand1, operand2);
    })

    // 'AC' button:
        // Clear the display and reset all state variables.

        const allClear = document.querySelector(".all-clear")
        allClear.addEventListener("click", ()=>{
            operand1 = "";
            operand2 = "";
            operator = "";
            screen.innerHTML = "0"
        })

    // 'DEL' button:
        // clear the display and reset that particular variable.

        const deleteKey = document.querySelector(".delete-key");

    // 'Decimal' button:
        // if there is no decimal in operands, add decimals.
        
        const decimal = document.querySelector(".decimal")