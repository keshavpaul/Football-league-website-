var head = document.getElementsByTagName("HEAD")[0];
// change this
var button = document.getElementById("suprise");
button.addEventListener("click", function() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "css/united.css";
  head.appendChild(link);
});
