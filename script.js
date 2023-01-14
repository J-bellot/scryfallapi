let list_cartes = []

window.onload = () => {

    // Charger toutes les cartes existantes dans une variable

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/AllCardNames.txt', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const fileContent = xhr.responseText;
            list_cartes = fileContent.split('\n')
            console.log(list_cartes)
        }
    };
    xhr.send();

    // Attribuer au champ texte la fonction si il change

    const searchBar = document.getElementById("search-bar")
    const results_div = document.getElementById('results')

    searchBar.oninput = function (){
        const value = searchBar.value;
        results_div.innerHTML = ""

        if (value !== ""){
            let results = 0
            // parcourez la liste
            for(let i=0; i < list_cartes.length; i++) {
                // utilisez indexOf pour vérifier si la valeur est présente dans chaque élément
                if(list_cartes[i].toLowerCase().startsWith(value.toLowerCase())) {
                    if (results < 10){
                        results++
                        const result = document.createElement("div")
                        result.setAttribute('class', 'resultat')
                        result.innerHTML = list_cartes[i]
                        results_div.appendChild(result)
                    }else {
                        break
                    }
                }
            }
        }
    }

}



