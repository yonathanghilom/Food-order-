import { Fragment, useContext } from "react"
import MealForm from "./mealform"
import classes from './mealitem.module.css'
import itemcontext from "../../store/context"
const MealItem = (props) =>{
    const Cartctx = useContext(itemcontext)
   function addhandler(amount){
        Cartctx.additem({
            id : props.id,
            key:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        });
   }

    return(<li key={props.id} className= {classes['cart-item']}>
    <div>
    <h2 className= {classes. h2}> {props.name}</h2>
   
    <div className= {classes.summary}>{props.description}</div>
    <div className= {classes.price}>{props.price}</div>
    </div>
    <div>
        <MealForm  Additemform = {addhandler}/>
    </div>
    </li>)
}
export default MealItem