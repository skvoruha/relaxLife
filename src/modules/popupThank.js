export const popupThank = () =>{

  document.body.style.overflow = 'hidden'

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
        document.body.style.overflow = ''
      popupThank.classList.remove('visibility-visible')
    }
  })

  for (let i = 0; i < 20; i++) {
    const element = document.getElementById(`checkbox${i}`)
    if (element) {
      element.checked = false;
    }
  }

  setTimeout(() => {
    document.body.style.overflow = ''
    popupThank.classList.remove('visibility-visible')
  }, 3000);
}