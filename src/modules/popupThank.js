export const popupThank = () =>{

  const activePopup = document.querySelector('.visibility-visible')
  if (activePopup) {
    activePopup.classList.remove('visibility-visible')
  }

  const popupThank = document.querySelector('.popup-thank')
  popupThank.classList.add('visibility-visible')

  popupThank.addEventListener('click',(e)=>{

    if (e.target.closest('.close-thank') ||
       (!e.target.closest('.feedback-wrap') &&
       popupThank.classList.contains('visibility-visible'))) {

      popupThank.classList.remove('visibility-visible')
    }
  })
}