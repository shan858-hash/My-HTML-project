const display = document.getElementById("Display");

function addNumber(number){
	display.value +=number;
}
function clearDisplay(){
	display.value ="";
}
function calculate(){
	let expression = display.value;
	let result;
	
	if(expression.includes("+")){
		let numbers = expression.split("+");
		let num1 = Number(numbers[0]);
		let num2 = Number(numbers[1]);
		
		result=num1+num2;
	}
	else if (expression.includes("-")){
		let numbers = expression.split("-");
		let num1 = Number(numbers[0]);
		let num2 = Number(numbers[1]);
		
		result=num1-num2;
		}
		else if(expression.includes("*")){
			let numbers = expression.split("*");
			let num1 = Number(numbers[0]);
		    let num2 = Number(numbers[1]);
		
		   result=num1*num2;
		}
		else if(expression.includes("/")){
			let numbers = expression.split("/");
			
			let num1 = Number(numbers[0]);
		    let num2 = Number(numbers[1]);
		    if(num2==0){
				display.value = "INVALID";
				return;
			}
			else{
				result=num1/num2;
			}
		}
		else{
			display.value = "INVALID";
			return;
		}
		display.value = result;
}