const btnShow = document.querySelector('.btn');
const btnClose = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

btnShow.addEventListener('click', ()=> {
    if (!modal.classList.contains('open-modal')) {
        modal.classList.add('open-modal');
    } else {
        modal.classList.remove('open-modal');
    }
})

btnClose.addEventListener('click', ()=> {
    modal.classList.remove('open-modal');
})