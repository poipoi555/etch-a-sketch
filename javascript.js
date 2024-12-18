const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

create(16);

function create(numGrids) {
    const newWidth = Math.floor(1454 / numGrids);
    const newHeight = Math.floor(1490 / numGrids);

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${numGrids}, ${newWidth}px)`;
    container.style.gridTemplateRows = `repeat(${numGrids}, ${newHeight}px)`;

    for (let i = 0; i < numGrids; i++) {
        for (let j = 0; j < numGrids; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid");
            newDiv.style.cssText = `border: solid 1px black; color: white; background-color: lightgray; width: ${newWidth}px; 
                    height: ${newHeight}px; box-sizing: border-box`;

            container.appendChild(newDiv);

            newDiv.addEventListener("mouseover", function() {
                newDiv.style.backgroundColor = "pink";
            });
        }
    }
}


const button = document.createElement("button");
button.classList.add("resetButton");
button.textContent = "Reset";
body.insertBefore(button, container);


button.addEventListener("click", function() {
    let numGrids = prompt("Number of grids (maximum 100): ");
    numGrids = parseInt(numGrids);

    if (numGrids > 100 || numGrids < 1) {
        numGrids = prompt("Number of grids (maximum 100): ");
        numGrids = parseInt(numGrids);
    }

    container.innerHTML = "";

    create(numGrids);
});




