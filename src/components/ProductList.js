import React, { useState, useEffect } from 'react';
import productsData from '../products.json';
import '../styles/ProductList.css'

export default function ProductList() {
    const [productsList, setProductsList] = useState([]);

  useEffect(() => {
        // const handleStorageChange = (e) => {
        //     console.log('Storage change event triggered');
        //     if (e.key === 'filteredItems') {
        //         const filteredItems = JSON.parse(e.newValue);
        //         setProductsList(filteredItems);
        //         console.log("hi ", productsList);
        //     }
        // };

        let products = productsData.items;
        products = products.map(item => {
            const {title, scientific, price, category} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, scientific, price, category, id, image};
        })
        setProductsList(products);
        localStorage.setItem('cachedProducts', JSON.stringify(products));
        // console.log(products);

        // const filteredItems = JSON.parse(localStorage.getItem('filteredItems'));
        // if (filteredItems.length > 0) {
        //     setProductsList(filteredItems);
        //     console.log("FILTER", productsList);
        // } else {
        //     setProductsList(products);
        // }

        // window.addEventListener('storage', handleStorageChange);

        // return () => {
        //     window.removeEventListener('storage', handleStorageChange);
        // };
  }, []);

    return (
        <div className="products-center">
            {productsList.map((product) => (
                    <div className='product' key={product.id}>
                        <img src={product.image} alt="tiny cactus in a pot"></img>
                        <div className="product-text">
                            <div className="name-price">
                                <h2>{product.title}</h2>
                                <p className="price">{product.price}</p>
                            </div>
                            <h4>{product.scientific}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

