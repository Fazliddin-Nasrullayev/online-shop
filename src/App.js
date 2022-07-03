import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Api from './Api/Api';
import Items from './components/Items';
import Context from './Context/Context';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

function App() {
  const [orders, setOrders] = useState([])
  const [currentItems, setCurrentItems] = useState([...Api])
  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})
  function addToOrder(item){
    let isAnArray = false
    orders.forEach(elm => {
      if(elm.id === item.id)
        isAnArray = true
    })
    if(!isAnArray)
    setOrders([...orders, item])
    }

    function deleteOrder(id){
        setOrders(orders.filter(elm => elm.id !== id))
    }

    function chooseCategory(category){
      if(category === 'all'){
        setCurrentItems(Api)
        return
      }
      console.log(category);
        setCurrentItems(Api.filter(elm => elm.category === category))
    }
     function onShowItem(item){
      setFullItem(item)
      setShowFullItem(!showFullItem)
      console.log(showFullItem);
     }


  const obj = {currentItems, addToOrder, orders, deleteOrder, chooseCategory, onShowItem, fullItem}


  return (
    <>
    <Context.Provider value={obj}>
    <div className='wrapper'>
    <Header />
    <Categories />
    <Items />
    {
      showFullItem && <ShowFullItem />
    }
    <Footer />
    </div>

    </Context.Provider>
    </>
  );
}

export default App;
