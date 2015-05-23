//This page contains the javascript required to make the calculator functional

//The function onInputClick appends to the text_area, the input character clicked by the user
function onInputClick(character){
	//document.getElementById("info_section").innerHTML = "nothing here";
	//if the character click input is a number then append to the expression span tag
	//otherwise an operator is appended to the result span tag
	if(document.getElementById("expression").innerHTML.length>=14){
		return;
	} else if((character >='0' &&  character <='9') | character == '.'){
		document.getElementById("expression").innerHTML += character;
	} else {
		var res = document.getElementById("result").innerHTML;
		var lastChar = res.charAt(res.length-1);

		//check if the last character in the result string is a character corresponding to the operations
		//if yes then do not enter the input into the result span tag
		if((document.getElementById("expression").innerHTML == "") & (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/')){
			return;
		} else{
			evaluateExpression();
			document.getElementById("result").innerHTML += character;
		}
	}
};

//This function evaluates the expression in both the span tags
function evaluateExpression(){
	//The complete string of the result span tag is saved in expression variable
	var expression = document.getElementById("result").innerHTML;

	if(expression == '0' | expression == ''){
		document.getElementById("result").innerHTML = document.getElementById("expression").innerHTML;
		document.getElementById("expression").innerHTML = "";			
		return;
	}

	//the result of previous calculations is contained in this variable
	var res = parseFloat(expression.substring(0, expression.length-1));
	//the operator used is contained as a character in lastChar
	var lastChar = expression.charAt(expression.length-1);

	//consists of the number entered in the expression span tag
	var exp = parseFloat(document.getElementById("expression").innerHTML);
	
	//ans variable will carry the result expression
	var ans = 0;
	if(lastChar == '+'){
		ans = res + exp;
	} else if(lastChar == '-'){
		ans = res - exp;
	} else if(lastChar == '*'){
		ans = res * exp;
	}else if(lastChar == '/'){
		ans = res / exp;
	}
	
	//set the calculator display accordingly
	document.getElementById("result").innerHTML = ans;
	document.getElementById("expression").innerHTML = "";
};

//The function clearScreen is mainly defined for the 'C' button. It just resets the two text area spans
function clearScreen(){

	document.getElementById("expression").innerHTML = "";
	document.getElementById("result").innerHTML = "0";

};

//This function is for the backspace button
function eraseCharacter(){

	var expression = document.getElementById("expression").innerHTML;
	var result = document.getElementById("result").innerHTML;

	//if the lower text-area is blank give clear text form the upper text area
	if(document.getElementById("expression").innerHTML != ""){
		//clear by making the inner html content to its previous value minus the last character
		document.getElementById("expression").innerHTML = expression.substring(0, expression.length-1);
	} else {
		document.getElementById("result").innerHTML = result.substring(0, result.length-1);
	}

};

//This function handles the final equal sign button events
function executeFinal(){

	result = document.getElementById("result").innerHTML;
	//if the inner html content of the lower text area is null
	if(document.getElementById("expression").innerHTML == ""){
		//just return the result section text without the sign in the end
		document.getElementById("expression").innerHTML = result.substring(0, result.length-1);
		document.getElementById("result").innerHTML = "0";
	}else{
		//otherwise evaluate the expression given and reverse the texts in the two text areas, so that the result looks big.
		evaluateExpression();
		document.getElementById("expression").innerHTML = document.getElementById("result").innerHTML;
		document.getElementById("result").innerHTML = "0";
	}

};
