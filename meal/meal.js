import Mealsign from "./mealsign";
import MealList from "./mealList";
import { Fragment } from "react";
import Card from "../UI/Card";
const Meal = () =>{
    return(
        <Card>
            <Mealsign/>
            <MealList/>
        </Card>
    )
}
export default Meal