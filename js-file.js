const items = document.querySelectorAll('.item');

function changeBackgroundColor(){
    items.style.backgroundColor = 'white';
}

for (const item of items){
    items.addEventListener("mouseover", changeBackgroundColor);
}
