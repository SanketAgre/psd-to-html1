const toggleBtn=document.getElementsByClassName('toggle-button')[0]
const navItoms=document.getElementsByClassName('navItom')[0]

toggleBtn.addEventListener('click', () => {
    navItoms.classList.toggle('active')
})