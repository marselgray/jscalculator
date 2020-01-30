
// functions
function getHistory(){
	return document.getElementById('history-value').innerText;
}

function printHistory( num ) {
	document.getElementById('history-value').innerText = num;
}

function getOutput( num ) {
	document.getElementById('output-value').innerText = num;
}

function printOutput( num ) {
	if( num == '' ) {
		document.getElementById('output-value').innerText = num;
	} else {
		document.getElementById('output-value').innerText = getFormattedNumber(num);
	}

}

/*
The toLocaleString() method returns a string with a 
language-sensitive representation of this number.
Read More at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
*/

function getFormattedNumber( num ) {
	var n = Number( num );
	var value = n.toLocaleString( 'en' );
	return value;
}


function reverseNumberFormat( num ) {
	return Number( num.replace(/,/g,''));
}



// opreations
var operator = document.getElementsByClassName('operator');

for (let i = 0; i < operator.length; i++){
	operator[i].addEventListener('click', function(){
		console.log(`the operator click:${this.id}`)
	})
}
