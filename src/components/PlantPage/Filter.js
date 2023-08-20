import '../../styles/PlantStyles/Filter.css';
import React, { useState, useEffect } from 'react';

export default function Filter() {
    const [categorySelected, setCategorySelected] = useState([]);
    const productList = JSON.parse(localStorage.getItem('cachedProducts'));

    const handleChange = (e) => {
        if (e.target.checked) {
            if (!categorySelected.includes(e.target.value)) {
                setCategorySelected([...categorySelected, e.target.value]);
            }
        } else {
            setCategorySelected(categorySelected.filter(category => category !== e.target.value));
        }
    }

    useEffect(() => {
        let filteredList = [];
        console.log(categorySelected);

        categorySelected.forEach(category => {
            const filteredItemsForCategory = productList.filter(item => item.category.includes(category));
            filteredList = [...filteredList, ...filteredItemsForCategory];
        })
        localStorage.setItem('filteredItems', JSON.stringify(filteredList));
    }, [categorySelected]);

    return (
        <section className="filter">
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
        </section>
    )
}