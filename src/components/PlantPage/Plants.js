import PlantHero from "./PlantHero"
import PlantProducts from "./PlantProducts"

export default function Plants() {
    return (
        <>
            <PlantHero title='all plants' imageURL={"/images/hero/all-plant-hero.jpg"}/>
            <PlantProducts />
        </>
    )
}