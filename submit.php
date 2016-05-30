<?php 
// if the url field is empty 
if(isset($_POST['url']) && $_POST['url'] == ''){
	if($_POST["message"] == "" || $_POST["name"] == ""){
		echo "<p>Please press the back button and fill in all fields</p>";
	} else {

     // put your email address here     
		$youremail = 'AmeriSHOWZ@gmail.com';

     // prepare a "pretty" version of the message
		$body = "This is the form that was just submitted:     
		Name:  $_POST[name]
		E-Mail: $_POST[email]
		Message: $_POST[message]"; 

     // Use the submitters email if they supplied one     
     // (and it isn't trying to hack your form).     
     // Otherwise send from your email address.     

		if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
			$headers = "From: $_POST[email]";     
		} else {
			$headers = "From: $youremail"; 
		}

     // finally, send the message     
		mail($youremail, 'Contact Form', $body, $headers ); } // otherwise, let the spammer think that they got their message through 
	}
?>

<h1>Thanks</h1>

We'll get back to you as soon as possible