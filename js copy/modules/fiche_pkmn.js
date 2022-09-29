export let pkmnUrl = 'https://pokeapi.co/api/v2/pokemon/'

//module fiche pokemon
export function getPokemon(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            createFichePokemon(data)
        })
}

function createFichePokemon(pkmn){
    //console.log(pkmn)
    //récupére le template
    let template = document.getElementById('fiche_pokemon_template')
    //clonage du template
    let templateClone = document.importNode(template.content, true)
    //récupére et remplis le nom du pokémon
    let pkmn_name = templateClone.getElementById('pkmn_name')
    pkmn_name.innerText = pkmn.name
    //récupère et remplis l'imgage
    let pkmn_sprite = templateClone.getElementById('pkmn_sprite')
    pkmn_sprite.src = pkmn.sprites.front_default
    //récupère et remplis les types
    let pkmn_type = templateClone.getElementById('pkmn_type')
    for(let index in pkmn.types){
        pkmn_type.innerHTML += pkmn.types[index].type.name + '<br>'
        index ++
    }
    let pkmn_container = document.getElementById('pokedex')
    pkmn_container.appendChild(templateClone)
}
