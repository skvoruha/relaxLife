const privacyPolicy = () =>{

  const linkPrivacy = document.querySelectorAll('.link-privacy')
  const popupPrivacy = document.querySelector('.popup.popup-privacy')

  const openPrivacy = () =>{
    popupPrivacy.classList.add('visibility-visible')
  }
  const closePrivacy = () =>{
    popupPrivacy.classList.remove('visibility-visible')
  }

  linkPrivacy.forEach(e => {
    e.addEventListener('click', openPrivacy)
  });

  popupPrivacy.addEventListener('click', (e)=>{
    if (e.target.closest('.close.mobile-hide') || !e.target.closest('.popup-dialog.popup-dialog-privacy')) {
      closePrivacy()
    }
  })

}

export default privacyPolicy