
function newElement(){
    let newSuggestion = document.getElementById("newSuggestion").value;
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.innerHTML = newSuggestion;
    newRow.append(newCell); 
    document.getElementById("eventSuggetiontable").appendChild(newRow);
    document.getElementById("newSuggestion").value = '';
}
