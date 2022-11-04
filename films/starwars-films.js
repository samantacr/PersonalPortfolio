//import { films } from '../data/films.js'
import { films } from "../films/data/films.js";

let filmList = document.querySelector("#filmList"); // a reference to our main element


for (let i = 0; i < films.length; i++) {

    // first create a feature a <figure>...

    let figure = document.createElement('figure')
    let figImage = document.createElement('img')
    let figCaption =  document.createElement ('figcaption')

    let filmNum = getLastNumber(films[i].url)

    figImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`
    //set the text of the figCaption to the movie's title.
    figCaption.textContent = films[i].title
    //append the image and figcaption children...

    figure.appendChild(figImage)
    figure.appendChild(figCaption)
    filmList.appendChild(figure)

}

//..
function getLastNumber(url) {
    return url.slice(url.length - 2, url.length - 1)
}



