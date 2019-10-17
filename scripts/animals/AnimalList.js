/*
    AnimalList component which iterates the `animals` state
    collection and renders individual Animal components.
*/
import AnimalComponent from "./Animal.js"
import { deleteAnimal, useAnimals, getAnimals } from "./AnimalProvider.js"

// Reference to the DOM element into which the HTML components will be rendered
const dashboard = document.querySelector("#dashboard")

// Listen for a click event on any child element in the animal container
dashboard.addEventListener("click", evt => {

    // Only run the log if the user clicked on a delete button
    if (evt.target.id.startsWith("deleteAnimal--")) {
        const animalId = evt.target.id.split("--")[1]

        // Initiate database state transition
        deleteAnimal(animalId)
            // Load new database state into application state
            .then(getAnimals)
            // Render new state as HTML
            .then(AnimalListComponent().render)
    }
})

const AnimalListComponent = () => {
    const animals = useAnimals()

    return {
        render () {
            console.group(
                "%c Rendering Animal Components",
                "color:#166751; background-color:#6cebc9"
            )
            console.log("****   AnimalListComponent render()   ****")


            // Remove the list component from the DOM, if it exists
            const listDOM = document.querySelector("#animals")
            if (listDOM) {
                listDOM.remove()
            }

            dashboard.innerHTML += `
                <article id="animals" class="dashboard__item dashboard__item--animals">
                    <header class="listTitle">
                        <h2>Animals</h2>
                    </header>
                    <section class="boxList">
                    ${
                        animals
                            .map(animal => AnimalComponent().render(animal))
                            .join("")
                    }
                    </section>
                </article>
            `

            console.groupEnd()
        }
    }
}

export default AnimalListComponent
