let count = 0;

let numberValue = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach( btn => {
    
    btn.addEventListener('click', e => {
        const textBtn = e.target.textContent;
        
        if(textBtn === "Decrease") {
            count--;
        } else if (textBtn === "Increase") {
            count++;
        } else {
            count = 0;
        }
        
        if(count > 0) {
            numberValue.style.color = "green";
        } else if (count < 0) {
            numberValue.style.color = "red";
        } else {
            numberValue.style.color = "#122";
        }
       
        numberValue.textContent = count;

    })
});