function includeHTML() {
  var z, i, elem, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elem = z[i];
    /*search for elements with a certain atrribute:*/
    file = elem.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elem.innerHTML = this.responseText;}
          if (this.status == 404) {elem.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elem.removeAttribute("w3-include-html");
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