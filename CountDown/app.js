const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024,9,21,11,45,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let  month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `El Banco se cierra el Día ${weekday} ${date} ${month} ${year} ${hours}:${minutes}PM `

// Future time in miliseconds
const futureTime = futureDate.getTime();



function getRemainingTime() {
    const today = new Date().getTime();
    const t  = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60mins
    // 1d = 24hr

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    
    // Calculate All values
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor( (t % oneHour) / oneMinute )
    let second = Math.floor( (t % oneMinute) / 1000 )

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }


    // Set values array
    const values = [days,hours,minutes,second];
    items.forEach((item,index) => {
        item.innerHTML = format(values[index]);
    })
    if (t < 0) {
        clearInterval(countdown);
        deadLine.innerHTML = '<h4 class="expired"> La cuenta regresiva a terminado </h4>'
    }
}

let countdown = setInterval(getRemainingTime,1000)
getRemainingTime();