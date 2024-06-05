import './main.html'



import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.scss'




let ButtonHidedSlides = document.querySelectorAll('#hidden-slide')

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
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