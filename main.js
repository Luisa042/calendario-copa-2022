function createGame(player1, player2, time) {
    return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}" />
        <strong>${time}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}" />
      </li>
    `
}

function createCard(date, weekDay) {
    return `
    <div class="card">
      <h2>${date} <span>${weekDay}</span></h2>
      <ul>
      ${createGame('brazil', 'serbia', '16:00')}
      </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = `
    ${createCard('24/11', 'quinta')}
    ${createCard('25/11', 'sexta')}
`;
