// Function to calculate squares and cubes and append them to the table
function calculateAndDisplaySquaresCubes() {
    var table = document.querySelector('table'); // Select the table element

    for (var i = 0; i <= 5; i++) {
        var square = i * i; // Calculate square
        var cube = i * i * i; // Calculate cube

        // Create a new row and cells
        var row = table.insertRow(-1); // Insert a row at the end of the table
        var cell1 = row.insertCell(0); // Insert a cell in the row at index 0
        var cell2 = row.insertCell(1); // Insert a cell in the row at index 1
        var cell3 = row.insertCell(2); // Insert a cell in the row at index 2

        // Add the text to the cells
        cell1.textContent = i;
        cell2.textContent = square;
        cell3.textContent = cube;
    }
}

// Run the function when the script loads
calculateAndDisplaySquaresCubes();
