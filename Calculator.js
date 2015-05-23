//This page contains the javascript required to make the calculator functional

//The function onInputClick appends to the text_area, the input character clicked by the user
function onInputClick(character){
	//document.getElementById("info_section").innerHTML = "nothing here";
	//if the character click input is a number then append to the expression span tag
	//otherwise an operator is appended to the result span tag
	if(character >='0' &&  character <='9'){
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

	if(expression === ''){
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
