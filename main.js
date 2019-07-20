
let imgCoracao = document.querySelector('#img-coracao');
let sectionModal = document.querySelector('.sec-modal');
let modal1 = document.querySelector('.modal1');
let btnHeart = document.querySelector('.btn-heart');
let textHeart = document.querySelector('.text-heart');

imgCoracao.onclick = function(){
    sectionModal.style.display = "block";
    modal1.style.display = "block";
    textHeart.style.display = "none";
}

btnHeart.onclick = function(){
    sectionModal.style.display = "none";
    modal1.style.display = "none";
    textHeart.style.display = "block";
}