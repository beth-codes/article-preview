
const articleLogo = document.querySelector(".article-logo");
const articleDisplay = document.querySelector(".article-footer-active");
const share_arrow = document.querySelector(".share_arrow");

const articleFooter = document.querySelector(".article-footer");
const articleFooterPerson  = document.querySelector(".article-footer-person");

articleLogo.addEventListener('click', ()=>{
    articleDisplay.classList.toggle("visible_menu");
    articleLogo.classList.toggle("clicked_icon");
    share_arrow.classList.toggle("clicked_arrow");
    articleFooter.classList.toggle("change_state");
    articleFooterPerson.classList.toggle("absent");
})


const btn = document.querySelector('button');
const example = document.querySelector('.example');

btn.addEventListener('click', function () {
   example.classList.toggle('newExam');
})
   


