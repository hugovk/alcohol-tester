function alcotester() {
  var form = document.getElementById("alcotester");
  var output = document.getElementById("output");
  var units = document.getElementById("units");
  form.remove();
  if (units.value == 0) {
    output.innerHTML = "Yes";
    output.className = "yes";
  } else {
    output.innerHTML = "No";
    output.className = "no";
  }
  return false;
}
