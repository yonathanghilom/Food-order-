import React from "react";

export const itemcontext = React.createContext({
    items:[],
    totalamount:0,
    additem: (item) => {},
    removeitem:(id) => {},
})

export default itemcontext;