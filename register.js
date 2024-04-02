// Selecting DOM elements
let x = document.getElementById("loginform");
let y = document.getElementById("register");
let z = document.getElementById("btn");

// Constant for submit button
const submit = document.getElementById("submit-btn");

// Function to switch to registration form
function register() {
    // Move login form to the left to hide it
    x.style.left = "-400px";
    // Move register form to the left to display it
    y.style.left = "-0.01rem";
    // Adjust button position
    z.style.left = "110px";
}

// Function to switch to login form
function login() {
    // Move login form to the original position
    x.style.left = "0px";
    // Move register form to the right to hide it
    y.style.left = "450px";
    // Adjust button position
    z.style.left = "0";
}
/*
// Function to save registration data
function saveData() {

    // Retrieve input values
    const new_username = document.getElementById('newusername').value;
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const new_password = document.getElementById("newpassword").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let register = document.getElementById("registersuccess");
    let form = document.getElementById("form");
    // Get existing user records from localStorage or initialize an empty array
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if(name == ""){
        let error = document.getElementById("nameError");
        error.innerText = "name is required";
        error.style.color = "red";
        error.style.fontSize = "10px";
    }else{
        let error = document.getElementById("nameError");
        error.innerText = "";
    }
    if(new_username === ""){
        let error = document.getElementById("usernameError");
        error.innerText = "username is required";
        error.style.color = "red";
        error.style.fontSize = "10px";
    }
    
    else if(user_records.some((v) =>{
        return v.username = new_username
    })){
        let current_user = user_records.filter((v) => {
            return v.username == new_username
           })[0]
        let error = document.getElementById("usernameError");
        error.innerText = "username is not available";
        error.style.color = "red";
        error.style.fontSize = "10px";
    }else {
        let error = document.getElementById("usernameError");
        error.innerText = "";
    }
    if(email === ""){
        let error = document.getElementById("emailError");
        error.innerText = "email is required";
        error.style.color = "red";
        error.style.fontSize = "10px";
    }else if(!emailRegex.test(email)){
        let error = document.getElementById("emailError");
        error.innerText = "wrong inputs";
        error.style.color = "red";
        error.style.fontSize = "10px";
    }else{
        let error = document.getElementById("emailError");
        error.innerText = "";
    }
    if(new_password===""){
        let error = document.getElementById("passwordError");
        error.innerText = "password is required";
        error.style.color = "red";
        error.style.fontSize = "10px";
    }else{
        let error = document.getElementById("passwordError");
        error.innerText = "";
    }
    // Check for duplicate email
    if (user_records.some((v) => {
        return v.email == email;
    })) {
        
    }
    else{
        // Add new user data to the array
        user_records.push({
            "name": name,
            "username": new_username,
            "email": email,
            "password": new_password
        });
        // Update localStorage with the modified user records
        localStorage.setItem("users", JSON.stringify(user_records));
        register.classList.add("open-registerpopup");
        form.classList.add("form-hidden");
    }
}
*/

function saveData() {
    // Retrieve input values
    //For example, if a user types their name as " John " (with spaces before and after), without using .trim(), your code might consider it as a valid input. However, if you use .trim(), it will remove those extra spaces, and you'll get "John", which is probably what you expect.
    const new_username = document.getElementById('newusername').value.trim(); // Trim whitespace
    const name = document.getElementById("fullname").value.trim(); // Trim whitespace
    const email = document.getElementById("email").value.trim(); // Trim whitespace
    const new_password = document.getElementById("newpassword").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let register = document.getElementById("registersuccess");
    let form = document.getElementById("form");

    // Get existing user records from localStorage or initialize an empty array
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    // Check if any required field is empty
    if (name === "") {
        displayError("nameError", "Name is required");
    } else {
        clearError("nameError");
    }

    if (new_username === "") {
        displayError("usernameError", "Username is required");
    } else {
        clearError("usernameError");
    }

    if (email === "") {
        displayError("emailError", "Email is required");
    } else if (!emailRegex.test(email)) {
        displayError("emailError", "Invalid email format");
    } else {
        clearError("emailError");
    }

    if (new_password === "") {
        displayError("passwordError", "Password is required");
    } else {
        clearError("passwordError");
    }

    // If all required fields are filled
    if (name && new_username && email && new_password) {
        // Check for duplicate email
        if (user_records.some((v) => v.email === email)) {
            displayError("emailError", "Email already exists");
        } else {
            // Add new user data to the array
            user_records.push({
                "name": name,
                "username": new_username,
                "email": email,
                "password": new_password
            });
            // Update localStorage with the modified user records
            localStorage.setItem("users", JSON.stringify(user_records));
            register.classList.add("open-registerpopup");
            form.classList.add("form-hidden");
        }
    }
}

