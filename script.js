let list_cartes = []

window.onload = () => {

    // Charger toutes les cartes existantes dans une variable

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/AllCardNames.txt', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const fileContent = xhr.responseText;
            list_cartes = fileContent.split('\n')
        }
    };
    xhr.send();

    // Attribuer au champ texte la fonction si il change

    const searchBar = document.getElementById("search-bar")
    const results_div = document.getElementById('results')
    const decklist = document.getElementById('decklist')
    const cardimage_container = document.getElementById('cards-image')

    async function searchCard(cardName) {
        try {
            const response = await fetch(`https://api.scryfall.com/cards/named?exact=${cardName}`);
            const data = await response.json();
            if (typeof data.card_faces !== "undefined"){
                const image1 = document.createElement("img")
                image1.src = data.card_faces[0].image_uris.normal
                image1.style.height = "auto"
                image1.style.width = "250px"
                cardimage_container.appendChild(image1)

                const image2 = document.createElement("img")
                image2.src = data.card_faces[1].image_uris.normal
                image2.style.height = "auto"
                image2.style.width = "250px"
                cardimage_container.appendChild(image2)

            }else {
                const image = document.createElement("img")
                image.src = data.image_uris.normal
                image.style.height = "auto"
                image.style.width = "250px"
                cardimage_container.appendChild(image)
            }
        } catch (error) {
            console.error(error);
        }
    }

    searchBar.oninput = function (){
        const value = searchBar.value;
        results_div.innerHTML = ""

        if (value !== ""){
            let results = 0
            for(let i=0; i < list_cartes.length; i++) {
                if(list_cartes[i].toLowerCase().startsWith(value.toLowerCase())) {
                    if (results < 10){
                        results++
                        const result = document.createElement("div")
                        result.setAttribute('class', 'resultat')
                        result.innerHTML = list_cartes[i]
                        result.onclick = function (){
                            const decklist_content = decklist.value.split("\n")
                            let found = false
                            for (let j = 0; j < decklist_content.length; j++){
                                if (decklist_content[j].includes(list_cartes[i])){
                                    let card_number = decklist_content[j].split(" ")[0]
                                    card_number++
                                    decklist_content[j] = card_number+" "+list_cartes[i]
                                    decklist.value = decklist_content.join("\n")
                                    found = true
                                }
                            }
                            if (!found) {
                                decklist.value += "1 "+list_cartes[i]+"\n"
                            }
                        }
                        results_div.appendChild(result)
                    }else {
                        break
                    }
                }
            }
        }
    }

    document.getElementById('decklist-form').onsubmit = function (event){
        event.preventDefault()
        cardimage_container.innerHTML = ""
        const decklist_content = decklist.value.split("\n")
        for (let i = 0; i < decklist_content.length-1; i++){
            const cardname = decklist_content[i].substring(2)
            searchCard(cardname)
        }
    }
}



