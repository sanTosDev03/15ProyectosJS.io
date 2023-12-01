const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

btnContainer.addEventListener('click', e => {
    const id = e.target.dataset.id;
    
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
    e.target.classList.add('active');

    articles.forEach(article => {
        article.classList.remove('active');
    })
    const element = document.querySelector(`#${id}`);
    element.classList.add('active');

})