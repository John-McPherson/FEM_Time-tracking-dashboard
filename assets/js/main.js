const myRequest = new Request('./assets/json/data.json');

let cards = {};
let selection = 'weekly';
let selectionText = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
}

fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
        cards = data
        populateCards(cards);
    })
    .catch(console.error);



function populateCards(cards) {
    let html = '';
    cards.map((card) => {
        if (card) {
            html += `<div class="grid__item timetracker__card ${card.title.toLowerCase().replace(' ', "-")}">
            <div class="timetracker__card__header">
            <h2>${card.title} <span class="timetracker__card__header__dots">...</span></h2>
            <h3>${card.timeframes[selection].current}hrs</h3>
            <p>${selectionText[selection]} - ${card.timeframes[selection].previous}hrs</p>
            </div>
            </div>`
        }
    })
    document.getElementById('timetracker__cards').innerHTML = html

}

window.onload = function () {

    document.querySelectorAll('button').forEach(button => {
        button.onclick = function (e) {
            selection = e.target.dataset.val
            let activeBtns = document.getElementsByClassName('selection--active')
            for (activeBtn of activeBtns) {
                activeBtn.classList.remove('selection--active')
            }
            e.target.classList.add('selection--active')
            populateCards(cards)
        };
    })


};