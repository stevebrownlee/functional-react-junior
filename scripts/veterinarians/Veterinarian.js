
/*
Location component which renders individual location objects as HTML.
*/
import { useAnimals } from "../animals/AnimalProvider.js"



const VeterinarianComponent = () => {
    const animals = useAnimals()

    return {
        render: veterinarian => {
            console.log(`****   VeterinarianComponent ${veterinarian.id} render()   ****`)

            const myAnimals = animals.filter(a => a.veterinarianId === veterinarian.id)

            return `
                <section id="veterinarian--${veterinarian.id}" class="veterinarian">
                    <h2>${veterinarian.name}</h2>

                    <h4>Currently caring for:</h4>
                    <ul>
                        ${
                            // Generate an <li> element for every animal name
                            myAnimals
                                .map(animal => `<li>${animal.name}</li>`)
                                .join("")
                        }
                    </ul>

                    <button class="btn btn--delete" id="deleteVeterinarian--${veterinarian.id}">
                        Fire
                    </button>
                </section>
            `
        }
    }
}

export default VeterinarianComponent
