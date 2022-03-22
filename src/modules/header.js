import {animate} from './helpers'

const header =() =>{
  const headerContactsArrow = document.querySelector('.header-contacts')
  const headerContactPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord')
  const headerContactsPhoneNumber = headerContactPhoneNumberAccord.querySelector('.header-contacts__phone-number')

  let count = 1
  headerContactsArrow.addEventListener('click', (e)=>{
    //  клик по стрелочке
    if (e.target.closest('.header-contacts__arrow > img')) {
      count++;
      if (count > 1) {
        animate({
          duration: 200,
          timing(timeFraction) {
            return Math.pow(timeFraction, 3)
          },
          draw(progress) {
            headerContactPhoneNumberAccord.style.top = `${progress * 25}px`
            headerContactsPhoneNumber.style.opacity = progress
            e.target.style.transform = 'rotate(180deg)'
            count = 0
          }
        });
      } else {
        headerContactPhoneNumberAccord.style.top = 0
        headerContactsPhoneNumber.style.opacity = 0
        e.target.style.transform = 'rotate(0deg)'
        count = 1
      }
    }
    // закрытие кнопки
  })
}

export default header