import cart from '../assets/cart.svg'
import logo from '../assets/Shopping.png'
//import navbar from '../styles/navbar.css';
import Modal from '../components/Modal/Modal'
import { useState } from 'react'
export default function Navbar({item={},quantityChange,price,removeItem}) {
    const [openModal,setOpenModal] = useState(false);
    return (
        <div className="nav">

            <img 
                alt="logo"
                src={logo}
                style={{ width: 300, height: 200 }} />
            <div className="cart">
                <img onClick={()=>{(setOpenModal(true))}}
                    src={cart}
                    alt="cart"
                    style={{ width: 50, height: 50 }} />
                <span id="items_count">0</span>
                {openModal&&<Modal closeModal={setOpenModal} item={item} quantityChange={quantityChange} price={price} removeItem={removeItem}/>}
            </div>
        </div>
    )
}
