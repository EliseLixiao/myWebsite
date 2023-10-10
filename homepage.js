
let facetimePic = document.querySelector('.facetimePic');
function scrollTriggerft(){
    if(facetimePic.offsetTop < window.scrollY){
        facetimePic.classList.add('active');
    }
    else
    {
        facetimePic.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTriggerft);

let museumPic = document.querySelector('.museumPic');
function scrollTriggermm(){
    if(museumPic.offsetTop < window.scrollY){
        museumPic.classList.add('active');
    }
    else
    {
        museumPic.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTriggermm);

let disneyPic = document.querySelector('.disneyPic');
function scrollTriggerdn(){
    if(disneyPic.offsetHeight < window.scrollY){
        disneyPic.classList.add('active');
    }
    else
    {
        disneyPic.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTriggerdn);

let catPic = document.querySelector('.catPic');
function scrollTriggerct(){
    if(catPic.offsetHeight < window.scrollY){
        catPic.classList.add('active');
    }
    else
    {
        catPic.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTriggerct);

let hiText = document.querySelector('.hiText');
function scrollTriggerht(){
    if(hiText.offsetHeight < window.scrollY){
        hiText.classList.add('active');
    }
    else
    {
        hiText.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTriggerht);

let elise = document.querySelector('.elise');
function scrollTriggerel(){
    if(elise.offsetHeight < window.scrollY){
        elise.classList.add('active');
    }
    else
    {
        elise.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTriggerel);