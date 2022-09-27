var x = "The values are :";
function form1() {
  var input = document.getElementsByName("firstName[]");
  for (var i = 0; i < input.length; i++) {
    var a = input[i];
    x = x + "firstName[" + i + "].value= " + a.value + " ";
  }
  document.getElementById("form1").innerHTML = x;
  document.getElementById("form1").innerHTML = "Values";
}
