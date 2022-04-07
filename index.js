let btn = document.getElementById('button');



function genPassword() {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var passwordLength = 12;
	var password = "";
	for (var i = 0; i <= passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber +1);
		document.querySelector('.password').innerHTML = password;
		document.querySelector('.password1').innerHTML = password;
		document.querySelector('.password2').innerHTML = password;
		document.querySelector('.password3').innerHTML = password;
		console.log(password)
	  }
	}
	btn.addEventListener('click', genPassword);
