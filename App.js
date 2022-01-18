import { Fragment, useState } from "react";
import Headers from "./components/layout/headers";
import HeaderCartbutton from "./components/layout/headersCartButton";
import Meal from "./components/meal/meal";

import Cartrender from "./components/cart/Cartrender";
import ContextProvider from "./store/providercontext";
function App(props) {
  const [changing, setchanging] = useState()
function changehandler(){
   setchanging(true)
}
function showcart(){
  setchanging(false)
}
  return (
    <ContextProvider>
     
        <Headers showcart = {changehandler}/>
        {changing && <Cartrender onClose = {showcart}/>}
        
        <main>
        <Meal></Meal> 
        </main>
      
    </ContextProvider>)
  
}

export default App;
