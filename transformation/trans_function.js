import { dragonball } from "../api/character_api.js";
import * as transfo from "../transformation/trans_const.js"


export async function transformation (value) {

   const data = await dragonball(value)

   transfo.transformations.textContent = ""



data.transformations.forEach((Element) => {

    transfo.div.appendChild(transfo.transformations)
    transfo.transformations.textContent += Element.name + " / " + "ki : " + Element.ki +" \n " + " \n "  
    transfo.div.classList.add("divtrans")
    transfo.transformations.classList.add("transfo")
});

    
}