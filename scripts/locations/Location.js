/*
    Location component which renders individual location objects as HTML.
*/
import { animals } from "../animals/AnimalProvider.js"


const LocationComponent = () => {
    return {
        render: location => {
            console.log(`****   LocationComponent ${location.id} render()   ****`)

            // Get all animals assigned to this location
            const animalsInThisLocation = animals.filter(
                animal => location.id === animal.locationId
            )

            return `
                <section id="location--${location.id}" class="location">
                    <h2>${location.name}</h2>
                    <h3>${location.address}</h3>


                    <h4>Current residents:</h4>
                    <ul>
                        ${
                            // Generate an <li> element for every animal name
                            animalsInThisLocation
                                .map(animal => `<li>${animal.name}</li>`)
                                .join("")
                        }
                    </ul>
                </section>
            `
        }
    }
}

export default LocationComponent
