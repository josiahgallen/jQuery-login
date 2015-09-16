'use strict';

$(document).ready(function() {
	var $userName = $('#user');
	var $password = $('#password');
	var $signIn = $('button');
	var $form = $('form');
	var $error1 = $('#error1');
	var $error2 = $('#error2');
	var users = [
		{email: 'aaron@theironyard.com', pword: 'password123'},
		{email: 'admin@google.com', pword: 'pandas'},
		{email: 'josiah_g_allen@yahoo.com', pword: ' honeycrisp'}
		];
	var logSubmit = [];

	$form.submit(function(e) {
		e.preventDefault();
		var pass = false;
		if (!$userName.val() || $userName.val().indexOf('@') === -1) {
			//console.log('blanks');
			$error1.text('Please enter a valid email address');
			$error1.show();
			pass = true;
		} else if (!$password.val()) {
			$error1.text('Please enter a password before login');
			$error1.show();
			pass = true;
		} else {
			$error1.hide();
		}


		if (!pass) {
			logSubmit = [];
			logSubmit.push($userName.val());
			logSubmit.push($password.val());
			pass = false;
			console.log(logSubmit);
			for (var i = 0; i < users.length; i++) {
			if (logSubmit[0] !== users[i].email) {
				$error1.text('Your username does not match our records');
				$error1.show();
				pass = true;
			} else if (logSubmit[0] !== users[i].email && logSubmit[1] !== users[i].pword) {
				$error1.text('Your password does not match');
				$error1.show();
				pass = true;
			} else {
				$error1.hide();
			}
		}
		}

	})

});