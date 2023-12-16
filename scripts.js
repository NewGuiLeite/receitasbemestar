const modalOverlay = document.querySelector('.modal_overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        cardId = card.getAttribute('id')
        cardName = card.querySelector('p.nome').innerHTML
        cardChef = card.querySelector('p.chef').innerHTML
        modalOverlay.querySelector('img').src = `assets/${cardId}.png`
        modalOverlay.querySelector('h1').innerHTML = cardName
        modalOverlay.querySelector('p').innerHTML = cardChef
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.modal_close').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
    modalOverlay.querySelector('h1').innerHTML = null
    modalOverlay.querySelector('p').innerHTML = null
})

function searchRecipes() {
    // Adicione o código de pesquisa aqui
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Iterar sobre os cards para verificar correspondências
    for (let card of cards) {
        const cardName = card.querySelector('p.nome').innerHTML.toLowerCase();
        const cardChef = card.querySelector('p.chef').innerHTML.toLowerCase();

        // Se o termo de pesquisa estiver no nome ou no chef, mostrar o card
        if (cardName.includes(searchTerm) || cardChef.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
