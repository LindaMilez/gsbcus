//Select the section with id container.
document.querySelector("#container");
document.getElementById("container");
// Select all of the list items with a class of second.
document.getElementsByClassName("second");
// another way via querry selector
document.querySelectorAll(".second");
// Select the list of items of class "third" inside ol tag.
document.querySelector("ol .third");
// Give the section with id "container" the text, "Hi from container".
var section = document.querySelector("#container");
section.innerText = "Hi from container";
// Add the main class to the div with class footer.
var footer = document.querySelector(".footer");
footer.className += "main";
// Remove the class main on the div with class footer.
var footer = document.querySelector(".footer");
footer.classList.remove("main");
// Create new li element
// with class and text "four"
// Append it to ul tag.
var newLi = document.createElement("Li");
newLi.innerText = "four";
var list = document.querySelector("ul");
list.appendChild(newLi);
// Provide background color to all li elements inside ol tag.
var liol = document.querySelectorAll("ol li");
for (var i = 0; i < liol.length; i++) {
  liol[i].getElementsByClassName.backgroundColor = "yellow";
}
// Remove the div with a class of footer.
var footer = document.querySelector(".footer");
footer.classList.remove();
