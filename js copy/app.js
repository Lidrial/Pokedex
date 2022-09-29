import { getAllPokemon } from "./modules/pokedex.js";
import { createMap, placeChar } from "./modules/map.js";
import { createChar, selectNameStarter, Char } from "./modules/character.js";
import { movePlayer } from "./modules/move.js";

const btn_game = document.getElementById("btn_game")
const btn_pokedex = document.getElementById("btn_pokedex")
const game = document.getElementById("game")
const pokedex = document.getElementById("pokedex")


createMap()
getAllPokemon()
selectNameStarter()
placeChar()
movePlayer()





console.log(Char)
console.log(localStorage.pseudo)


export function toggle(){
        game.classList.toggle('is-hidden')
        pokedex.classList.toggle('is-hidden')
}

btn_pokedex.onclick = toggle
btn_game.onclick = toggle


