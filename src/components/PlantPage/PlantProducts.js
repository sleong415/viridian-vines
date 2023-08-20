import '../../styles/PlantStyles/PlantProducts.css';
// import ProductList from '../ProductList';
// import Filter from './Filter';
import AllPlant from './AllPlants';

export default function PlantProducts() {
    return (
        <section className="products">
            <h3>Discover nature's elegance with our diverse collection of exquisite plants. From lush greenery to vibrant blossoms, find the perfect additions to your sanctuary.</h3>
            <AllPlant />
        </section>
    )
}