import React, { useEffect, useState } from 'react';
import Deleteimg from "../assets/images/close.png"

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart items from local storage when the component mounts
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []); // Empty dependency array to run this effect only once on component mount

    const handleDelete = (indexToDelete) => {
        // Filter out the item that matches the index
        const updatedCartItems = cartItems.filter((_, index) => index !== indexToDelete);

        // Update the state and local storage
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    return (
        <section className="flex-column d-flex justify-content-center align-items-center bg-gray">
            <h4 className='trending-heading'>Shopping Cart
                
            </h4>
            <div className="cart bg-white">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div className="cart-item mb-1  d-flex justify-content-between align-items-center" key={index}>
                            <button className="delete d-flex justify-content-center align-items-center" onClick={() => handleDelete(index)}>
                                <img src={Deleteimg} alt="" width={10} />
                                </button>
                            <div className="d-flex justify-content-center align-items-center">
                                <img className="cart-80px" src={item.image} alt={item.title} />
                                <div className="m-2">
                                    <p className="m-0">{item.title}</p>
                                    <p className="m-0">{item.author}</p>
                                    <p className='m-0 price'>{item.price}</p>

                                </div>
                            </div>
                            <div>
                                <button className="m-2 amount-btn">+</button>
                                <button className="m-2 amount-btn">-</button>
                            </div>

                        </div>
                    ))
                )}

            </div>
        </section>
    );
}

export default Cart;
