let passDisplay = [
  document.getElementById("password1"),
  document.getElementById("password2"),
  document.getElementById("password3"),
  document.getElementById("password4"),
];

// addEventListeners Variables to get them in HTML
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let btn = document.getElementById("button");

// addEventListener to activate the function genPassword() and display the passwords

btn.addEventListener("click", genPassword);

// addEventListeners to active plus and minus button to change the length of the password

plusButton.addEventListener('click', function() {	
	if(passwordLength.value < 12) {
	passwordLength.value++;
	} else {
		launchModal();
	}
});

minusButton.addEventListener('click', function() {
	if(passwordLength.value >= 3) {
		passwordLength.value--;
	} else {
		launchModal2();
	}
		});


// Input to change the length of the password
let passLength = document.getElementById('passwordLength');


passLength.addEventListener('input', genPassword)
passLength.addEventListener('input', function() {
	if(passLength.value < 3) {
		launchModal2();
	} else if(passLength.value > 12) {
		launchModal();
	} else {
		modalbg.style.display = "none";
		modalbg2.style.display = "none";
	}
})


//function to generate random passwords and display them


function genPassword() {
  let pass1 = "";
  let pass2 = "";
  let pass3 = "";
  let pass4 = "";
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = passLength.value -1;
  var randomNumber = Math.floor(Math.random() * chars.length);
  for (var i = 0; i <= passwordLength; i++) {
    {
      randomNumber = Math.floor(Math.random() * chars.length);
      pass1 += chars.substring(randomNumber, randomNumber + 1);
    }
    {
      randomNumber = Math.floor(Math.random() * chars.length);
      pass2 += chars.substring(randomNumber, randomNumber + 1);
    }
    {
      randomNumber = Math.floor(Math.random() * chars.length);
      pass3 += chars.substring(randomNumber, randomNumber + 1);
    }
    {
      randomNumber = Math.floor(Math.random() * chars.length);
      pass4 += chars.substring(randomNumber, randomNumber + 1);
    }
    passDisplay[0].textContent = pass1;
    passDisplay[1].textContent = pass2;
    passDisplay[2].textContent = pass3;
    passDisplay[3].textContent = pass4;
  }
}


// Modal to display a message when the use try to enter an unothorized number in input

const modalbg = document.querySelector(".bground"); //background
const modalbg2 = document.querySelector(".bground2"); // launch modal form

// launch modal form
function launchModal() {
	modalbg.style.display = "flex";
  }
  
  function launchModal2() {
	modalbg2.style.display = "flex";
  }
 // Get the modal
 var modal = document.getElementById("myModal");
 var modal2 = document.getElementById("myModal2");

 // Get the button that close the modal
 var thanksBtn = document.getElementById("thanksBtn");
 var thanksBtn2 = document.getElementById("thanksBtn2");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("closeMod")[0];
 var span2 = document.getElementsByClassName("closeMod2")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
   window.location.reload();
 }

 span2.onclick = function() {
	modal2.style.display = "none";
	window.location.reload();
  }
 //Close function button "fermer"
 thanksBtn.addEventListener('click', (event) => {
   event.preventDefault();
   modal.style.display = "none";
   window.location.reload(); // reload the page after closing the modal
   });

   thanksBtn2.addEventListener('click', (event) => {
	event.preventDefault();
	modal2.style.display = "none";
	window.location.reload(); // reload the page after closing the modal
	});
 
   //clicking outside of the modalbg will close it
  window.onclick = function(event) {
    if (event.target == modalbg || event.target == modalbg2) {
      modalbg.style.display = "none";
	  modalbg2.style.display = "none";
    }
  }
