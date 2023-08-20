import '../../styles/PlantStyles/PlantHero.css'

export default function PlantHero({title, imageURL}) {
    const plantHeroStyle = {
        height: 'calc(30vh - 60px)',
        background: `url(${imageURL}) center/cover no-repeat`,
        position: 'relative'
    }

    return (
        <header className="plant-hero" style={plantHeroStyle}>
            <div className='hero-overlay'>
                <div className="plant-banner">
                    <h1 className="plant-banner-title">{title}</h1>
                </div>
            </div>
        </header>
    )
}