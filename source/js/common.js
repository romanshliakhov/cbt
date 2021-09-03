//  custom-select
// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll('.select');

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
	select.forEach(item => {
		// достаем из текущей сущности .select__current
		const selectCurrent = item.querySelector('.select__current');

		item.addEventListener('click', event => {
			const el = event.target.dataset.choice;
			const text = event.target.innerText;

			// Проверяем является ли это choosen и не выбрано ли его значение уже
			if (el === 'choosen' && selectCurrent.innerText !== text) {
				selectCurrent.innerText = text;
			}

			item.classList.toggle('is-active');
		});
	})
}




// range slider
const getPercentageInRange = (value, min, max) => ((value - min) * 100) / (max - min)

let slider = document.getElementById("rangeSlider");
let output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

let startValue = slider.getAttribute("value");

let minValue = slider.getAttribute("min");
let maxValue = slider.getAttribute("max");
let x = getPercentageInRange(startValue, minValue, maxValue);


let color = 'linear-gradient(90deg, rgb(197, 0, 255)' + x + '%; , rgb(248, 227, 255)' + x + '%)';
slider.style.background = color;

slider.addEventListener("mousemove", function() {
  x = getPercentageInRange(slider.value, minValue, maxValue)
    color = 'linear-gradient(90deg, rgb(197, 0, 255)' + x + '% , rgb(248, 227, 255)' + x + '%)';
    slider.style.background = color;

});



