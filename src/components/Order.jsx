import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa'
import Context from '../Context/Context';

const Order = (props) => {

    const callback = useContext(Context)
    const { deleteOrder } = callback

    return (
        <div className='item'>
            <img src={'./img/' + props.order.img} alt=''/>
            <h2>{props.order.title}</h2>
            <p>{props.order.prices} $</p>
        <FaTrash className='delete-icon' onClick={()=> deleteOrder(props.order.id)} />
        </div>
    );
};

export default Order;