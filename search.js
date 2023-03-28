const submit = document.querySelector("#submit");

submit.addEventListener("click", async function search() {
  // Récupération de l'élément input et de sa valeur
  const searchInput = document.getElementById("search");
  const query = searchInput.value;

  // Construction de l'URL de l'API Punk en fonction de la recherche
  const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;

  // Récupération des données de l'API Punk
  const response = await fetch(url);
  const data = await response.json();

  // Affichage des résultats dans la div "results"
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  if (data.length === 0) {
    resultsDiv.innerHTML = "Aucune bière trouvée.";
  } else {
    data.forEach((beer) => {
      const beerDiv = document.createElement("duff");
      beerDiv.classList.add("container");
      beerDiv.innerHTML = `
        <div class="article2">
        <h2 class="${beer.id}">${beer.name}</h2>
        <div class="img">
        <img id="img${beer.id}" src="${beer.image_url}">
      </div>
        <p class="${beer.id}">${beer.tagline}</p>
        <p class="${beer.id}">Appearance date : ${beer.first_brewed}</p>
        <p class="${beer.id}">${beer.description}</p>
    </div>
			`;
      resultsDiv.appendChild(beerDiv);
    });
  }
});