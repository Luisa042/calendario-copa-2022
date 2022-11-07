function createGame(player1, player2, time) {
  return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}" />
        <strong>${time}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}" />
      </li>
    `;
}

let delay = -0.2;
function createCard(date, weekDay, games) {
  delay += 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s;">
      <h2>${date} <span>${weekDay}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
    `;
}

document.querySelector('#cards').innerHTML =
  createCard(
    '24/11',
    'quinta',
    createGame('uruguay', 'south-korea', '10:00') +
      createGame('brazil', 'serbia', '16:00')
  ) +
  createCard(
    '28/11',
    'segunda',
    createGame('brazil', 'switzerland', '13:00') +
      createGame('portugal', 'uruguay', '16:00')
  ) +
  createCard(
    '02/12',
    'sexta',
    createGame('ghana', 'uruguay', '12:00') +
      createGame('cameroon', 'brazil', '16:00')
  );
