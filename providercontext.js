import { useReducer } from 'react';


import { itemcontext } from './context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

    const newindexx =  state.items.findIndex((it) =>
       
          it.id === action.item.id
      )
     console.log(newindexx)
      const existingcartitem = state.items[newindexx]
      let updateditems;
      let updateitem;
      if(existingcartitem)
      {
          updateitem = {...existingcartitem, 
                            amount: existingcartitem.amount + 1,
                       };
          updateditems = [...state.items]
          updateditems[newindexx] = updateitem
      
      }else{
        updateditems = state.items.concat(action.item);
      }
 

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateditems,
      totalAmount: updatedTotalAmount
    };
  }
  if(action.type === 'REMOVE'){
      
  }
  return defaultCartState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    additem: addItemToCartHandler,
    removeitem: removeItemFromCartHandler,
  };

  return (
    <itemcontext.Provider value={cartContext}>
      {props.children}
    </itemcontext.Provider>
  );
};

export default ContextProvider;