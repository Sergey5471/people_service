import {
	drawErrorMessage,
	checkValidForm,
} from './auth.js'
import { data } from './data.js'

let userObj2 = {}

const regForm = document.forms.regForm


regForm.addEventListener('input', function () {
	checkValidForm(this)
})


regForm.addEventListener('submit', function (event) {
	event.preventDefault()
	let emailValue = this.elements.email.value
	let passValue = this.elements.password.value
	let passValueRepeat = this.elements.passwordRepeat.value

	let userData = data.find(function (item) {
		return item.login === emailValue
	})
	if (userData) {
		drawErrorMessage('red', 'Пользователь с таким логином уже зарегестрирован', regForm.elements.email)
	} else if (passValue !== passValueRepeat) {
		drawErrorMessage('red', 'Неправильный пароль', regForm.elements.passwordRepeat)
	} else {
		userObj2.login = emailValue
		userObj2.pass = passValue
		data.push(userObj2)
		drawErrorMessage('black', 'Вы успешно зарегестрированы!', regForm)
	}
})
