import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import Context from '../Context/Context';
import Order from './Order';

const showOrders = (props) => {
 

    
    let summa = 0
    props.forEach(elm => summa +=  Math.ceil(elm.prices))
    return (
        <div>
            {
                props.map((item, index) => (
                <Order key={item.id} order={item} />
                ))
            }
            <p className="summa">Sum: {summa}$</p>
        </div>
    )
}

const showNothing = () => {
    return(
        <div className='empty'>
            <h2>Nothing</h2>
        </div>
    )
}

const Header = () => {
    const callback = useContext(Context)
    const { orders } = callback
    const [cartOpen, setCartOpen] = useState(false)

    console.log(orders);

    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className='nav'>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Room</li>

                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active' }`}/>


                {cartOpen && (
                    <div className="shop-cart">
                        {
                            orders.length > 0 ? showOrders(orders) : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
};

export default Header;