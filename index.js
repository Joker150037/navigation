let bar = document.querySelector('.nav__bar');
let list = document.querySelector('.list');
bar.addEventListener('click', barFunction);

function barFunction() {

    if (list.style.display == 'none') {
        list.style.display = 'block';
    }
    else if (list.style.display = 'block') {
        list.style.display = 'none';
    }
}