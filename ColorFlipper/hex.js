const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', e => {
    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
        let randomChar = hex[getRandomChar()];
        console.log(randomChar);

        hexColor = hexColor + randomChar; 
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomChar() {
    return Math.floor(Math.random() * hex.length);
}