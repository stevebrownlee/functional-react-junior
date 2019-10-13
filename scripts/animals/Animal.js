/*
    Animal component which renders individual animal objects as HTML
*/
import { locations } from "../locations/LocationProvider.js"

const AnimalComponent = () => {
    return {
        render: animal => {
            console.log(`****   AnimalComponent ${animal.id} render()   ****`)

            // Find this the location object that this animal is assigned to
            const animalLocationObject = locations.find(loc => animal.locationId === loc.id)

            return `
                <section id="animal--${animal.id}" class="animal">
                    <div><span class="animal__name">${animal.name}</span> (${animalLocationObject.name})</div>

                    <button class="btn btn--delete" id="deleteAnimal--${animal.id}">Release</button>
                </section>
            `
        }
    }
}

export default AnimalComponent
