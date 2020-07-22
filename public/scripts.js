// pegar o modal-overlay
const modalOverlay = document.querySelector('.modal-overlay')

// pegar o modal
const modal = document.querySelector('.modal')

// pegar os cards
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    // ao clicar em algum card adiciona a class active.
    card.addEventListener("click", function(){
        const cardId = card.getAttribute('id')
        window.location.href = `/courses/${cardId}`
    })
}

