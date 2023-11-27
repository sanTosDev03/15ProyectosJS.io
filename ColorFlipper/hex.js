const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', e => {

    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
        let ramdonChar = hex[getRandonChar()];
        console.log(hex[ramdonChar]);
        hexColor = hexColor + ramdonChar;
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandonChar() {
    return Math.floor(Math.random() * hex.length)
}