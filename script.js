const openModal = document.getElementById('open-modal')
const closeModal = document.getElementById('close-modal')

openModal.addEventListener('click', function() {
  const over = document.getElementById('overlay')
  over.style.display= "block"
})

closeModal.addEventListener('click', function() {
  const modal = document.getElementById('overlay')
  modal.style.display= "none"
})