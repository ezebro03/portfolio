const menuIcon = document.getElementById('menu')
const closeButton = document.getElementById('close')
const sideBar = document.getElementById('sidebar')

menuIcon.addEventListener('click', function () {
    sideBar.style.display = 'block'
})

closeButton.addEventListener('click', function() {
    sideBar.style.display = 'none'
})