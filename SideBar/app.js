const btnShow = document.querySelector('.sidebar-toggle');
const btnClose = document.querySelector('.close-btn')
const sideBar = document.querySelector('.sidebar');


btnShow.addEventListener('click', () => {
    if (!sideBar.classList.contains('show-sidebar')) {
        sideBar.classList.add('show-sidebar');
    } else {
        sideBar.classList.remove('show-sidebar');
    }
})

btnClose.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
})

