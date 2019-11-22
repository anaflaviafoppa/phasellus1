var displayConst = 1;

function displayFunction() {
	displayConst++;
	

	if(displayConst%2 === 0){
		document.getElementById("firstParagra").classList.add("firstColumEven");
		document.getElementById("firstParagra").classList.remove("firstParagra");

		document.getElementById("secondParagra").classList.add("secondColumEven");
		document.getElementById("secondParagra").classList.remove("secondParagra");


		document.getElementById("backgroundNavbar").classList.add("navToggle");

		document.getElementById("rightsReserved").classList.add("rightsReservedOpen");
		document.getElementById("rightsReserved").classList.remove("rightsReserved");


		

		
	} else if(displayConst%2 != 0){
		document.getElementById("firstParagra").classList.add("firstParagra");
		document.getElementById("firstParagra").classList.remove("firstColumEven");

		document.getElementById("secondParagra").classList.add("secondParagra");
		document.getElementById("secondParagra").classList.remove("secondColumEven");


		document.getElementById("backgroundNavbar").classList.remove("navToggle");

		document.getElementById("rightsReserved").classList.add("rightsReserved");
		document.getElementById("rightsReserved").classList.remove("rightsReservedOpen");


		
		
	}
}


// Set the date we're counting down to
var countDownDate = new Date("Jul 31, 2020 23:59:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

	document.getElementById("numberDays").innerHTML = days;
	document.getElementById("numberHours").innerHTML = hours;
	document.getElementById("numberMinutes").innerHTML = minutes;
	document.getElementById("numberSeconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("numberDays").innerHTML = "EXPIRED";
	document.getElementById("numberHours").innerHTML = "EXPIRED";
	document.getElementById("numberMinutes").innerHTML ="EXPIRED";
	document.getElementById("numberSeconds").innerHTML = "EXPIRED";
  }
}, 1000);





	

