
let container = document.querySelector('.container')

let btnContainer = document.createElement('div')

let btnAdd = document.createElement('button');
let btnSub = document.createElement('button');
let reset = document.createElement('button');

btnContainer.className = 'btn-container';

btnAdd.innerHTML = '+';
btnAdd.className = 'btn';

btnSub.innerHTML = '-';
btnSub.className = 'btn';

reset.innerHTML = 'reset';
reset.className = 'reset';

container.prepend(btnContainer);
btnContainer.append(btnAdd, btnSub);

let counter = document.createElement('div');
counter.innerHTML = '0'
counter.className = 'counter';
container.prepend(reset, counter);

btnAdd.addEventListener('click', addNumber);
btnSub.addEventListener('click', subNumber);

let i = 0;

function addNumber() {
    counter.innerHTML = ++i;
}

function subNumber() {
    counter.innerHTML = --i;
}

reset.addEventListener('click', function() {
    i = 0;
    counter.innerHTML = i;
})