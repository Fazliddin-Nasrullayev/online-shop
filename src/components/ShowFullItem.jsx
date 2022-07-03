import React, { useContext } from 'react';
import Context from '../Context/Context';

const ShowFullItem = () => {
    const callback = useContext(Context)
    const { fullItem, onShowItem, addToOrder } = callback

    console.log(fullItem);
    return (
        <div className='full-item'>
            <div>
                <img src={'./img/' + fullItem.img} alt=''
                onClick={()=> onShowItem(fullItem)}
                />
                <h2>{fullItem.title}</h2>
                <p>{fullItem.desc}</p>
                <b>{fullItem.prices} $</b>
                <div className='add-to-cart' onClick={()=> addToOrder(fullItem)} >+</div>
            </div>
        </div>
    );
};

export default ShowFullItem;