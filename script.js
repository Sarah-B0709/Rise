function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


// Get the modal for "November 1st"
var modal = document.getElementById("Nov1");

// Get the button that opens the modal
var btn = document.getElementById("Nov1Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal for "November 2nd"
var modal2 = document.getElementById("Nov2");

// Get the button that opens the modal
var btn2 = document.getElementById("Nov2Btn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Get the modal for "November 3rd"
var modal3 = document.getElementById("Nov3");

// Get the button that opens the modal
var btn3 = document.getElementById("Nov3Btn");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Get the modal for "November 4th"
var modal4 = document.getElementById("Nov4");

// Get the button that opens the modal
var btn4 = document.getElementById("Nov4Btn");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

// Get the modal for "November 5th"
var modal5 = document.getElementById("Nov5");

// Get the button that opens the modal
var btn5 = document.getElementById("Nov5Btn");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

// Get the modal for "November 6th"
var modal6 = document.getElementById("Nov6");

// Get the button that opens the modal
var btn6 = document.getElementById("Nov6Btn");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

// Get the modal for "November 7th"
var modal7 = document.getElementById("Nov7");

// Get the button that opens the modal
var btn7 = document.getElementById("Nov7Btn");

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close7")[0];

// When the user clicks on the button, open the modal
btn7.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

// Get the modal for "November 8th"
var modal8 = document.getElementById("Nov8");

// Get the button that opens the modal
var btn8 = document.getElementById("Nov8Btn");

// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks on the button, open the modal
btn8.onclick = function() {
  modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span8.onclick = function() {
  modal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

// Get the modal for "November 9th"
var modal9 = document.getElementById("Nov9");

// Get the button that opens the modal
var btn9 = document.getElementById("Nov9Btn");

// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close9")[0];

// When the user clicks on the button, open the modal
btn9.onclick = function() {
  modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span9.onclick = function() {
  modal9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}

// Get the modal for "November 10th"
var modal10 = document.getElementById("Nov10");

// Get the button that opens the modal
var btn10 = document.getElementById("Nov10Btn");

// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close10")[0];

// When the user clicks on the button, open the modal
btn10.onclick = function() {
  modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span10.onclick = function() {
  modal10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}

// Get the modal for "November 11th"
var modal11 = document.getElementById("Nov11");

// Get the button that opens the modal
var btn11 = document.getElementById("Nov11Btn");

// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close11")[0];

// When the user clicks on the button, open the modal
btn11.onclick = function() {
  modal11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span11.onclick = function() {
  modal11.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}

// Get the modal for "November 12th"
var modal12 = document.getElementById("Nov12");

// Get the button that opens the modal
var btn12 = document.getElementById("Nov12Btn");

// Get the <span> element that closes the modal
var span12 = document.getElementsByClassName("close12")[0];

// When the user clicks on the button, open the modal
btn12.onclick = function() {
  modal12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span12.onclick = function() {
  modal12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
}

// Get the modal for "November 13th"
var modal13 = document.getElementById("Nov13");

// Get the button that opens the modal
var btn13 = document.getElementById("Nov13Btn");

// Get the <span> element that closes the modal
var span13 = document.getElementsByClassName("close13")[0];

// When the user clicks on the button, open the modal
btn13.onclick = function() {
  modal13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span13.onclick = function() {
  modal13.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal13) {
    modal13.style.display = "none";
  }
}

// Get the modal for "November 14th"
var modal14 = document.getElementById("Nov14");

// Get the button that opens the modal
var btn14 = document.getElementById("Nov14Btn");

// Get the <span> element that closes the modal
var span14 = document.getElementsByClassName("close14")[0];

// When the user clicks on the button, open the modal
btn14.onclick = function() {
  modal14.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span14.onclick = function() {
  modal14.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal14) {
    modal14.style.display = "none";
  }
}

// Get the modal for "November 15th"
var modal15 = document.getElementById("Nov15");

// Get the button that opens the modal
var btn15 = document.getElementById("Nov15Btn");

// Get the <span> element that closes the modal
var span15 = document.getElementsByClassName("close15")[0];

// When the user clicks on the button, open the modal
btn15.onclick = function() {
  modal15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span15.onclick = function() {
  modal15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal15) {
    modal15.style.display = "none";
  }
}

// Get the modal for "November 16th"
var modal16 = document.getElementById("Nov16");

// Get the button that opens the modal
var btn16 = document.getElementById("Nov16Btn");

// Get the <span> element that closes the modal
var span16 = document.getElementsByClassName("close16")[0];

// When the user clicks on the button, open the modal
btn16.onclick = function() {
  modal16.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span16.onclick = function() {
  modal16.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal16) {
    modal16.style.display = "none";
  }
}

// Get the modal for "November 17th"
var modal17 = document.getElementById("Nov17");

// Get the button that opens the modal
var btn17 = document.getElementById("Nov17Btn");

// Get the <span> element that closes the modal
var span17 = document.getElementsByClassName("close17")[0];

// When the user clicks on the button, open the modal
btn17.onclick = function() {
  modal17.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span17.onclick = function() {
  modal17.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal17) {
    modal17.style.display = "none";
  }
}

// Get the modal for "November 18th"
var modal18 = document.getElementById("Nov18");

// Get the button that opens the modal
var btn18 = document.getElementById("Nov18Btn");

// Get the <span> element that closes the modal
var span18 = document.getElementsByClassName("close18")[0];

// When the user clicks on the button, open the modal
btn18.onclick = function() {
  modal18.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span18.onclick = function() {
  modal18.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal18) {
    modal18.style.display = "none";
  }
}

// Get the modal for "November 20th"
var modal20 = document.getElementById("Nov20");

// Get the button that opens the modal
var btn20 = document.getElementById("Nov20Btn");

// Get the <span> element that closes the modal
var span20 = document.getElementsByClassName("close20")[0];

// When the user clicks on the button, open the modal
btn20.onclick = function() {
  modal20.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span20.onclick = function() {
  modal20.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal20) {
    modal20.style.display = "none";
  }
}

// Get the modal for "November 19th" (i know its out // of order im sorry)
var modal19 = document.getElementById("Nov19");

// Get the button that opens the modal
var btn19 = document.getElementById("Nov19Btn");

// Get the <span> element that closes the modal
var span19 = document.getElementsByClassName("close19")[0];

// When the user clicks on the button, open the modal
btn19.onclick = function() {
  modal19.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span19.onclick = function() {
  modal19.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal19) {
    modal19.style.display = "none";
  }
}

// Get the modal for "November 21st"
var modal21 = document.getElementById("Nov21");

// Get the button that opens the modal
var btn21 = document.getElementById("Nov21Btn");

// Get the <span> element that closes the modal
var span21 = document.getElementsByClassName("close21")[0];

// When the user clicks on the button, open the modal
btn21.onclick = function() {
  modal21.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span21.onclick = function() {
  modal21.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal21) {
    modal21.style.display = "none";
  }
}

// Get the modal for "November 22nd"
var modal22 = document.getElementById("Nov22");

// Get the button that opens the modal
var btn22 = document.getElementById("Nov22Btn");

// Get the <span> element that closes the modal
var span22 = document.getElementsByClassName("close22")[0];

// When the user clicks on the button, open the modal
btn22.onclick = function() {
  modal22.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span22.onclick = function() {
  modal22.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal22) {
    modal22.style.display = "none";
  }
}

// Get the modal for "November 23rd"
var modal23 = document.getElementById("Nov23");

// Get the button that opens the modal
var btn23 = document.getElementById("Nov23Btn");

// Get the <span> element that closes the modal
var span23 = document.getElementsByClassName("close23")[0];

// When the user clicks on the button, open the modal
btn23.onclick = function() {
  modal23.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span23.onclick = function() {
  modal23.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal23) {
    modal23.style.display = "none";
  }
}

// Get the modal for "November 24th"
var modal24 = document.getElementById("Nov24");

// Get the button that opens the modal
var btn24 = document.getElementById("Nov24Btn");

// Get the <span> element that closes the modal
var span24 = document.getElementsByClassName("close24")[0];

// When the user clicks on the button, open the modal
btn24.onclick = function() {
  modal24.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span24.onclick = function() {
  modal24.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal24) {
    modal24.style.display = "none";
  }
}

// Get the modal for "November 25th"
var modal25 = document.getElementById("Nov25");

// Get the button that opens the modal
var btn25 = document.getElementById("Nov25Btn");

// Get the <span> element that closes the modal
var span25 = document.getElementsByClassName("close25")[0];

// When the user clicks on the button, open the modal
btn25.onclick = function() {
  modal25.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span25.onclick = function() {
  modal25.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal25) {
    modal25.style.display = "none";
  }
}

// Get the modal for "November 26th"
var modal26 = document.getElementById("Nov26");

// Get the button that opens the modal
var btn26 = document.getElementById("Nov26Btn");

// Get the <span> element that closes the modal
var span26 = document.getElementsByClassName("close26")[0];

// When the user clicks on the button, open the modal
btn26.onclick = function() {
  modal26.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span26.onclick = function() {
  modal26.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal26) {
    modal26.style.display = "none";
  }
}

// Get the modal for "November 27th"
var modal27 = document.getElementById("Nov27");

// Get the button that opens the modal
var btn27 = document.getElementById("Nov27Btn");

// Get the <span> element that closes the modal
var span27 = document.getElementsByClassName("close27")[0];

// When the user clicks on the button, open the modal
btn27.onclick = function() {
  modal27.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span27.onclick = function() {
  modal27.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal27) {
    modal27.style.display = "none";
  }
}

// Get the modal for "November 28th"
var modal28 = document.getElementById("Nov28");

// Get the button that opens the modal
var btn28 = document.getElementById("Nov28Btn");

// Get the <span> element that closes the modal
var span28 = document.getElementsByClassName("close28")[0];

// When the user clicks on the button, open the modal
btn28.onclick = function() {
  modal28.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span28.onclick = function() {
  modal28.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal28) {
    modal28.style.display = "none";
  }
}

// Get the modal for "November 29th"
var modal29 = document.getElementById("Nov29");

// Get the button that opens the modal
var btn29 = document.getElementById("Nov29Btn");

// Get the <span> element that closes the modal
var span29 = document.getElementsByClassName("close29")[0];

// When the user clicks on the button, open the modal
btn29.onclick = function() {
  modal29.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span29.onclick = function() {
  modal29.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal29) {
    modal29.style.display = "none";
  }
}

// Get the modal for "November 30th"
var modal30 = document.getElementById("Nov30");

// Get the button that opens the modal
var btn30 = document.getElementById("Nov30Btn");

// Get the <span> element that closes the modal
var span30 = document.getElementsByClassName("close30")[0];

// When the user clicks on the button, open the modal
btn30.onclick = function() {
  modal30.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span30.onclick = function() {
  modal30.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal30) {
    modal30.style.display = "none";
  }
}

// Create a "close" button and append it to each list item


var myNodelist = document.getElementsByClassName("listItem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeUL";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeul = document.getElementsByClassName("closeUL");
var i;
for (i = 0; i < closeul.length; i++) {
  closeul[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  li.classList.add("listItem");

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeUL";
  span.appendChild(txt);
  li.appendChild(span);
  

  for (i = 0; i < closeul.length; i++) {
    closeul[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item


var myNodelist = document.getElementsByClassName("listItem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeUL";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeul = document.getElementsByClassName("closeUL");
var i;
for (i = 0; i < closeul.length; i++) {
  closeul[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
var list = document.getElementById('myUL2');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput2").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL2").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  li.classList.add("listItem");

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeUL";
  span.appendChild(txt);
  li.appendChild(span);
  

  for (i = 0; i < closeul.length; i++) {
    closeul[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 86400000); // Change image every 24 hours
}