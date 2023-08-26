import '../styles/ProductCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import productsData from '../products.json';

export default function ProductCarousel() {
    const [productsList, setProductsList] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    useEffect(() => {
        let products = productsData.items;
        products = products.map(item => {
            const {title, scientific, price, category} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, scientific, price, category, id, image};
        })

        products = products.filter(item => item.category.includes("best-sellers"));
        setProductsList(products);
    }, []);

    return (
        <div className="carousel">
            <h1>Vine Favorites</h1>
            <div className='carousel-container'>
                <Slider {...settings}>
                    { productsList.map((product) => (
                        <div className='carousel-product' key={product.id}>
                            <img src={`${product.image}`}></img>
                            <div className="product-text">
                                <div className="name-price">
                                    <h2>{product.title}</h2>
                                    <p className="price">${product.price}</p>
                                </div>
                                <h4>{product.scientific}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}