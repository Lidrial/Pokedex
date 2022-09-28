import { getPokemon } from "./modules/fiche_pkmn.js"
import { pkmnUrl } from "./modules/fiche_pkmn.js"
var pokedexOffset = 0
var pokedexLimit = 50


function getAllPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokedexLimit}&offset=${pokedexOffset*pokedexLimit}`)
        .then(response => response.json())
        .then(data => {
            //for(let i = 0; i < 151; i++){
            for(let i = 0; i < data.results.length; i++){
                //console.log(data)
                let pokemon = data.results[i]
                //console.log(pokemon)
                getPokemon(pokemon.url)
            }
            pokedexOffset += 1
            }
        )
}
getAllPokemon()
console.log(pokedexOffset)
window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 0.5){
        //console.log(pokedexOffset)
        console.log("pageoffset",window.pageYOffset + window.innerHeight - 0.5)
        console.log("docuementoffset",document.body.offsetHeight)
        console.log(window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
        getAllPokemon()
    }
}





