var m = document.querySelector('.input-metr'),
	sm = document.querySelector('.output_sm'),
	btn = document.querySelector('.convert'),
	number = document.querySelector('.input__number'),
	divError = document.querySelector('.error'),
	quatityText = document.querySelector('.quantity__text'),
	btnQuantity = document.querySelector('.result__quantity'),
	quantityOutout = document.querySelector('.quantity__output')

// Task 1
btn.addEventListener('click', () => {
	if (m.value > 1) {
		let convert = m.value * 100
		sm.innerHTML = `${convert}см`
	}
})

// Task 2
number.addEventListener('input', function () {
	var input = this.value
	let numberArray = input.split('').map(function (item) {
		return parseInt(item.trim(), 10)
	})

	let uniqNumber = new Set(numberArray)

	if (uniqNumber.size !== numberArray.length) {
		divError.style.visibility = 'visible'
	} else {
		divError.style.visibility = 'hidden'
	}
})

// Task 3
btnQuantity.addEventListener('click', function () {
	quantityOutout.innerHTML = quatityText.value.split(' ').length
})
