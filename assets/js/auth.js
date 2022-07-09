
const data = [{ login: "aaa@mail.ru", pass: "aaa" }, { login: "abc@mail.ru", pass: "123" }, { login: "abcd@mail.ru", pass: "1234" }]

function checkValidForm(forma) {
	if (forma.elements.email.checkValidity() == true && forma.elements.password.checkValidity() == true) {
		forma.elements.formBtn.disabled = false 
	}
}

function checkLoginPass(email, pass) {
	const userSingIn = data.find(function (item) {
		return item.login === email && item.pass === pass
	})
	if (userSingIn) {
		setLocalStorage('login', email, 'pass', pass)
		window.location.replace('./app/home/home.html')
	} else {
		drawErrorMessage('red', 'Неверный логин или пароль', authForm)
	}
}

function setLocalStorage(key1, value1, key2, value2) {
	localStorage.setItem(key1, value1)
	localStorage.setItem(key2, value2)
}

function drawErrorMessage(color, textMessage, place) {
	const errorMessage = document.createElement('p')
	errorMessage.id = "error__message"
	errorMessage.style.color = color
	errorMessage.innerText = textMessage
	place.after(errorMessage)
}

function removeErrorMessage() {
	const messageRemove = document.getElementById('error__message')
	if (messageRemove != null) {
		messageRemove.remove()
		
	}
	
	
	
}

export {
	checkValidForm,
	checkLoginPass,
	setLocalStorage,
	drawErrorMessage,
	removeErrorMessage,
}