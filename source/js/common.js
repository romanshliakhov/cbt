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

// dropdown
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

		dropDownBtn.addEventListener('click', function (e) {
    console.log("click :>> ", "dropDownBtn");
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
      console.log("click :>> ", "dropDownListItem");
			e.stopPropagation();
			dropDownBtn.innerHTML = this.innerHTML;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
      this.classList.remove('dropdown__button--active');
		});
	});

	document.addEventListener('click', function (e) {
    console.log("click :>> ", dropDownBtn.contains(e.target));
		if (!dropDownBtn.contains(e.target)) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

