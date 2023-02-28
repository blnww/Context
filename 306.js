
let elem = document.querySelector('#elem');
let surname = "Smit"
let name = "John"
function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, [surname, name]); // тут должно вывести 'hello, John Smit'