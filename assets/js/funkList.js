import {data} from './data.js'

function checkSingIn() {
	const localLogin = localStorage.getItem('login')
	const localPass = localStorage.getItem('pass')
	data.find(function (item) {
		if (item.login == localLogin && item.pass == localPass) {
			window.location.replace('./app/home/home.html')
		} 
	})
}

function checkLocalStorage() {
	const localLogin = localStorage.getItem('login')
	const localPass = localStorage.getItem('pass')
	if (localLogin == undefined && localPass == undefined) {
		window.location.replace('../../index.html')
	}
}

function exit() {
	localStorage.clear()
	window.location.replace('../../index.html')
}

export {
	checkSingIn,
	checkLocalStorage,
	exit,
}