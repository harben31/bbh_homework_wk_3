
var generateBtn = document.querySelector("#generate");


function writePassword() {

    //strings of possible charactor catagories
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var charactors = "!\"#$%&'()*+-./<:=;>?@[]^_`{}| ~";

    //empty string to be added to when the user selects a character set
    var mainString = "";

    var promiseString = [];

    var password = [];

    function generatePassword(){
        
        var passwordLength = prompt("how long would you\nlike your password?\n8-128 charactors",);

        //prompts uder for password length
        if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)===true){
            //if the usert inputs a value that is not aceptable this code fires
            alert("your password must \nbe at least 8 charactors\n and no more than 128.\n please try again."); 
            generatePassword();
            
        } else {
            //if the user inputs an acceptable value into the length prompt this series of code fires
            var conUpper = confirm("would you like to use\nuppercase letters?");
        } 
        
        //each of the following code blocks work the same way if the OK button is selcted then the string with its collection of charactors is added to the main string otherwise an empty string is added.
        if(conUpper){
            var mainString2 = mainString.concat(alphaUpper);
            promiseString.push(alphaUpper[0]);
            var conLower = confirm("Would you like to use\nlowercase letters");
        }else if(!conUpper){
            var conLower = confirm("Would you like to use\nlowercase letters");
            var mainString2 = mainString.concat("");
        };

        if(conLower){
            var mainString3 = mainString.concat(alphaLower);
            promiseString.push(alphaLower[0]);
            var conNumber = confirm("Would you like to use\nnumbers?");
        } else if(!conLower){
            var conNumber = confirm("Would you like to use\nnumbers?");
            var mainString3 = mainString.concat("");
        }

        if(conNumber) {
            var mainString4 = mainString.concat(numbers);
            promiseString.push(numbers[0]);
            var conCharactor = confirm("Would you like to use\nspecial charctors?");
        } else if(!conNumber){
            var conCharactor = confirm("Would you like to use\nspecial charctors?");
            var mainString4 = mainString.concat("");
        }

        if(conCharactor) {
            var mainString5 = mainString.concat(charactors);
            promiseString.push(charactors[0]);
        } else if(!conCharactor){
            var mainString5 = mainString.concat("");
        }

        var totalString = mainString.concat(mainString2, mainString3, mainString4, mainString5);

        //if none of the charactor sets are selected the user is alerted and the functin will start again
        if(totalString ===""){
            alert("You gotta pick something");
            generatePassword();
        }

        //the string with all the selected character sets is turned into an array
        var totalArray = [...totalString];

        //the password is randomly generated
        for(i=0; i < passwordLength; i++) {
           var index = Math.floor(Math.random() * totalArray.length);
            password.push(totalArray[index]);
        }

        for(i=0; i<promiseString.length; i++){
            password[i] = promiseString[i];
        }

        //the password has been generated in an array this code is turning it back into a string
        password = password.join("");
        return password
    }

    generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

//fires off function
generateBtn.addEventListener("click", writePassword, console.log("clicked"));
