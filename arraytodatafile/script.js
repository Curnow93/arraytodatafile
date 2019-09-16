var userInput = [];

function arrayBuild(){
    var currentInput = document.getElementById("userInput").value;
    userInput.push(currentInput);
    console.log(userInput);
}

function download23(){
    
    let csvContent = "data:text/csv;charset=utf-8,";

    var encodedUri = encodeURI(csvContent);
    
    userInput.forEach(function(rowArray) {
        console.log('rowarray- ', rowArray);
        let row = userInput.join(",");
        csvContent += row + "\r\n";
    });

    window.open(encodedUri);
    
    console.log(csvContent);
}