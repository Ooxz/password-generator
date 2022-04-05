let btn = document.getElementById('button');
btn.addEventListener('click', function() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  let result = '';
  for (let i = 0; i < input.length; i++) {
	if (input[i] === 'a') {
	  result += '4';
	} else if (input[i] === 'e') {
	  result += '3';
	} else if (input[i] === 'i') {
	  result += '1';
	} else if (input[i] === 'o') {
	  result += '0';
	} else if (input[i] === 'u') {
	  result += '|_|';
	} else {
	  result += input[i];
	}
  }
  output.innerHTML = result;
});