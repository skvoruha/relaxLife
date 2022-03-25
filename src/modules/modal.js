const modal = () =>{

  const portfolio = document.getElementById('portfolio')
  const popupPortfolio = document.querySelector('.popup-portfolio')
  const portfolioModal = document.querySelector('.popup-dialog-portfolio')

  // popup-dialog-portfolio
  const openPortfolioModal = (e)=>{
    portfolioModal.classList.add('visibility-visible')
  }
  const closePortfolioModal = (e)=>{
    portfolioModal.classList.remove('visibility-visible')
  }

  document.addEventListener('click',(e)=> {
    console.log(e.target.closest('.popup-dialog-portfolio'));
    if (e.target.closest('.portfolio-slider__slide-frame')) {
      openPortfolioModal()
    }
    // if (!e.target.closest('.popup-dialog-portfolio')) {
    //   closePortfolioModal()
    // }
  })

  // portfolio-slider__slide-frame


}

 export default modal