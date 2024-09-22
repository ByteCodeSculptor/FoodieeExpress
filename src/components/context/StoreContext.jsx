import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null) //functional component of contextValues

const StoreContextProvider = (props) =>{

    const[cartItems,setCartItems] = useState({});//state initialization using usestate hook.

    const addToCart =(itemId) => {
            if(!cartItems[itemId]) {
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValues ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValues}> 
            {props.children}
        </StoreContext.Provider>
    )
}//functional component wraped in children.

export default StoreContextProvider