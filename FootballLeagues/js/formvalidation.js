var firstName = document.getElementById("firstname").value;
var lastName = document.getElementById("lastname").value;
var password = document.getElementById("inputPassword4").value;
var Submit = document.getElementById("submit");

Submit.addEventListener("click", validateForm());
function validateForm() {
  if (firstName == null || firstName == "") {
    alert("Name can't be blank");
    return false;
  } else if (lastName == null || lastName == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}
