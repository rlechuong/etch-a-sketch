let gridButton = document.querySelector("#gridButton");
let gridContainer = document.querySelector("#gridContainer");

let gridSize = 16;

createGrid();

gridButton.addEventListener("click", () => {
    let newGridSize = prompt("Number of squares per side:", "16");

    if (newGridSize === null) {
        return;
    }

    if (newGridSize > 100) {
        alert("Maximum Value: 100");
        return;
    }

    gridSize = parseInt(newGridSize);

    gridContainer.textContent = "";
    createGrid();
})

function createGrid() {
    for (i = 0; i <= gridSize - 1; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        gridRow.style.width="100%";
        gridRow.style.height="100%";
        gridRow.style.display="flex";
        gridRow.style.flexDirection="row";
    
        for (j = 0; j <= gridSize - 1; j++) {
            let gridBox = document.createElement("div");
            let gridID = i.toString() + j.toString();
            gridBox.id = gridID;
            gridBox.classList.add("gridBox");
            gridBox.style.width="100%";
            gridBox.style.height="100%";
    
            gridBox.addEventListener("mouseover", () => {
                if (gridBox.style.backgroundColor ===  "") {

                    let red = (Math.floor(Math.random() * 256)).toString();
                    let green = (Math.floor(Math.random() * 256)).toString();
                    let blue = (Math.floor(Math.random() * 256)).toString();

                    let rgb = `rgb(${red}, ${green}, ${blue})`;

                    gridBox.style.backgroundColor = rgb;
                }

                if (gridBox.style.opacity === "") {
                    gridBox.style.opacity = 0.1;
                }
                else if (parseFloat(gridBox.style.opacity) < 1.0) {
                    newOpacity = parseFloat(gridBox.style.opacity) + 0.1;
                    gridBox.style.opacity = newOpacity.toString();
                }
            })
            gridRow.appendChild(gridBox);
        }
        gridContainer.appendChild(gridRow);
    }
}