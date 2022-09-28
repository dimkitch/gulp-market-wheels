window.addEventListener('load', function () {
  $('.header__burger').click(function (event) {
    $('.header,.header__burger,.nav').toggleClass('active')
    $('body').toggleClass('hide-scroll')
  })

  let header = document.querySelector('.header')

  window.addEventListener('scroll', (event) => {
    if (window.scrollY > 100) header.classList.add('header--scroll')
    else if (window.scrollY < 100) header.classList.remove('header--scroll')
  })

  let btnShowFullMenuInHeader = document.querySelector(
    '[data-js="show-full-menu"]'
  )
  if (btnShowFullMenuInHeader) {
    btnShowFullMenuInHeader.addEventListener('click', (e) => {
      header.classList.toggle('header--show-menu')
      e.currentTarget.classList.toggle('header__show-more--is-show-full')
    })
  }
})
