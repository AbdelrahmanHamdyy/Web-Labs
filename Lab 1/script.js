function displayErrorMessage(message, inputId) {
  var errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
  errorMessage.id = inputId + "-error";
  var inputElement = document.getElementById(inputId);
  inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
}

function clearErrorMessage(inputId) {
  var errorMessage = document.getElementById(inputId + "-error");
  if (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  }
}

function validateForm() {
  clearErrorMessage("username");
  clearErrorMessage("password");
  clearErrorMessage("retype-password");
  clearErrorMessage("age");

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var retypePassword = document.getElementById("retype-password").value;
  var age = Number(document.getElementById("age").value);
  var accountType = document.getElementById("account-type").value;
  var uppercaseUsername = username.toUpperCase();

  if (
    username === "" ||
    password === "" ||
    retypePassword === "" ||
    age === ""
  ) {
    displayErrorMessage("All fields must be filled.", "username");
    return;
  }

  if (password.length < 8) {
    displayErrorMessage(
      "A password should be at least 8 characters.",
      "password"
    );
    return;
  }

  var uppercasePattern = /[A-Z]/;
  var numberPattern = /[0-9]/;
  if (!uppercasePattern.test(password) || !numberPattern.test(password)) {
    displayErrorMessage(
      "A password should include at least one uppercase character and one numeric digit.",
      "password"
    );
    return;
  }

  if (password !== retypePassword) {
    displayErrorMessage("The two passwords do not match.", "retype-password");
    return;
  }

  if (age < 18) {
    displayErrorMessage(
      "You should be at least 18 years old to sign up.",
      "age"
    );
    return;
  }

  if (accountType === "Professor" && age < 30) {
    alert("You must be 30 years or above to register as professor.");
    return;
  }

  if (accountType === "Student") {
    alert(
      "Hello, " +
        uppercaseUsername +
        "\n" +
        "You are successfully registered as Student"
    );

    return;
  } else {
    var teachingID = prompt("Enter your teaching ID (default is 0):", "0");
    if (teachingID === null) {
      return;
    }
    alert(
      "Hello, " +
        uppercaseUsername +
        "\n" +
        `You are successfully registered as ${accountType}` +
        "\n" +
        `TeachingID: ${teachingID}`
    );
  }
}
