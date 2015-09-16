(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	var $userName = $('#user');
	var $password = $('#password');
	var $signIn = $('button');
	var $form = $('form');
	var $error1 = $('#error1');
	var $error2 = $('#error2');
	var users = [{ email: 'aaron@theironyard.com', pword: 'password123' }, { email: 'admin@google.com', pword: 'pandas' }, { email: 'josiah_g_allen@yahoo.com', pword: ' honeycrisp' }];
	var logSubmit = [];

	$form.submit(function (e) {
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
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map