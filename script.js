const filters = document.getElementById('filters')
const liTab = filters.querySelectorAll('li')
let filter = 'all'
let popupVisibility = false

const cases = document.querySelectorAll('[data-project]')

const wrapperPopup = document.getElementById('wrapper-popup')
const popup = document.getElementById('popup')
const popupImage = popup.getElementsByTagName('img')[0]
const popupCross = popup.getElementsByClassName('croix')[0]

const about = document.getElementById('about')

popupCross.addEventListener('click', this.hidePopup)
wrapperPopup.addEventListener('click', this.hidePopup)

document.getElementById('show-about').addEventListener('click', e => {
  e.preventDefault()
  about.classList.contains('visible')
    ? about.classList.remove('visible')
    : about.classList.add('visible')
})

document.getElementById('scroll-bottom').addEventListener('click', () => {
  window.scroll(0, window.scrollY + 100)
})

document.getElementById('scroll-top').addEventListener('click', () => {
  window.scroll(0, window.scrollY - 100)
})

const fields = {
  global: document.getElementById('fields'),
  name: document.getElementById('name'),
  media: document.getElementById('media'),
  customer: document.getElementById('customer'),
  category: document.getElementById('category'),
  year: document.getElementById('year'),
  type: document.getElementById('type'),
  comment: document.getElementById('comment'),
  technologies: document.getElementById('technologies')
}

liTab.forEach(el => el.addEventListener('click', sort))
cases.forEach(el => {
  el.classList.add('active')
  el.addEventListener('mouseenter', onMouseEnter)
  el.addEventListener('click', onMouseClick.bind(this, el))
  el.addEventListener('mouseleave', onMouseLeave)
})

function hidePopup() {
  document.body.classList.remove('no-overflow')
  popupVisibility = false
  cases.forEach(el => el.classList.add('active'))
  wrapperPopup.classList.remove('visible')
}

function showPopup() {
  document.body.classList.add('no-overflow')
  popupVisibility = true
  cases.forEach(el => el.classList.remove('active'))
  wrapperPopup.classList.add('visible')
}

function sort() {
  if (this.dataset.sort === filter) return
  filter = this.dataset.sort

  liTab.forEach(el => el.classList.remove('active'))
  cases.forEach(el => el.classList.remove('active'))
  this.classList.add('active')

  setOpacity(this.dataset.sort)
}

function setOpacity(sort) {
  if (sort === 'all') {
    cases.forEach(el => el.classList.add('active'))
  } else {
    cases.forEach(el => {
      const project = projects.find(p => p.slug === el.dataset.project)
      if (project && project.category === sort) {
        el.classList.add('active')
      }
    })
  }
}

function setInformations(slug) {
  const project = projects.find(p => p.slug === slug)

  fields.name.innerHTML = project.name || ''
  fields.media.innerHTML = project.media || ''
  fields.customer.innerHTML = project.customer || ''
  fields.category.innerHTML = project.category || ''
  fields.year.innerHTML = project.year || ''
  fields.type.innerHTML = project.type || ''

  if (project.comment && project.comment.length > 0) {
    fields.comment.innerHTML = ''
    project.comment.forEach(c =>
      fields.comment.appendChild(createListElement(c))
    )
  }

  if (project.technologies && project.technologies.length > 0) {
    fields.technologies.innerHTML = ''
    project.technologies.forEach(c =>
      fields.technologies.appendChild(createListElement(c))
    )
  }
}

function createListElement(content) {
  const el = document.createElement('li')
  el.innerHTML = content
  return el
}

function onMouseEnter() {
  about.classList.remove('visible')
  if (popupVisibility) return
  const project = projects.find(p => p.slug === this.dataset.project)
  if (project.category !== filter && filter !== 'all') return

  setInformations(project.slug)
  fields.global.classList.add('active')
  cases.forEach(el => el.classList.remove('active'))
  this.classList.add('active')
}

function onMouseClick(el) {
  const project = projects.find(p => p.slug === el.dataset.project)
  if (project.category !== filter && filter !== 'all') return

  try {
    const img = el.getElementsByTagName('img')[0]
    popupImage.src = img.src
    showPopup()
  } catch {
    console.log('No img on this element')
  }
}

function onMouseLeave() {
  if (popupVisibility) return
  if (fields.global.classList.contains('active'))
    fields.global.classList.remove('active')
  setOpacity(filter)
}
