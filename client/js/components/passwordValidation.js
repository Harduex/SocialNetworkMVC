$(document).ready(function () {
  function isValidForm(fields) {

    var passwordsMatch = false;

    if (fields.username != undefined) {
      if (fields.username == "") {
        window.alert("Please enter your username.");
        $(`input[name="${fields.username}"]`).focus();

        return false;
      }

      if (fields.username.length < 3) {
        $(`input[name="${fields.username}"]`).focus();
        window.alert("Your username should be at least 3 characters long.");

        return false;
      }
    }

    if (fields.email != undefined) {
      if (fields.email != "") {

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var pass = fields.email.match(emailRegex);

        if (!pass) {
          window.alert("Please enter valid email.");

          return false;
        }

      } else {
        window.alert("Please enter your email.");
        $(`input[name="${fields.email}"]`).focus();

        return false;
      }
    }

    if (fields.password != undefined && fields.password2 != undefined) {
      if (fields.password == "") {
        window.alert("Please enter your password.");
        $(`input[name="${fields.password}"]`).focus();

        return false;
      }

      if (fields.password2 == "") {
        window.alert("Please validate your password.");
        $(`input[name="${fields.password2}"]`).focus();

        return false;
      }

      if (fields.password != fields.password2) {
        window.alert("Please make sure your passwords match.");
        $(`input[name="${fields.password2}"]`).focus();

        return false;
      } else {
        passwordsMatch = true;
      }

      if (fields.password != "" && passwordsMatch) {
        var passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_-])(?=.{8,})/;
        var pass = fields.password.match(passRegex);

        if (!pass) {
          window.alert(`
          Your password should have:
            - at least one lower case character
            - at least one upper case character
            - at least one digit
            - at least one special character
            - at least 8 characters
          `);
          return false;
        }
      }

    }


    return true;
  }

  // edit profile form
  $("#edit-profile-form").submit(function (event) {
    var values = $(this).serializeArray();
    const [, , username, email, , , password, password2] = values;

    values = {
      username: username.value,
      email: email.value,
      password: password.value == '' ? undefined : password.value,
      password2: password2.value == '' ? undefined : password2.value,
    }

    if (!isValidForm(values)) {
      event.preventDefault();
    }

  });

  // registration form
  $("#registration-form").submit(function (event) {
    var values = $(this).serializeArray();

    const [username, fullName, email, password, password2] = values;

    values = {
      username: username.value,
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      password2: password2.value,
    }

    if (!isValidForm(values)) {
      event.preventDefault();
    }

  });


});
