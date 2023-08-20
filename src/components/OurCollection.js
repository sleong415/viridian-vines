import '../styles/OurCollection.css';

export default function OurCollection() {
    return (
        <section className="collections">
            <div className="section-title">
                <h2>Our Collections</h2>
            </div>
            <div className="collection-center">
                <article className="collection">
                    <div className="img-container">
                        <img src='/images/plants/white-green-plant.jpg' alt="monstera plant in a pot"></img>
                    </div>
                    <h2>Best Sellers</h2>
                </article>
                <article className="collection">
                    <div className="img-container">
                        <img src='/images/plant-room-2.jpg' alt="room of plants"></img>
                    </div>
                    <h2>All Plants</h2>
                </article>
                <article className="collection">
                    <div className="img-container">
                        <img src='/images/plants/dwarf-banana.jpg' alt="dwarf banana plant in a pot"></img>
                    </div>
                    <h2>Pet Friendly</h2>
                </article>
                <article className="collection">
                    <div className="img-container">
                        <img src='/images/plants/zzplant.jpg' alt="room of plants"></img>
                    </div>
                    <h2>Beginners</h2>
                </article>
                <article className="collection">
                    <div className="img-container">
                        <img src='images/plants/white-green-plant.jpg' alt="room of plants"></img>
                    </div>
                    <h2>All Plants</h2>
                </article>
            </div>
        </section>
    )
}