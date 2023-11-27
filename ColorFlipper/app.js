const colors = [ "green", "red", "#FF5733", "#581845" ];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', e => {
    let numRandom = getRandomNumber();
    console.log(numRandom);

    document.body.style.backgroundColor = colors[numRandom];
    color.textContent = colors[numRandom];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}