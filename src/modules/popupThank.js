export const popupThank = () =>{

  const activePopup = document.querySelector('.visibility-visible')
  if (activePopup) {
    activePopup.classList.remove('visibility-visible')
  }

  const popupThank = document.querySelector('.popup-thank')
  document.body.style.overflow = 'hidden'
  popupThank.classList.add('visibility-visible')

  popupThank.addEventListener('click',(e)=>{

    if (e.target.closest('.close-thank') ||
       (!e.target.closest('.feedback-wrap') &&
       popupThank.classList.contains('visibility-visible'))) {
        document.body.style.overflow = ''
      popupThank.classList.remove('visibility-visible')
    }
  })

  setTimeout(() => {
    document.body.style.overflow = ''
    popupThank.classList.remove('visibility-visible')
  }, 3000);
}