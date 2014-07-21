$(document).ready(function(){
	
	//add to html page
	var addInfo = function(item){
		$("#main").append( "<p>" + item + "</p>");
	};
	//fizzbuzz game
	var fizzbuzzSubmit = function(enterNumber) {
		if (enterNumber >= 1 && enterNumber <= 100) {
    		for(var counter = 1; counter <= enterNumber; counter++) {
    			if (counter % 3 === 0 && counter % 5 === 0) {
					addInfo("<p>FizzBuzz</p>");
				}  else if (counter % 3 === 0) {
					addInfo("<p>Fizz</p>");
				}  else if (counter % 5 === 0) {
					addInfo("<p>Buzz</p>");
				}  else {
	    			addInfo("<p>" + counter + "</p>");
				}
			}
		}else{
			alert("Please input a number between 1 and 100.")
		};
	};
	//on click action
	$("#submit").on("click", function(event) {
		event.preventDefault();
		var enterNumber = +$("#enterNumber").val();
	//reset the list
	$("main").empty();
		fizzbuzzSubmit(enterNumber);
	$('#enterNumber').val('');
		enterNumber = '';
	});
});