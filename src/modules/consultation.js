// button_wide

const consultation = () =>{
  const popupConsultation = document.querySelector('.popup-consultation')

  document.addEventListener('click', (e)=>{
    if (e.target.closest('.button_wide')) {
      document.body.style.overflow = 'hidden'
      popupConsultation.classList.add('visibility-visible')
    }
  })

  popupConsultation.addEventListener('click',(e)=>{
    if (e.target.closest('.close.close-consultation') ||
        (popupConsultation.classList.contains('visibility-visible') &&
        (!e.target.closest('.feedback-wrap')))) {
      document.body.style.overflow = ''
      popupConsultation.classList.remove('visibility-visible')
    }
})

}
export default consultation