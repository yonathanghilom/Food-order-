import { Fragment } from "react";
import classes from './headers.module.css'
import HeaderCartbutton from "./headersCartButton";
const Headers = (props) =>{
    return(
        <Fragment>
            <header className= {classes.header}> 
            <h1> React Meals</h1>
            
                <HeaderCartbutton showcart = {props.showcart}/>
            
            </header>
        <div className= {classes['main-image']}>
        <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
                alt = 'this food react' />  
            </div> 
      
          
        </Fragment>
    )
}
export default Headers;