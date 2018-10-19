var filters = document.getElementById('filters')
var liTab = filters.querySelectorAll('li')
var filter = 'all'

var cases = document.querySelectorAll('[data-project]')

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

function onMouseEnter() {
  cases.forEach(el => el.classList.remove('active'))
  this.classList.add('active')

  const project = projects.find(p => p.slug === this.dataset.project)
  console.log('on mouse enter', project.name)
}

function onMouseLeave() {
  console.log(filter)
  setOpacity(filter)
  console.log('on mouse leave')
}
