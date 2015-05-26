
/*This file contains the JavaScript necessary to control the drop down lists in the know_section*/

//definition of onclick which accepts the lists class index
var onListClick = function (index){

	//get the complete list of elements by class name lists
	var lists = document.getElementsByClassName("lists");
	//get the number of elements with class name lists
	var length = lists.length;

	//in this loop close all the lists
	for (var i = length-1; i >= 0; i--) {
			//set the box shadow to none
			lists[i].setAttribute('style', 'box-shadow: none;');
			//set the height back to the former 2%
			lists[i].setAttribute('style', 'height: 2%;');
			//make the text in the inner div invisible
			document.getElementsByClassName("data")[i].setAttribute('style', 'display: none;');
	};

	//set the clicked element of lists to height of 100%
	lists[index].setAttribute('style', 'height: 100%;');

	//set the data in the clicked element to make it visible
	document.getElementsByClassName("data")[index].setAttribute('style', 'display: block;');

	//make an inset box shadow for additional effect
	lists[index].setAttribute('style', 'box-shadow: inset 0px 0px 7px #574119;');
};