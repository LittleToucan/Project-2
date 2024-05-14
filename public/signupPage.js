function checkPasswordStrength(password){
    var strengthMeter = document.getElementById('strength-bar'); 
    var strength = 0;
    var width = 0;

    //If length is at least 8 increase strength
    if(password.length >=8){
        strength += 1;
    }

    //If have lower case letters increase strength
    if(/[a-z]/.test(password)){
        strength += 1;
    }

    //If have uppercase letters increase strength
    if(/[A-Z]/.test(password)){
        strength += 1;
    }

    //If have numbers increase strength
    if(/\d/.test(password)){
        strength += 1;
    }

    //If have special characters increase strength
    if(/[^A-Za-z0-9]/.test(password)){
        strength += 1;
    }

    //Increase size of meter and change color based on strength
    if(strength < 2){
        strengthMeter.className = 'strength-bar weak';
        width ='30%';
    }
    else if(strength === 2 || strength === 3){
        strengthMeter.className = 'strength-bar medium';
        width = '60%'
    }
    else {
        strengthMeter.className = 'strength-bar strong';
        width = '100%';
    }

    strengthMeter.style.width = width;
}   


// Set the target date and time for the countdown
var targetDate = new Date('2024-12-31T23:59:59').getTime();

// Update the countdown every second
var countdown = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the element with id "timer"
  document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('timer').innerHTML = 'EXPIRED';
  }
}, 1000); // Update every second (1000 milliseconds)
