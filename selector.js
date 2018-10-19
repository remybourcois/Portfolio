var filters = document.getElementById('filters')
var liTab = filters.querySelectorAll('li')

var cases = document.querySelectorAll("[data-project]")

liTab.forEach(el => el.addEventListener('click', active))
cases.forEach(el => {
  el.classList.add('active')
})

function active() {
  if (this.dataset.sort === active) return
  active = this.dataset.sort

  liTab.forEach(el => el.classList.remove('active'))
  this.classList.add('active')

  if (this.dataset.category === 'all') {
    cases.forEach(el => !el.classList.contains('active') && el.classList.add('active'))
  } else {
    cases.forEach(el => {
      const project = projects.find(p => p.slug === el.dataset.project)
      if (project && project.category === this.dataset.category) {
        !project.classList.contains('active') && project.classList.add('active')
      }
    })
  }

}
//
// function onMouseEnter() {
//
// }
//
// function onMouseLeave() {
//
// }
