function validate(){
        //Grab the user's input and store in variables
        var userEntered = document.getElementById("user").value;
        var passEntered = document.getElementById("pass").value;

        if(userEntered.length >5 && (userEntered.indexOf(' ') < 0))
        {
                document.getElementById("usernameGroup").classList.add("has-success");
        }
        else
        {
                //Show message that there is an error with the username...
                if(userEntered.length < 6)
                        document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
                else
                        document.getElementById("usernameError").innerHTML="Username may not contain spaces.";
                document.getElementById("usernameError").classList.remove("hidden-message");
                document.getElementById("usernameError").classList.add("shown-message");
                //Turn the username items red
                document.getElementById("usernameGroup").classList.add("has-error");
        }

        if(passEntered.toLowerCase() == "password" || passEntered == userEntered || passEntered.length <6 || passEntered.length >20)
        {
                //Show message that there is an error with the password...
                if(passEntered.toLowerCase()=="password")
                        document.getElementById("passwordError").innerHTML="Password cannot be \"password\".";
                else if(passEntered == userEntered)
                        document.getElementById("passwordError").innerHTML="Password cannot be the same as Username.";
                else
                        document.getElementById("passwordError").innerHTML="Password must be 6-20 characters.";
                document.getElementById("passwordError").classList.remove("hidden-message");
                document.getElementById("passwordError").classList.add("shown-message");
                //Turn the password items red
                document.getElementById("passwordGroup").classList.add("has-error");
        }
        else
        {
                document.getElementById("passwordGroup").classList.add("has-success");

        }
}
