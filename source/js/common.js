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
// клик по кнопке
document.querySelector('.dropdown__button').addEventListener('click', function () {
  document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
  this.classList.add('dropdown__button--active')
});

// Выбор элемента из списка. Запомнить выбранное значение. Закрыть дропдаун
document.querySelectorAll('.dropdown__list-item').forEach(function (listItem) {
  listItem.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.dropdown__button').innerHTML = this.innerHTML;
    document.querySelector('.dropdown__button').focus();
    document.querySelector('.dropdown__button').add
    document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
    document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
  });
});

// Клик снаружи. Закрыть дропдаун
document.addEventListener('click', function (e) {
  if (e.target !== document.querySelector('.dropdown__button')) {
    document.querySelector('.dropdown__button').classList.remove('dropdown__button--active');
    document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
  };
});

// Закрыть клавишей ESC и TAB
document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape' ) {
    document.querySelector('.dropdown__button').classList.remove('dropdown__button--active');
    document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
  };
});

