import * as planet from "../planete/planete_const.js"
import { dragonball } from "../api/character_api.js"

export async function planete(value) {

    const data = await dragonball(value)
    planet.name.textContent = "name planet : " + data.originPlanet.name
    planet.id.textContent = "id planet : " + data.originPlanet.id
    planet.destroyed.textContent = "planet detruite : " + data.originPlanet.isDestroyed
}