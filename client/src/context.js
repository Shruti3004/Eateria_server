import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from "./data";


// const initialState = {
//     products: [],
//     detailProduct
// }

// const reducer = (state, action) => {
//     switch(action.type){
//         default:
//             return state
//     }
// }
export const ProductContext = React.createContext();

export function ProductProvider({children}) {
    const [state, setState] = useState({products: [], 
                                        detailProduct, 
                                        cart: [], 
                                        modalOpen: false , 
                                        modalProduct: detailProduct,
                                        cartSubTotal: 0,
                                        cartTax: 0, 
                                        cartTotal: 0
                                    });

    useEffect(() => {
        setProducts();
    },[])

    const setProducts = () => {
        let tempProducts= [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        setState({...state, products: tempProducts});
    }
    const getItem = (id) => {
        const product = state.products.find(item => item.id === id)
        return product ;
    }
    const handleDetail = (id) => {
        const product = getItem(id);
        setState(prevState =>
            ({...prevState, detailProduct: product}));
    }
    const addToCart = (id) => {
        let tempProducts = [...state.products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count =  1;
        const price = product.price;
        product.total = price;
        var subTotal = state.cartSubTotal;
        (subTotal += product.total);
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = (subTotal + tax).toFixed(2);
        setState((prevState) =>
            ({...prevState, cart: [...prevState.cart, product], products: tempProducts, modalOpen: true, cartSubTotal: subTotal, cartTax: tax, cartTotal: total})
        );
    }
    const openModal = (id) => {
        const product = getItem(id);
        setState(prevState =>
            ({...prevState, modalProduct: product, modalOpen: true})
            );
    }
    const closeModal = () => {
        setState({...state, modalOpen: false});
    }
    const increment = (id) => {
        let tempCart = [...state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        let subTotal = 0;
        tempCart.map(item => {
            return (subTotal += item.total)
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = (subTotal + tax).toFixed(2);
        setState(prevState => ({
            ...prevState, cart:[...tempCart], cartSubTotal: subTotal, cartTax: tax, cartTotal: total
        }))
    }
    const decrement = (id) => {
        let tempCart = [...state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0){
            removeItem(id);
        }else{
            product.total = product.count * product.price;
            let subTotal = 0;
            tempCart.map(item => {
                return (subTotal += item.total)
            });
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = (subTotal + tax).toFixed(2);
            setState(prevState => ({
                ...prevState, cart:[...tempCart], cartSubTotal: subTotal, cartTax: tax, cartTotal: total
            }))
        }
    }
    const removeItem = (id) => {
        let tempProducts = [...state.products];
        let tempCart = [...state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        let subTotal = 0;
        tempCart.map(item => {
            return (subTotal += item.total)
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = (subTotal + tax).toFixed(2);
        setState(prevState => (
            {...prevState, cart: [...tempCart], products: [...tempProducts], cartSubTotal: subTotal, cartTax: tax, cartTotal: total}
        ))
    }
    const clearCart = () => {
        let tempProducts= [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        setState({...state, products: tempProducts, cart: [], cartSubTotal: 0, cartTax: 0, cartTotal: 0});
    }
    // const addTotals = () => {
    //     let subTotal = 0;
    //     state.cart.map(item => {
    //         (subTotal += item.total)
    //     });
    //     const tempTax = subTotal * 0.1;
    //     const tax = parseFloat(tempTax.toFixed(2));
    //     const total = subTotal + tax;
    //     setState({...state, cartSubTotal: subTotal, cartTax: tax, cartTotal: total})
    // }
    return (
        <ProductContext.Provider value={{
            ...state,
            handleDetail,
            addToCart,
            openModal,
            closeModal,
            increment,
            decrement,
            removeItem,
            clearCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}

