import { useContext, useRef } from 'react';
import classes from './mealform.module.css'

const MealForm =(props) => {
   const chooseitem = useRef();


    function submithandler(event){
        event.preventDefault();
        const itemschoice = chooseitem.current.value;
        const enternumber = +itemschoice
        console.log(enternumber)
        props.Additemform(enternumber)

    }
    
    return (<form className= {classes.form} onSubmit={submithandler}>
        
        <label htmlFor='black'>amount</label>
        <input type= 'number' id = 'm1' min='1' max = '5' step= '1'
          defaultValue = '1' ref={ chooseitem}
          ></input>
         
            <button>+ Add</button>       
    </form>)
}
export default MealForm;