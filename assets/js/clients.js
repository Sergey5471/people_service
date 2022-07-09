import {
	exitBtn
} from './home.js'

import {
	checkLocalStorage,
	exit 
} from './funkList.js'


window.addEventListener('load', function () {
	checkLocalStorage()
})

exitBtn.addEventListener('click', function () {
	exit()
})





const fetchUrl = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json'

const body = document.querySelector('body')

// async function fetchUsers() {
// 	const result = fetch(fetchUrl, {
// 		method: "GET",
// 		headers: {
// 			'Accept-Language': 'en-US,ge',
// 		}
// 	}).then(res => {
// 		console.log(res.ok);
// 		return res.json()
// 	}).catch(() => {

// 	})
// 		.then(data => {
// 		console.log(data);
// 		})
	
// 	return result
// }

// fetchUsers().then((users) => {
	
// })

async function fetchUsers() {
	const res = await fetch(fetchUrl, {
		method: "GET",
		headers: {
			'Accept-Language': 'en-US,ge',
		}
	})
	console.log(res.ok);
	const users = res.json()
	
	return Promise.resolve(users) 
}

fetchUsers().then((users) => {
	console.log(users);
	const tableBody = document.getElementById('clientsTBody')
	const userBalanceDomElement = document.getElementById('userBalance')
	const userMaleGender = document.getElementById('userMale')
	const userFemaleGender = document.getElementById('userFemale')
	let maleCount = 0;
	let femaleCount = 0
	let largestUserBalance = 0
	for (const user of users) {


		const tableRow = document.createElement('tr')
		tableRow.classList.add('table__row')
		if (user.isActive == false) {
			tableRow.style.background = 'gray'
		}
		const tdName = createTdElement('td', 'table__name', user.name)
		const tdCompany = createTdElement('td', 'table__company', user.company)
		const tdEmail = createTdElement('td', 'table__email', user.email)
		const tdTel = createTdElement('td', 'table__tel', user.phone)
		const tdBalance = createTdElement('td', 'table__balance', user.balance)
		const tdRegistration = createTdElementDate('td', 'table__reg', user.registered)
		const tdGender = createTdElementDate('td', 'table__gender', user.gender)
		tdGender.style.display = "none"
		const deleteBtn = createTdElement('button', 'button__modal', 'Delete')
		tableBody.append(tableRow)
		tableRow.append(tdName)
		tableRow.append(tdCompany)
		tableRow.append(tdEmail)
		tableRow.append(tdTel)
		tableRow.append(tdBalance)
		tableRow.append(tdRegistration)
		tableRow.append(tdGender)
		tableRow.append(deleteBtn)

		if (user.gender == 'female') {
			femaleCount++
		} else {
			maleCount++
		}

		userMaleGender.innerText = 'Amount male user: ' + maleCount
		userFemaleGender.innerText = 'Amount female user: ' + femaleCount

		if (largestUserBalance < Number(user.balance.substr(1).replace(',', ''))) {
			largestUserBalance = Number(user.balance.substr(1).replace(',', ''))
		}
		userBalanceDomElement.innerHTML = 'Largest user balance: $ ' + largestUserBalance

		deleteBtn.addEventListener('click', function () {
			const name = deleteBtn.parentElement.querySelector('.table__name').innerText;
			createModal(name)

			const deleteUser = document.querySelector('.modal__button-delete')
			const cancel = document.querySelector('.modal__button-cancel')

			deleteUser.addEventListener('click', function() {
				const gender = deleteBtn.parentElement.querySelector('.table__gender').innerText
				if (user.gender == 'female') {
					femaleCount--
				} else {
					maleCount--
				}
				userMaleGender.innerText = 'Amount male user: ' + maleCount
				userFemaleGender.innerText = 'Amount female user: ' + femaleCount
				deleteBtn.parentElement.remove()
				closeModal()
				modalSuccess()
				setTimeout(modalSuccessClose, 3000)
				

			})

			cancel.addEventListener('click', function() {
				closeModal()
			})
			
		})

	}

})

function createTdElement(tag, className, text) {
	const elem = document.createElement(tag)
	elem.classList.add(className)
	elem.innerText = text
	return elem
}

function createTdElementDate(tag, className, text) {
	const elem = document.createElement(tag)
	elem.classList.add(className)
	const modifyDate = text.substr(0, 10).split('-').reverse().join('-')
	elem.innerText = modifyDate
	return elem
}

function createModal(name) {
	closeModal()
	const modalWindow = document.createElement('div')
	modalWindow.classList.add('modal__window')
	const modalTitle = document.createElement('h3')
	modalTitle.classList.add('modal__title')
	modalTitle.innerText = 'Confirm deletion of ' + name
	const deleteUser = document.createElement('button')
	deleteUser.classList.add('modal__button-delete')
	deleteUser.innerText = 'Delete'
	const cancel = document.createElement('button')
	cancel.classList.add('modal__button-cancel')
	cancel.innerText = 'Cancel'
	body.append(modalWindow)
	modalWindow.append(modalTitle)
	modalWindow.append(deleteUser)
	modalWindow.append(cancel)

}

function closeModal() {
	const checkModal = document.querySelector('.modal__window')
	if (checkModal != null) {
		checkModal.remove()
	}
}

function modalSuccess() {
	const success = document.createElement('div')
	success.classList.add('modal__success')
	success.innerText = 'Success'
	body.append(success)

}

function modalSuccessClose() {
	const successWindow = document.querySelector('.modal__success')
	successWindow.remove()

}

const scrollUpBtn = document.querySelector('.up__btn')

document.addEventListener('scroll', function () {
	console.log('client higjt', document.documentElement.clientHeight);
	console.log('page ofsetY', window.pageYOffset);
	if (document.documentElement.clientHeight < window.pageYOffset) {
		scrollUpBtn.style.display = 'block'
	} else {
		scrollUpBtn.style.display = 'none'
	}
	
})
scrollUpBtn.addEventListener('click', function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
	
})