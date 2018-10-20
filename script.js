const filters = document.getElementById('filters')
const liTab = filters.querySelectorAll('li')
let filter = 'all'

const cases = document.querySelectorAll('[data-project]')

const fields = {
  global: document.getElementById('fields'),
  name: document.getElementById('name'),
  media: document.getElementById('media'),
  customer: document.getElementById('customer'),
  category: document.getElementById('category'),
  year: document.getElementById('year'),
  type: document.getElementById('type'),
  contributors: document.getElementById('contributors'),
  technologies: document.getElementById('technologies')
}

liTab.forEach(el => el.addEventListener('click', sort))
cases.forEach(el => {
  el.classList.add('active')
  el.addEventListener('mouseenter', onMouseEnter)
  el.addEventListener('mouseleave', onMouseLeave)
})

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

  if (project.contributors && project.contributors.length > 0) {
    fields.contributors.innerHTML = ''
    project.contributors.forEach(c =>
      fields.contributors.appendChild(createListElement(c))
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
  const project = projects.find(p => p.slug === this.dataset.project)
  if (project.category !== filter && filter !== 'all') return

  setInformations(project.slug)
  fields.global.classList.add('active')
  cases.forEach(el => el.classList.remove('active'))
  this.classList.add('active')
}

function onMouseLeave() {
  if (fields.global.classList.contains('active'))
    fields.global.classList.remove('active')
  setOpacity(filter)
}
