const options = {method: 'GET'};

fetch('https://api.punkapi.com/v2/beers', options)
  .then(response => response.json())
  .then(beers =>{
    // console.table(response) 

    const beersSection = document.querySelector("#beers");
    for (let beer of beers) {
      // console.log(todo);
    
      const htmlContent = `
      <article>
      <h2 class="${beer.id}">${beer.name}</h2>
      <div class="img">
      <img id="img${beer.id}" src="${beer.image_url}">
    </div>
      <p class="${beer.id}">${beer.tagline}</p>
      <p class="${beer.id}">Appearance date : ${beer.first_brewed}</p>
      <p class="${beer.id}">${beer.description}</p>
  </div>
      </article>
      `;
    
      beersSection.innerHTML += htmlContent;
    }
})
  .catch(err => console.error(err));


