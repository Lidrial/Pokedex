//localStorage.clear()

export function selectNameStarter(){
    if(localStorage.getItem('pseudo') === null){
        let name = prompt('Pseudo : ')
        localStorage.setItem('pseudo', name)
        console.log('pseudo enregistré')
    }
    
    if(localStorage.getItem('starter_pkmn') === null){
        let starter = prompt('Choix du starter par N° : ')
        localStorage.setItem('starter_pkmn', starter)
        console.log('Starter choisi')
    }
    
}

export class createChar{
    constructor(pseudo, posX, posY, image, starter) {
        this.pseudo = pseudo
        this.posX = posX
        this.posY = posY
        this.image = image
        this.starter = starter
    }
}

export var Char = new createChar(localStorage.pseudo, 8, 8, '<img id="player" src="assets/player.png">', localStorage.starter_pkmn)

console.log(Char,"playerszd")



