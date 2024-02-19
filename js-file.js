const items = document.querySelectorAll('.item');

function changeBackgroundColor(event){
    event.target.style.backgroundColor = 'white';
}
function chooseGrid(input=4){
    if (input > 0 && input<=100){
        document.body.container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        document.body.container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    }else {
        alert("please enter a number between 4 and 100");
    }
}
function createPopup(){
    const popupElement = document.createElement("div");
    popupElement.classList.add("popup");

    const popupText = document.createElement("span");
    popupElement.classList.add("popuptext");
    popupText.innerText = "Choose your grid width:";

    const inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.id = "gridIput";

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", chooseGrid);

    popupElement.appendChild(popupText);
    popupElement.appendChild(inputElement);
    popupElement.appendChild(submitButton);

    document.body.appendChild(popupElement);
}
function popUpAction(){
    let popup = document.getElementById("myPopup");
    popup.classList.toggle('show');
    let inputElement = getElementById("gridInput");
    const userInput = inputElement.value;
    const parsedInput = parseInt(userInput, 10);
    if (!isNaN(parsedInput) && parsedInput > 0 && parsedInput <= 100){
        chooseGrid(parsedInput);
        inputElement.value = "";
    }else {
        alert("Invalid input");
    }
}
for (const item of items){
    item.addEventListener("mouseover", changeBackgroundColor);
}

const popupElement = document.querySelector(".popup");

popupElement.style.position = "absolute";
popupElement.style.top = "50%";
popupElement.style.left = "50%";
popupElement.style.transform = "translate(-50%, -50%)";

document.body.appendChild(popupElement);