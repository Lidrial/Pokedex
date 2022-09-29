import { Char } from "./character.js";

export function createMap(){

    let map = document.getElementById('map');

    let table = document.createElement('table');

    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (let i = 0; i < 16; i++){
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        for (let u = 0; u < 16; u++){
            let td = document.createElement('td');
            td.setAttribute('id', 'x' + `${i}` + ' ' + 'y' + `${u}`)
            tr.appendChild(td);
        }
    }
    map.appendChild(table);
}


export function placeChar(){
    console.log(Char.posX)
    console.log(Char.image)
    let startPos = document.getElementById(`x${Char.posX} y${Char.posY}`)
    console.log(startPos)
    startPos.innerHTML = Char.image
}

