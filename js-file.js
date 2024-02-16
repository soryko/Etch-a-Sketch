const items = document.querySelectorAll('.item');

function changeBackgroundColor(event){
    event.target.style.backgroundColor = 'white';
}
function chooseGrid(input=4){
    if (input<=100){
        document.body.container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        document.body.container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    }
}
function popUpAction(){
    let popup = document.getElementById("myPopup");
    popup.classList.toggle('show');
}
for (const item of items){
    item.addEventListener("mouseover", changeBackgroundColor);
}