// Function to display error message
function displayError(id, message) {
    let error = document.getElementById(id);
    error.innerText = message;
    error.style.color = "red";
    error.style.fontSize = "10px";
}

// Function to clear error message
function clearError(id) {
    let error = document.getElementById(id);
    error.innerText = "";
}

let eye = document.getElementById("eyeicon");
let password = document.getElementById("newpassword");
eye.onclick = function(){
        if(password.type == "password"){
            password.type = "text";
            eye.src = "eye-open.png";
        }else {
            password.type = "password";
            eye.src = "eye-close.png";
        }
}


/*function checkLogin() {
 let email,password,loginpopup,form,loginfail;
 email = document.getElementById("useremail").value;
 password = document.getElementById("password").value;
 loginpopup = document.getElementById("loginsuccess");
 loginfail = document.getElementById("loginfail")
 form = document.getElementById("form");
 var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
 let user_login = JSON.parse(localStorage.getItem("users")) || [];
 if(user_login.some((v) => {
  return v.email == email && v.password == password
 })){
  //collect current session data
  let current_user = user_login.filter((v) => {
   return v.email == email && v.password == password
  })[0]
  loginpopup.classList.add("open-loginpopup");
  form.classList.add("form-hidden");
  //set the value of name and email in local storage for future use
  localStorage.setItem("name",current_user.name);
  localStorage.setItem("email",current_user.email);  
 }
 if(email===""){
    let error = document.getElementById("need_email");
    error.innerText = "email is required!";
 }else if(!emailRegex.test(email)){
    let error = document.getElementById("need_email");
    error.innerText = "invalid email format!";
 }
 else{
    let error = document.getElementById("need_email");
    error.innerText = "";
 }
 if(password===""){
    let error = document.getElementById("need_pwd");
     error.innerText = "password is required!";
 }
 else {
    loginfail.classList.add("open-failpopup");
    form.classList.add("form-hidden");
 }
} */
function checkLogin() {
    let email = document.getElementById("useremail").value.trim(); // Trim whitespace
    let password = document.getElementById("password").value;
    let loginpopup = document.getElementById("loginsuccess");
    let loginfail = document.getElementById("loginfail");
    let form = document.getElementById("form");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is empty or invalid
    if (email === "") {
        let error = document.getElementById("need_email");
        error.innerText = "Email is required!";
        return; // Exit function early
    } else if (!emailRegex.test(email)) {
        let error = document.getElementById("need_email");
        error.innerText = "Invalid email format!";
        return; // Exit function early
    } else {
        let error = document.getElementById("need_email");
        error.innerText = "";
    }

    // Check if password is empty
    if (password === "") {
        let error = document.getElementById("need_pwd");
        error.innerText = "Password is required!";
        return; // Exit function early
    } else {
        let error = document.getElementById("need_pwd");
        error.innerText = "";
    }

    let user_login = JSON.parse(localStorage.getItem("users")) || [];
    let isValidUser = user_login.some((v) => v.email === email && v.password === password);

    if (isValidUser) {
        // Collect current session data
        let current_user = user_login.find((v) => v.email === email && v.password === password);
        loginpopup.classList.add("open-loginpopup");
        form.classList.add("form-hidden");
        // Set the value of name and email in local storage for future use
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
    } else {
        loginfail.classList.add("open-failpopup");
        form.classList.add("form-hidden");
    }
    if(password == "admin" && email == "admin@email.com"){
        //loginpopup.classList.add("open-loginpopup");
        loginfail.style.display = "none";
        form.classList.add("form-hidden");

        let btn = document.getElementById("database");
        btn.style.visibility = "visible"; 
    }
}















//console.log(new_username.value,new_password.value,name.value);

 //localStorage.setItem("name",name.value);
 //localStorage.setItem("email",email.value);
 //localStorage.setItem("username",new_username.value);
 //localStorage.setItem("passwprd",new_password.value);

 //parse is use to convert string to object
 //checking the records available in users array
 //if records are available then retrive the records othervise return emty array

  //compare the local storage email with the new registration email for duplicate entry

  //if email is not matched then sstore the records in the array
  //stringyfy convert object on to string