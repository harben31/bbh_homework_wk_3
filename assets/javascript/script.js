
var generateBtn = document.querySelector("#generate");


// document refers to the html file. the querySelector is returning 1st html element with the id of generate. the car generateBtn is refering to the html button element with the generate id. 



function writePassword() {
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var charactors = "!\"#$%&'()*+-./<:=;>?@[]^_`{}| ~";

    var mainString = "";

    var promiseString = [];

    var password = [];

    function generatePassword(){
        //need to ask user 5 things when this function is called.
        //length of password 8-128;
        //use capitol alphabet?
        //use lower aplphabet?
        //use numbers?
        //use special charactors

        var passwordLength = prompt("how long would you\nlike your password?\n8-128 charactors",);
        console.log(passwordLength);

        // for loop i <= passwordLength.Length 
       
        if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)===true){
            alert("your password must \nbe at least 8 charactors\n and no more than 128.\n please try again."); 
            generatePassword();
            //need to create main array to choose charactors from
            //add to main string then convert whols string to array AFTER 
        } else {
            var conUpper = confirm("would you like to use\nuppercase letters?");
        } 
        
        if(conUpper){
            var mainString2 = mainString.concat(alphaUpper);
            promiseString.push(alphaUpper[0]);
            console.log(promiseString);
            console.log(mainString2);
            var conLower = confirm("Would you like to use\nlowercase letters");
        }else if(!conUpper){
            var conLower = confirm("Would you like to use\nlowercase letters");
            var mainString2 = mainString.concat("");
            console.log(mainString2);
        };

        if(conLower){
            var mainString3 = mainString.concat(alphaLower);
            promiseString.push(alphaLower[0]);
            console.log(promiseString);
            console.log(mainString3);
            var conNumber = confirm("Would you like to use\nnumbers?");
        } else if(!conLower){
            var conNumber = confirm("Would you like to use\nnumbers?");
            var mainString3 = mainString.concat("");
            console.log(mainString3);
        }

        if(conNumber) {
            var mainString4 = mainString.concat(numbers);
            promiseString.push(numbers[0]);
            console.log(promiseString);
            console.log(mainString4);
            var conCharactor = confirm("Would you like to use\nspecial charctors?");
        } else if(!conNumber){
            var conCharactor = confirm("Would you like to use\nspecial charctors?");
            var mainString4 = mainString.concat("");
            console.log(mainString4);
        }

        if(conCharactor) {
            var mainString5 = mainString.concat(charactors);
            promiseString.push(charactors[0]);
            console.log(promiseString);
            console.log(mainString5);
        } else if(!conCharactor){
            var mainString5 = mainString.concat("");
        }

        var totalString = mainString.concat(mainString2, mainString3, mainString4, mainString5);
        console.log(totalString);

        if(totalString ===""){
            alert("You gotta pick something");
            generatePassword();
        }

        var totalArray = [...totalString];
        console.log(totalArray);

        for(i=0; i < passwordLength; i++) {
            //just greater than or greater than equal to? it's comparing regular numbers to an index probably so it should end one lower
            console.log("password length =" + passwordLength);
           var index = Math.floor(Math.random() * totalArray.length);
            password.push(totalArray[index]);
            // console.log(password);
        }

        for(i=0; i<promiseString.length; i++){
            password[i] = promiseString[i];
        }

        password = password.join("");
        console.log(password);
        return password
    }

    generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, console.log("clicked"));
