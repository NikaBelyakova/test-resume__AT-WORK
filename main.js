// Слайдер
new Swiper ('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Навигация
    //Буллеты, текущее пололжение, прогресс-бар
    pagination: {
        el: '.swiper-pagination',
       //Фракция
       type: 'fraction',
       // Кастомный вывод фракции
       renderFraction: function (currentClass, totalClass) {
           return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
       },
    },

    //Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true,
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетакивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение на слайд при клике на него
    slideToClickedSlide: true,

    //Навигация по хэшу
    hashNavigation: {
        //Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Вкл/выкл
        enabled: true,
        // Вкл/выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // Вкл/выкл управление клавишами pageUp, pageDown
        pageUpDown: true,
    },
    
    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensivity: 1,
        // Класс объекта, на котором будет срабатывать прокрутка мышью
        eventsTarget: '.image-slider',
    },

    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа (можно указывать дробные числа)
    slidesPerView: 1,

    // Отключение функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Колчисевто пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    // centeredSlides: true,

    // Стартовый слайд
    initialSlide: 1,

    // Бесконечность (не оаботает со скроллом,несколькиими рядами и если slidesPerView: auto, то надо вручную добавить кроичество дублирующих слайдов - loopedSlides)
    loop: true,

    // Количество дуюлирующих слайдов
    loopedSlides: 3,

    // Свободный режим
    freeMode: true,

    // Скорость переключения слайдов
    speed: 800,
    effect: 'slide',
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    breakpoints: {
        '@0.75': {
            slidesPerView: 1,
        },
        '@1.00': {
            slidesPerView: 2,
        },
        '@1.50': {
            slidesPerView: 3,
        },
    },


    // Отключить предзагрузку картинок
    preloadImages: false,
    // Lazy loading (подгрузка картинок)
    lazy: {
        // Подгружать на старте переключения файла
        loadOnTransitionStart: false,
        // Подгрудать пердыдущую и след картинки
        loadPrevNext: false,
    },
    // Слежка за видимымми файлами ВКЛЮЧАТЬ НАСТРОЙКИ СТОИТ ТОГДА, КОГДА slidesPerView = AUTO ИЛИ БОЛЬШЕ, ЧЕМ 1
    watchSlidesProgress: true,
    // Добавление класа видимым слайдам
    watchSlidesVisibility: true,
    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRatio: 2,
        //  Минимальное увеличение
        minRatio: 1,
    },
});


// Скрыть или показать подбробнее опыт работы
let btns = document.querySelectorAll('.btn-more');
for (btn of btns) {
  btn.addEventListener('click', function() {
    let experienceList = this.closest('.experience-list')
    let dots = experienceList.querySelector('.dots');
    let more = experienceList.querySelector('.more');
    if(dots.style.display === 'none') {
      dots.style.display = 'inline';
      more.style.display = 'none';
      this.textContent = 'Подробнее';
    } else {

      dots.style.display = 'none';
      more.style.display = 'inline';
      this.textContent = 'Скрыть';
    }
  });
}


// Фиксированная шапка при скролле
let header = document.querySelector('.scroll-header');
let btnPrint = document.querySelector('.print');
let scrollShowInfo = document.querySelector('.scroll-shown');
let offerButton = document.querySelector('.offer-button');

window.onscroll = function showHeader () {
    if (window.pageYOffset > 150) {
        header.classList.add('scroll-header-fixed');
        btnPrint.style.display = "none";
        scrollShowInfo.style.display = "flex";
        offerButton.classList.add('sticky');
    } else {
        header.classList.remove('scroll-header-fixed');
        btnPrint.style.display = "block";
        scrollShowInfo.style.display = "none";
        offerButton.classList.remove('sticky');
    };
};


// Попапы
const popupButtons = document.querySelectorAll('.popup-button');
const popupCloseButtons = document.querySelectorAll('.popup__close');


for (let index = 0; index < popupButtons.length; index++) {
    const popupButton = popupButtons[index];
    popupButton.addEventListener('click', function() {
        const popupName = popupButton.getAttribute('name');
        const currentPopup = document.getElementById(popupName);
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });

        // Отправленное приглашение
        const offers = document.querySelectorAll('.offer__item');
        const offerBtn = document.querySelector('.offer-btn');
        const like = document.querySelector('.like').querySelector('svg');
        const stroke = like.querySelector('path');

        for (let index = 0; index < offers.length; index++) {
            const offer = offers[index];
            offer.addEventListener('click', function () {
                offerBtn.textContent = 'Приглашение отправлено ✓';
                offerBtn.style.fontSize = "14px";
                like.style.fill = '#EF1C31';
                stroke.style.stroke = '#EF1C31';
                popupClose(currentPopup);
            });
        }

    });
    
}

for (let index = 0; index < popupCloseButtons.length; index++) {
    const popupCloseButton = popupCloseButtons[index];
    popupCloseButton.addEventListener('click', function() {
        const popupName = popupCloseButton.getAttribute('name').replace('-cancel', '');
        const currentPopup = document.getElementById(popupName);
        popupClose(currentPopup);
    });
}

function popupClose (currentPopup) {
    currentPopup.classList.remove('open');
}



// Динамический адаптив
"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = "min"; //Для MobileFirst поменять на min

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return 1 } else { return -1 } //Для MobileFirst поменять
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());




// Аккордеон
let acc = document.getElementsByClassName('accordion');
let index;

for (index = 0; index < acc.length; index++) {
    acc[index].addEventListener('click', function() {
        this.classList.toggle('active');

        let inward = this.nextElementSibling;
        if (inward.style.maxHeight) {
            inward.style.maxHeight = null;
        } else {
            inward.style.maxHeight = inward.scrollHeight + 'px';
        }

    }
    );
}