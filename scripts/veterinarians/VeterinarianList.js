/*
    VeterinarianList component which iterates the `veterinarians` state
    collection and renders individual Veterinarian components.
*/
import VeterinarianComponent from "./Veterinarian.js"
import { useVeterinarians, deleteVeterinarian, getVeterinarians } from "./VeterinarianProvider.js"

// Reference to the DOM element into which the HTML components will be rendered
const dashboard = document.querySelector("#dashboard")

// Listen for a click event on any child element in the animal container
dashboard.addEventListener("click", evt => {

    // Only run the log if the user clicked on a delete button
    if (evt.target.id.startsWith("deleteVeterinarian--")) {
        const vetId = evt.target.id.split("--")[1]

        // Initiate database state transition
        deleteVeterinarian(vetId)
            // Load new database state into application state
            .then(getVeterinarians)
            // Render new state as HTML
            .then(VeterinarianListComponent().render)
    }
})

const VeterinarianListComponent = () => {
    const veterinarians = useVeterinarians()

    return {
        render () {
            console.group(
                "%c Rendering Veterinarian Components",
                "color:#611a0a; background-color:#e4a294"
            )
            console.log("****   VeterinarianListComponent render()   ****")

            // Remove the list component from the DOM, if it exists
            const listDOM = document.querySelector("#veterinarians")
            if (listDOM) {
                listDOM.remove()
            }

            dashboard.innerHTML += `
                <article id="veterinarians" class="dashboard__item dashboard__item--veterinarians">
                    <header class="listTitle">
                        <h2>Veterinarians</h2>
                    </header>
                    ${
                        veterinarians
                            .map(vet => VeterinarianComponent().render(vet))
                            .join("")
                    }
                </article>
            `

            console.groupEnd()
        }
    }
}

export default VeterinarianListComponent
