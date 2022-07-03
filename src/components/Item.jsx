import React, { useContext } from 'react';
import Context from '../Context/Context';

const Item = (props) => {

    const callback = useContext(Context)
    const {addToOrder, onShowItem} = callback

    return (
        <div className='item'>
            <img src={'./img/' + props.prop.img} alt=''
            onClick={()=> onShowItem(props.prop)}
            />
            <h2>{props.prop.title}</h2>
            <p>{props.prop.desc}</p>
            <b>{props.prop.prices} $</b>
            <div className='add-to-cart' onClick={()=> addToOrder(props.prop)} >+</div>
        </div>
    );
};

export default Item;