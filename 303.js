"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет? = выведет текст
	
	function child() {
		console.log(this.value); // что выведет? = а тут выведет ошиюку (причина внутренний this)
	}
	child();
}