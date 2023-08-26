import '../../styles/PlantStyles/AllPlants.css';
import productsData from '../../products.json';
import { useCart } from '../CartItemContext';
import React, { useState, useEffect } from 'react';

export default function AllPlants() {
    const [categorySelected, setCategorySelected] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const [renderList, setRenderList] = useState([]);
    const { addToCart, isItemInCart } = useCart();

    // filter change
    const handleChange = (e) => {
        if (e.target.checked) {
            if (!categorySelected.includes(e.target.value)) {
                setCategorySelected([...categorySelected, e.target.value]);
            }
        } else {
            setCategorySelected(categorySelected.filter(category => category !== e.target.value));
        }
    }

    const handleClick = (e) => {
        const button = e.currentTarget;
        const id = button.dataset.id;

        let product = JSON.parse(localStorage.getItem('cachedProducts'));
        product = product.find(item => item.id === id);
        let newItem = {...product, amount: 1}
        addToCart(newItem);
    }

    // alphabetize products
    function sortList(list) {
        list.sort((a, b) => a.title.localeCompare(b.title));
    }

    // get products
    useEffect(() => {
        let products = productsData.items;
        products = products.map(item => {
            const {title, scientific, price, category} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, scientific, price, category, id, image};
        })
        localStorage.setItem('cachedProducts', JSON.stringify(products));
        setProductsList(products);
        setRenderList(products);
    }, []);

    // get filtered products
    useEffect(() => {
        const productList = JSON.parse(localStorage.getItem('cachedProducts'));
        let filteredList = new Set(); // Use a Set to store unique items
        categorySelected.forEach(category => {
            const filteredItemsForCategory = productList.filter(item => item.category.includes(category));
            filteredItemsForCategory.forEach(item => filteredList.add(item)); // Add items to the Set
        });
        const uniqueFilteredItems = Array.from(filteredList); // Convert Set back to an array
        localStorage.setItem('filteredItems', JSON.stringify(uniqueFilteredItems));
        setFilteredProducts(uniqueFilteredItems);
    }, [categorySelected]);

    // determine what is displayed
    useEffect(() => {
        if (filteredProducts.length > 0) {
            sortList(filteredProducts);
            setRenderList(filteredProducts);
        } else {
            sortList(productsList);
            setRenderList(productsList);
        }
    }, [filteredProducts])

    return (
        <div className='content-center'>
            <div className="filter">
                <div className='filter-center'>
                    <h1>Filters</h1>

                    <div className='filter-sections category'>
                        <hr className="separator" />
                        <h2>Category</h2>
                        <div className='filter-checkboxes'>
                            <label className='checkbox-label'>
                                <input type="checkbox" className="checkbox" value="best-sellers" onChange={handleChange}/>
                                <span className="checkbox-text">
                                    Best Sellers
                                </span>
                            </label>
                            <label className='checkbox-label'>
                                <input type="checkbox" className="checkbox" value='starter' onChange={handleChange}/>
                                <span className="checkbox-text">
                                    Starter
                                </span>
                            </label>
                            <label className='checkbox-label'>
                                <input type="checkbox" className="checkbox" value='pet-friendly' onChange={handleChange}/>
                                <span className="checkbox-text">
                                    Pet-Friendly
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className='filter-sections category'>
                        <hr className="separator" />
                        <h2>Size</h2>
                        <div className='filter-checkboxes'>
                            <label className='checkbox-label'>
                                <input type="checkbox" className="checkbox"/>
                                <span className="checkbox-text">
                                    Small
                                </span>
                            </label>
                            <label className='checkbox-label'>
                                <input type="checkbox" className="checkbox"/>
                                <span className="checkbox-text">
                                    Medium
                                </span>
                            </label>
                            <label className='checkbox-label'>
                                <input type="checkbox" className="checkbox"/>
                                <span className="checkbox-text">
                                    Large
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-center">
                {renderList.map((product) => (
                        <article className='product' key={product.id}>
                            <div className='image-container'>
                                <img src={product.image} alt="" className='product-img'></img>
                                <button className="bag-btn" data-id={product.id} onClick={handleClick}  disabled={isItemInCart(product.id)}>
                                    {isItemInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                                </button>
                            </div>
                            <div className="product-text">
                                <div className="name-price">
                                    <h2 className='name'>{product.title}</h2>
                                    <p className="price">${product.price}</p>
                                </div>
                                <h4>{product.scientific}</h4>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}