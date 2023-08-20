import '../styles/Hero.css'
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <header className="hero">
                <div className="banner">
                    <h1 className="banner-title">Best Sellers collection</h1>
                    <Link to="/plants" className="navbar-item">
                        <button className="button banner-btn" >Shop now</button>
                    </Link>
                </div>
            </header>
        </>
    )
}