
let container = document.querySelector('.container')

let btnContainer = document.createElement('div')
btnContainer.className = 'btn-container';

let btnAdd = document.createElement('button');
btnAdd.innerHTML = '+';
btnAdd.className = 'btn';

let btnSub = document.createElement('button');
btnSub.innerHTML = '-';
btnSub.className = 'btn';

let reset = document.createElement('button');
reset.innerHTML = 'reset';
reset.className = 'reset';

let counter = document.createElement('div');
counter.innerHTML = '0'
counter.className = 'counter';

container.prepend(btnContainer);
btnContainer.append(btnAdd, btnSub);
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