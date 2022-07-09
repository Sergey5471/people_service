import {
	exit,
	checkLocalStorage,
} from './funkList.js'

window.addEventListener('load', function () {
	checkLocalStorage()
})

const user = document.getElementById('user')
const userName = localStorage.getItem('login')
function userNameDraw() {
	user.innerText =  userName
}
userNameDraw()


const exitBtn = document.getElementById('exit')
exitBtn.addEventListener('click', function () {
	exit()
})

export {
	exitBtn,
}




