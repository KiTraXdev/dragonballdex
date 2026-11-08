export async function dragonball(value) {

    const envoie = await fetch(`https://dragonball-api.com/api/characters/${value}`)
    const data = await envoie.json()

    if(!envoie.ok){
throw new Error("http error : " + envoie.status);
}
return data

}