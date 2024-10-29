const createButton = document.querySelector(".createButton");
createButton.addEventListener("click", createGrid);

const gridContainer = document.querySelector(".gridContainer");

let dimension = 1;

function createGrid() {
    do { 
        dimension = prompt("Squares Per Side? (Max = 100)", 10);
    } while (dimension > 100);

    gridContainer.textContent = "";

    for (i = 0; i < dimension; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        gridContainer.appendChild(gridRow);

        for (j = 0; j < dimension; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");

        //Not used, but just wanted to test
        let rowNumber = i.toString();
        let columnNumber = j.toString();
        let gridID = rowNumber + columnNumber;
        gridBox.setAttribute("id", parseInt(gridID));

        gridBox.style.opacity=0.1;
        
        gridBox.addEventListener("mouseover", () => {
            if (gridBox.style.backgroundColor === "") {
                gridBox.style.backgroundColor = randomRGB();
            }
        });

        gridBox.addEventListener("mouseover", () => {
            const gridBoxStyle = getComputedStyle(gridBox);
            let gridBoxOpacity = parseFloat(gridBoxStyle.opacity);

            let newGridBoxOpacity = 0;

            if (gridBoxOpacity < 1) {
                newGridBoxOpacity = gridBoxOpacity + 0.1;
            }
            else {
                newGridBoxOpacity = gridBoxOpacity;
            }

            gridBox.style.opacity = newGridBoxOpacity.toString();
        });

        gridRow.appendChild(gridBox);
        }
    }
}

function randomRGB() {
    const red = Math.floor(Math.random() * 257);
    const green = Math.floor(Math.random() * 257);
    const blue = Math.floor(Math.random() * 257);

    const randomRGB = `rgb(${red}, ${green}, ${blue})`;
    return randomRGB;
}