console.log("Pokemon app ready")
const Pokemon = document.getElementById("Pokemon")
const newImg = document.createElement("img")
 


console.log(Pokemon.innerText)
Pokemon.appendChild(newImg)
for (let index=0;index<=1025;index++){
    const PokemonURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const newImg = document.createElement("img")
    newImg.src= `${PokemonURL}${index}.png`
    const newId = `TagIMG-${index}`
    
    Pokemon.appendChild(newImg,newId)
}