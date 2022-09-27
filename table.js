function insert_Row() {
  var table = document
    .getElementById("newTable")
    .appendChild(document.createElement("tr"));
  table
    .appendChild(document.createElement("td"))
    .appendChild(document.createTextNode("Add new row"));
  table
    .appendChild(document.createElement("td"))
    .appendChild(document.createTextNode("Add new row"));
}
