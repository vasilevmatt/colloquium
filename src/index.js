import './main.html'



import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.scss'


// menu overlay and desktop menu bar buttons

let burgerButton = document.querySelector('.header__burger')
let burgerMenu = document.querySelector('.menu')
burgerButton.addEventListener('click', function () {
    burgerMenu.classList.add('menu--visible')
})

let burgerMenuCloseButton = document.querySelector('.menu__close-button')
burgerMenuCloseButton.addEventListener('click', function () {
    burgerMenu.classList.remove('menu--visible')
})

// menu's backdrop is clickable 

let burgerBackdrop = document.querySelector('.menu__backdrop')
burgerBackdrop.addEventListener('click', function () {
    burgerMenu.classList.remove('menu--visible')
})

// first swiper

let ButtonHidedSlides = document.querySelectorAll('#hidden-slide')
let width = window.innerWidth

document.addEventListener('DOMContentLoaded', () => {
    if (width < 768) {
        for (let i = 0; i < ButtonHidedSlides.length; i++) {
            ButtonHidedSlides[i].classList.remove('brand-slide--invisible')
        }
        new Swiper('.swiper-container', {
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            grabCursor: true,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,

            a11y: {
                enabled: true
            }
        });
    } else {

        let brandList = document.querySelector('.swiper-wrapper')

        let mediumDisplaySlides = document.querySelectorAll('#medium-display-slide')


        let showAllButton = document.querySelector('#show-all-button')
        let showAllButtonText = showAllButton.querySelector('.show-all-button-text')
        let showAllButtonIsClicked = false
        let showAllButtonElement = showAllButton.querySelector('.show-all-button-element')

        showAllButton.classList.remove('visually-hidden')
        showAllButton.classList.add('show-all-button')

        if (width < 1120) {
            for (let i = 0; i < mediumDisplaySlides.length; i++) {
                mediumDisplaySlides[i].classList.add('brand-slide--invisible')
            }
        }



        brandList.classList.add('brand-list')



        showAllButton.addEventListener('click', function (evt) {
            evt.preventDefault();

            let defaultText = 'Показать все'
            let closeText = 'Скрыть'




            if (showAllButtonIsClicked === false) {
                showAllButtonText.textContent = closeText
                showAllButtonElement.classList.add('show-all-button-clicked-element')
                for (let i = 0; i < ButtonHidedSlides.length; i++) {
                    ButtonHidedSlides[i].classList.remove('brand-slide--invisible')
                }
                for (let i = 0; i < mediumDisplaySlides.length; i++) {
                    mediumDisplaySlides[i].classList.remove('brand-slide--invisible')
                }


            } else {
                showAllButtonText.textContent = defaultText;
                showAllButtonElement.classList.remove('show-all-button-clicked-element')
                for (let i = 0; i < ButtonHidedSlides.length; i++) {
                    ButtonHidedSlides[i].classList.add('brand-slide--invisible')
                }
                if (width < 1120) {
                    for (let i = 0; i < mediumDisplaySlides.length; i++) {
                        mediumDisplaySlides[i].classList.add('brand-slide--invisible')
                    }
                }
            }
            showAllButtonIsClicked = !showAllButtonIsClicked;

        });

    }
})





// second swiper

let ButtonHidedServiceSlides = document.querySelectorAll('#hidden-service-slide')

