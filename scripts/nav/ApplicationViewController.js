import AnimalListComponent from "../animals/AnimalList.js"
import LocationListComponent from "../locations/LocationList.js"
import VeterinarianListComponent from "../veterinarians/VeterinarianList.js"

const navElement = document.querySelector("#navbar")

const ApplicationViewController = {
    init () {
        console.log("****   ApplicationViewController init()   ****")

        navElement.addEventListener("click", event => {
            const buttonId = event.target.id
            document.querySelector("#dashboard").innerHTML = ""

            console.clear()

            if (buttonId === "dashboardViewBtn") {
                console.log("****   Dashboard Nav Item Clicked   ****")
                LocationListComponent().render()
                AnimalListComponent().render()
            }

            if (buttonId === "veterinarianViewBtn") {
                console.log("****   Veterinarian Nav Item Clicked   ****")
                VeterinarianListComponent().render()
            }

            if (buttonId === "animalViewBtn") {
                console.log("****   Animal Nav Item Clicked   ****")
                AnimalListComponent().render()
            }

            if (buttonId === "locationViewBtn") {
                console.log("****   Location Nav Item Clicked   ****")
                LocationListComponent().render()
            }
        })
    }
}

export default ApplicationViewController
