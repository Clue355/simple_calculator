function equationHandler(displayChild) {
  let displayText = displayChild.innerHTML;
  let equationRegex = /[0-9]+[\/\+\-\*]{1}[0-9]+/;
  let rightFormat = displayText.match(equationRegex);

  if (rightFormat) {
    let answer = document.createTextNode(` = ${eval(displayText)}`);
    displayChild.appendChild(answer);
  } else {
    let errorMessage = document.createTextNode(" = incorrect format");
    displayChild.appendChild(errorMessage);
  }
}

function clearDisplay(displayChild, display) {
  let newElement = document.createElement("p");
  let emptyIdElements = document.getElementById("display").querySelectorAll("p");
  let nodeCount = 9;

  if (display.childElementCount > nodeCount) {
    display.removeChild(emptyIdElements[0]);

    displayChild.setAttribute("id", "old");
    newElement.setAttribute("id", "displayChild");
    display.appendChild(newElement);
  }
  console.log(emptyIdElements);
  displayChild.setAttribute("id", "old");
  newElement.setAttribute("id", "displayChild");
  display.appendChild(newElement);
}

function buttonListener(buttonValue) {
  let display = document.getElementById("display");
  let displayNodeCount = display.childElementCount;
  let displayChild = document.getElementById("displayChild");

  if (buttonValue == "c") {
    clearDisplay(displayChild, display);
  } else if (buttonValue == "=") {
    equationHandler(displayChild, display);
    clearDisplay(displayChild, display);
  } else {
    displayChild.appendChild(document.createTextNode(`${buttonValue}`));
  }
}