document.addEventListener('DOMContentLoaded', () => {
    if (width < 768) {
        for (let i = 0; i < ButtonHidedServiceSlides.length; i++) {
            ButtonHidedServiceSlides[i].classList.remove('service-slide--invisible')
        }
        new Swiper('.swiper-second__container', {
            slideClass: 'swiper-second__slide',
            wrapperClass: 'swiper-second__wrapper',
            modules: [Pagination],
            pagination: {
                el: '.swiper-second__pagination',
                clickable: true,
            },
            grabCursor: true,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,

            a11y: {
                enabled: true
            }
        });
    } else {

        let serviceList = document.querySelector('.swiper-second__wrapper')

        let mediumDisplayServiceSlides = document.querySelectorAll('#medium-display-service-slide')


        let ServiceListShowAllButton = document.querySelector('#service-list-show-all-button')
        let ServiceListShowAllButtonText = ServiceListShowAllButton.querySelector('.service-list-show-all-button-text')
        let ServiceListShowAllButtonIsClicked = false
        let ServiceListShowAllButtonElement = ServiceListShowAllButton.querySelector('.service-list-show-all-button-element')

        ServiceListShowAllButton.classList.remove('visually-hidden')
        ServiceListShowAllButton.classList.add('service-list-show-all-button')

        if (width < 1120) {
            for (let i = 0; i < mediumDisplayServiceSlides.length; i++) {
                mediumDisplayServiceSlides[i].classList.add('service-slide--invisible')
            }
        }



        serviceList.classList.add('service-list')



        ServiceListShowAllButton.addEventListener('click', function (evt) {
            evt.preventDefault();

            let defaultText = 'Показать все'
            let closeText = 'Скрыть'




            if (ServiceListShowAllButtonIsClicked === false) {
                ServiceListShowAllButtonText.textContent = closeText
                ServiceListShowAllButtonElement.classList.add('service-list-show-all-button-clicked-element')
                for (let i = 0; i < ButtonHidedServiceSlides.length; i++) {
                    ButtonHidedServiceSlides[i].classList.remove('service-slide--invisible')
                }
                for (let i = 0; i < mediumDisplayServiceSlides.length; i++) {
                    mediumDisplayServiceSlides[i].classList.remove('service-slide--invisible')
                }


            } else {
                ServiceListShowAllButtonText.textContent = defaultText;
                ServiceListShowAllButtonElement.classList.remove('service-list-show-all-button-clicked-element')
                for (let i = 0; i < ButtonHidedServiceSlides.length; i++) {
                    ButtonHidedServiceSlides[i].classList.add('service-slide--invisible')
                }
                if (width < 1120) {
                    for (let i = 0; i < mediumDisplayServiceSlides.length; i++) {
                        mediumDisplayServiceSlides[i].classList.add('service-slide--invisible')
                    }
                }
            }
            ServiceListShowAllButtonIsClicked = !ServiceListShowAllButtonIsClicked;

        });

    }
})


// price list swiper

document.addEventListener('DOMContentLoaded', () => {
    if (width < 768) {
        let HiddenPriceListHeader = document.querySelector('.price-slide--desktop-table-header')
        HiddenPriceListHeader.classList.add('visually-hidden')
        HiddenPriceListHeader.classList.remove('price-slide')
        new Swiper('.price-list', {
            slideClass: 'price-slide',
            wrapperClass: 'price-list__swiper-wrapper',
            modules: [Pagination],
            pagination: {
                el: '.price-list__pagination',
                clickable: true,
            },
            grabCursor: true,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,

            a11y: {
                enabled: true
            }
        });
    } else {

        // adding desktop classes for a price list wrapper

        let priceListWrapper = document.querySelector('.price-list__swiper-wrapper')
        priceListWrapper.classList.remove('price-list__swiper-wrapper')
        priceListWrapper.classList.add('price-list__desktop-wrapper')

        // BEM modifications for a table view

        let priceSlide = document.querySelectorAll('.price-slide')
        let priceListSlideWrapper = document.querySelectorAll('.price-slide-wrapper')
        for (let i = 0; i < priceListSlideWrapper.length; i++) {
            priceSlide[i].classList.add('price-slide--desktop')
            priceListSlideWrapper[i].classList.add('price-slide-wrapper--desktop')
        }

        // Hiding slides' category names in rows

        let priceSlideCategories = document.querySelectorAll('.price-slide__category')
        for (let i = 0; i < priceSlideCategories.length; i++) {
            priceSlideCategories[i].classList.add('price-slide__category--invisible')
        }

        // Button positioning 

        let priceSlideButton = document.querySelectorAll('.price-slide__button')
        for (let i = 0; i < priceSlideButton.length; i++) {
            priceSlideButton[i].classList.add('price-slide__button--desktop-view')
        }

        // Aligning text in rows

        let priceSlidePrice = document.querySelectorAll('.price-slide__price')
        let priceSlideTitle = document.querySelectorAll('.price-slide__title')
        let priceSlideTime = document.querySelectorAll('.price-slide__time')
        for (let i = 0; i < priceSlidePrice.length; i++) {
            priceSlidePrice[i].classList.add('price-slide__price--desktop-view')
            priceSlideTitle[i].classList.add('price-slide__title--desktop-view')
            priceSlideTime[i].classList.add('price-slide__time--desktop-view')
        }
    }
})







/* when menu is opened */
document.querySelectorAll("#open-menu-button").forEach((button) => {
    button.addEventListener('click', function () {
        document.querySelector("body").style.overflow = 'hidden';
    })
})

/* when menu is closed */
document.querySelectorAll("#close-menu-button").forEach((button) => {
    button.addEventListener('click', function () {
        if (!burgerMenu.classList.contains('menu--visible')) { 
            document.querySelector("body").style.overflow = 'visible'; 
        }
    })
})