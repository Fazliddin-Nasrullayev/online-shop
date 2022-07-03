import React, { useContext } from 'react';
import Context from '../Context/Context';
import Item from './Item';

const Items = () => {
    const callback = useContext(Context)
    const {currentItems  } = callback;
    return (
       <main>
        {currentItems.map((item, index) => (
            <Item  prop={item} key={item.id} />
        ))}
       </main>
    );
};

export default Items;