const questions = () =>{
  const faq = document.getElementById('faq')


  faq.addEventListener('click',(e)=>{
    if (e.target.closest('.title_block')) {
      const msqActive = faq.querySelector('.msg-active')
      if (e.target.closest('.title_block') == msqActive) {
        msqActive.classList.remove('msg-active')
        return
      }
      if (msqActive) {
        msqActive.classList.remove('msg-active')
      }
      e.target.classList.add('msg-active')
    }
  })
}

export default questions