let url= "https://api.magicthegathering.io/v1/";//la url para poder trabajar con ella
let cartas=""
let parrafo=""

fetch(url +"sets").then(function(respuesta){
    return respuesta.json()
}).then(function(datos){
    for (let i = 0; i < datos.sets.length; i++) {//bucle for para recorrerlo
        cartas += `<option value "${datos.sets[i].code}">${datos.sets[i].name}</option>`
                
    }
    document.getElementById("div").innerHTML =`
    <select onchange="selection()" name="sets" id="sets>
    ${cartas}
    </select>`
})
function seleccion(){
    fetch(url + "card?set=" + document.getElementById("set").value)
    .then(function(respuesta){
        return respuesta.jscon()
    })
    .then(function(datos){
        for (let i = 0; i < datos.cards.length; i++) {
            parrado+=`
            <div id="carta${i}" class="carta"></div> //lo que vamos a ver de la carta
            <img src="${datos.cards[i].imageUrl}" alt="${datos.cards[i].name}"/>
            <h3>${datos.cards[i].name}</h3>
            <h5>Tipo: ${datos.cards[i].type} | Coste: ${datos.cards[i].manaCost}</h5>
            <p>${datos.cards[i].text}</p>
            </div>`
            
        }
        document.getElementById("div2").innerHTML = parrafo

    })
}