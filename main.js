window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //topo da section
  const sectionTop = section.offsetTop
  //altura da section
  const sectionHeight = section.offsetHeight

  //verificar se o topo passou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  console.log('o topo Passou da linha?', sectionTopReachOrPassedTargetLine)

  //fim da section
  const sectionEndsAt = sectionTop + sectionHeight

  //verificar se o final da section passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('o fundo Passou da linha?', sectionEndPassedTargetLine)

  //limites da section
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  //pega o id=apelido da section
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 0) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`)
