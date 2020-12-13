let greenBtn = document.querySelector('#green-btn');
let yellowBtn = document.querySelector('#yellow-btn');
let redBtn = document.querySelector('#red-btn');

let p = document.querySelector('p');

greenBtn.addEventListener('click', function () {
    p.setAttribute('class', 'text-green');
});

yellowBtn.addEventListener('click', function () {
    p.setAttribute('class', 'text-yellow');
});

redBtn.addEventListener('click', function () {
    p.setAttribute('class', 'text-red');
});