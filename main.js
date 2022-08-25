document.querySelector('#search').addEventListener('click', getPokemon);

function capitalizedFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector('#pokemon-name').value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((Response) => Response.json()).then((data) => {
    document.querySelector('.pokemon-box').innerHTML = 
    `
      <div class="container-wrap">
      <div class = container>
          <div class = card>
              <div class = image>
                  <img href = "#" src = ${data.sprites.other["official-artwork"].front_default}>
              </div>
              <div class = content>
                  <h2 class="pokemon-name"> ${capitalizedFirstLetter(data.name)} </h3>
                  <div class = "pokemon-stats-main">
                    <h3 class="pokemon-stats1">ID: ${data.id} </h3>
                    <h3 class="pokemon-stats2">Type: ${data.types[0].type.name}</h3>
                  </div>
                  <div class = "pokemon-powers">
                  <h3>Powers: </h3>
                  <h3>  ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name} </h3>
                  </div>
              </div>
          </div>    
      </div>
  </div>
    `
}).catch((err) => {
    console.log('Pokemon Not Found', err)
  })

  e.preventDefault();
};

// getPokemon();
