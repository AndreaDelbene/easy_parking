function checkPassword(){
	var firstName = document.getElementById("signupFirstName").value;
	var lastName = document.getElementById("signupLastName").value;
	var email = document.getElementById("signupEmail").value;
	var password = document.getElementById("signupPassword").value;
	var repeatPW = document.getElementById("signupRepeatPW").value;

	if( password.localeCompare(repeatPW) === 0) {
		var msg = "First Name: " + firstName + "\n";
		msg += "Last Name: " + lastName + "\n";
		msg += "Email: " + email + "\n";

		alert(msg);
		return true;
	}

	alert("Repeat sign up");
	return false;
}