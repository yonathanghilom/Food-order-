import { Fragment, useContext } from 'react'
import CartIcon from '../cart/Carticon';
import classes from './headerCartButton.module.css'

import itemcontext from '../../store/context';
const HeaderCartbutton = (props) =>{
   const cartctx =  useContext(itemcontext);
   const currentamount = cartctx.items.reduce((currn, item) => currn + item.amount
   ,0 )
   console.log(cartctx.items)
    return(

            <button  className= {classes.button} onClick={props.showcart} >
                <span className= {classes.icon}>
                        <CartIcon/>
                </span>
                <span > 
                    your cart
                </span>
                <span className= {classes.bagde}>{currentamount}</span>
                
            </button>
      
    )
}
export default HeaderCartbutton;
