$(document).ready(function(){
    for(var counter = 1; counter <=100; counter++){
    	if (counter % 3 === 0 && counter % 5 === 0) {
			$("#main").append("<p>FizzBuzz</p>");
		} 
		else if (counter % 3 === 0) {
			$("#main").append("<p>Fizz</p>");
		} 
		else if (counter % 5 === 0) {
			$("#main").append("<p>Buzz</p>");
		}
		else {
	    	$("#main").append("<p>" + counter + "</p>");
		}
}
});