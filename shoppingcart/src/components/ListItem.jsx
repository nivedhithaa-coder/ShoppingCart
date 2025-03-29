import logo from '../assets/cart.svg'
export default function ListItem({ data={}, handleAddtoCart}) {
    //console.log(data)
    return (
        <div className="card">
            <img className="mb-2 "
                style={{ width: 150, height: 150 }}

                src={data.image} />
            <p className="mb-2">{data.title}</p>
            <p className="mb-2">Price: ${data.price}</p>
            <button onClick={()=>(handleAddtoCart(data))} className='addToCart'>Add to Cart</button>
            


        </div>

    );
}