
let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

let Func = func.bind(elem)// тут напишите конструкцию с bind()

Func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
Func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'