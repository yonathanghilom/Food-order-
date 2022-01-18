import { Fragment, useContext } from "react"
import CartItem from "./Cartitem"

const food = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        amount:0,
      }
]
const Cartsign =() =>{
 const cartctx= useContext(itemcontext);
const [cartexist, setcartexist] = useState(false);
if (cartctx.items.length !== 0){
            setcartexist(true);
}
else{
    setcartexist(false);
}
const Cartlist = cartctx.items.map((item) =>{
    return (<CartItem 
    id= {item.id}
    name = {item.name}
    price = {item.price}
     amount = {item.amount}
    />
        
    )
})

    return(<div>
        <div>
         {cartexist && <Cartlist/>}
         {!cartexist && <p>empty Cart</p>}
        </div>
        <div>
            <button>close</button>
            <button>order</button>
        </div>
    </div>)
}
export default Cartsign;