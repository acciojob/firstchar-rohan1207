function firstChar(text) {
  // Trim leading and trailing spaces
  text = text.trim();

 
  if (text === "") {
    return "";
  }

 
  return text.charAt(0);
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));