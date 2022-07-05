import {
	checkValidForm,
	checkLoginPass,
	removeErrorMessage,
} from './auth.js'
import {
	checkSingIn,
} from './funkList.js'

const authForm = document.forms.authForm


window.addEventListener('load', function () {
	checkSingIn()
})


authForm.addEventListener('input', function (event) {
	checkValidForm(this)
})

authForm.addEventListener('submit', function (event) {
	event.preventDefault()
	removeErrorMessage()
	let emailValue = this.elements.email.value
	let passValue = this.elements.password.value
	checkLoginPass(emailValue, passValue)
	
})

