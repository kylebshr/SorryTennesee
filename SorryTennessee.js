var sorryElements = document.getElementsByTagName("option");
var elArray = Array.from(sorryElements);
for (let i = 0; i < elArray.length; i++) {
  if (elArray[i].text === "TX" || elArray[i].text === "Texas") {
    elArray[i].parentNode.removeChild(elArray[i]);
    console.log("Sorry Texas");
  }
}
