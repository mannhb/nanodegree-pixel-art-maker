// Select color input
var color = document.getElementById('colorPicker');

// Select grid size input

var picker = document.querySelector('#sizePicker')

// When size is submitted by the user, call makeGrid()

picker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});

// Make an adjustable grid and paint each cell

function makeGrid() {
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    var table = document.getElementById('pixelCanvas');

    table.innerHTML = '';

    for (var x = 0; x < height; x++) {
        var row = table.insertRow(x);
        for (var y = 0; y < width; y++) {
            var cell = row.insertCell(y);
            cell.addEventListener('click', function(event) {
                event.target.style.backgroundColor = color.value;
            });
        }
    }
};
