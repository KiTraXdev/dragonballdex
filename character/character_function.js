import { dragonball } from "../api/character_api.js";
import * as constan from "../character/character_const.js"

export async function character(value) {
    const data =  await dragonball(value)


 
    constan.name.textContent = data.name
    constan.img.src = data.image
    constan.ki.textContent = "ki : " + data.ki
    constan.id.textContent = "id : " + data.id
    constan.afi.textContent = "affiliation : " + data.affiliation
    constan.maxki.textContent = "max ki : " + data.maxKi
    constan.sexe.textContent = "sexe : " + data.gender
    constan.race.textContent = "race : " + data.race
}

