const cardsContainer = document.getElementById('box');


// Read the local JSON file using XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET', '/assets/poems.json');
request.responseType = 'json';
request.onload = function() {
const data = request.response;

  // Loop through the JSON data and create HTML cards
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div id="${data[i].id}" class="card">
				<h5 id="${data[i].id}-modalTitle">${data[i].title}</h5>
				<div class="pra">
					<p id="${data[i].id}-content" class="content">${data[i].poem}</p>
					<p>
						<button class="button" id="button-more" onclick="openModal(${data[i].id});" >Devamını Oku</button>
					</p>
				</div>
			</div>`;
    cardsContainer.appendChild(card);
  }
};

request.send();
