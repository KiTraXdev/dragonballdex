
import { character } from "../character/character_function.js"
import * as search from "../search/search_const.js"
import { planete } from "../planete/planete_function.js"
import { transformation } from "../transformation/trans_function.js"
let value = ""



search.valider.addEventListener("click", async ()=>{

if(search.search.value !== ""){
value = search.search.value


try {
    
    await character(value)
    
    await planete(value)

    await transformation(value)

}
 catch (error) {
console.log(error.message)    
console.log(error)
}



}


})