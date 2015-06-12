(function(){

	function checkFizzBuzz(integer){
		var fizzBuzzOutput = '';

		if(!isInteger(integer)){
			console.log('You have an integer has not been passed. Exiting');
			return;
		}

		if(integer%3 !== 0 && integer%5 !== 0){
			fizzBuzzOutput = integer.toString();
		} else {
			if(integer%3 === 0){
				fizzBuzzOutput += 'Fizz';
			}

			if(integer%5 === 0){
				fizzBuzzOutput += 'Buzz';
			}
		}

		return fizzBuzzOutput;
		
	}

	function isInteger(x) {
   		var y = parseInt(x, 10);
   		return !isNaN(y) && x == y && x.toString() == y.toString();
	}

	function runFizzBuzz(){
		var integerUntil = prompt('Enter a number to perform the fizzbuzz test');

		if(!isInteger(integerUntil)){
			alert('You have entered a number that is NOT an integer. Exiting');
			return;
		}

		for(var i = 1; i <= integerUntil; i++){
			outputString = checkFizzBuzz(i);
			$('body').append('<p>' + outputString + '</p>');
		}
	}

	$(document).ready(function(){
		runFizzBuzz();
	});

})(jQuery);

