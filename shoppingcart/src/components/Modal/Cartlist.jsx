export default function Cartlist({data={},quantityChange,removeItem}){

    return(
        <div className="cartCard flex justify-between items-center">
            <img className="mb-4 "
                style={{ width: 50, height: 50 }}
                src={data.image} />
            <p className="mb-2 w-1/2">{data.title}</p>
            <p className="mb-2">Price: ${data.price}</p>
            <div className="gap-2 flex">
            <button onClick={(e)=>{quantityChange(e,"inc",data.id)}}>+</button>
            <span>{data.quantity}</span>
            <button onClick={(e)=>{quantityChange(e,"dec",data.id)}}>-</button>
            <button onClick={()=>{removeItem(data.id)}} className="remove">Remove</button>
            </div>
            
            </div>
    );
}