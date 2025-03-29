import '../Modal/Modal.css'
import Cartlist from './Cartlist';
export default function Modal({item={},closeModal,quantityChange,price,removeItem}){
    //console.log(item)
    return(
        <div className="modalbg">
            <div className="modalContainer p-3">
            <div className="modalNav flex justify-end font-bold mb-4">
               <button className='fixed' onClick={()=>{(closeModal(false))}}style={{fontSize:25}}>X</button>
                </div>
                <p className="text-2xl text-center mb-2 font-bold">Shopping Cart</p>
               
                <div className="body"></div>
                {item.map((p, index) => (
          <Cartlist key={index} data={p} quantityChange={quantityChange} removeItem={removeItem}/>
        ))}
                <div className="footer flex justify-end">
                    <p>TotalPrice:<span>{price}</span></p>
                </div>
                    
            </div>
        </div>
    );
}