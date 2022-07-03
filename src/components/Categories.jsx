import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

const Categories = () => {

    const callback = useContext(Context)
    const { chooseCategory } = callback

    const [categories] = useState(
        [
            {
                key: 'all',
                name: 'All',
            },
            {
                key: 'chair',
                name: 'Chair',
            },
            {
                key: 'lamp',
                name: 'Lamp',
            },
            {
                key: 'sofa',
                name: 'Sofa',
            },
        ]
        )
    return (
        <div className="categories">
            { 
            categories.map((elm, index )=> (
                <div 
                onClick={() => chooseCategory(elm.key)}
                key={elm.key}>{elm.name}</div>
            ))
            }
        </div>
    );
};

export default Categories;