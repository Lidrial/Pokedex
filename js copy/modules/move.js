import { Char } from "./character.js"

    export function movePlayer(){
        let player = document.getElementById('player')
        console.log(player.parent)
        let pos = document.getElementById(`x${Char.posX} y${Char.posY}`);
        let move = document.addEventListener('keydown', e => {
            
            console.log('desinfos', Char)
            if(e.key == "z"){
                Char.posY -= 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                console.log(Char.posY)
                console.log(pos, "pos")
            }

            if(e.key == "s"){
                Char.posY += 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                console.log(Char.posY)
            }

            if(e.key == "q"){
                Char.posX -= 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                console.log(Char.posX)
            }

            if(e.key == "d"){
                Char.posX += 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                console.log(Char.posX)
            }
            console.log(e.key)
            console.log(Char)
        })
    }
