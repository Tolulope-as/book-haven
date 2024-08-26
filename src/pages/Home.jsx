import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import booksData from '../book.json';

import '../index.css'
import Navbar from '../components/Navbar';
import HeroImage1 from '../assets/images/bk6.webp';
import HeroImage2 from '../assets/images/b0k9.jpg';
import HeroImage3 from '../assets/images/bk10.jpg';

import Deal1 from '../assets/images/r11.jpg';
import Deal2 from '../assets/images/f7.jpg';
import Deal3 from '../assets/images/bk10.jpeg';


import TrendingBook1 from '../assets/images/bk7.webp';
import TrendingBook2 from '../assets/images/bk2.jpg';
import TrendingBook3 from '../assets/images/bk8.jpg';
import TrendingBook4 from '../assets/images/bk3.webp';
import TrendingBook5 from '../assets/images/bk5.webp';
import TrendingBook6 from '../assets/images/bk2.webp';

import LeftIcon from '../assets/images/left.png';
import RightIcon from '../assets/images/right.png';




function Home() {
    //Book category function
    const [selectedCategory, setSelectedCategory] = useState('Fiction'); // Default to 'Fiction'

    // Filter books based on the selected category
    const filteredBooks = booksData.filter(book => book.genre === selectedCategory);

    const handleCategoryChange = (genre) => {
        setSelectedCategory(genre); // Update the selected category
    };

    //Add to Cart Function
    const navigate = useNavigate();

    const handleAddToCart = (book) => {
        // Get the current cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Add the new book to the cart
        cartItems.push(book);
        
        // Save the updated cart back to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Navigate to the Cart page
        navigate('/cart');
    };


    // Scrollfunction
    useEffect(() => {
        const trendingBooks = document.querySelector('.trending-books-grid');
        const leftbutton = document.getElementById('left');
        const rightbutton = document.getElementById('right');

        function leftscroll() {
            trendingBooks.scrollLeft -= 50; 
        }

        function rightscroll() {
            trendingBooks.scrollLeft += 50;
        }

        leftbutton.addEventListener('click', leftscroll);
        rightbutton.addEventListener('click', rightscroll);

        // Cleanup the event listeners on component unmount
        return () => {
            leftbutton.removeEventListener('click', leftscroll);
            rightbutton.removeEventListener('click', rightscroll);
        };
    }, []);

    return(
    <>
    <section className="home">
        <div className="hero-section dm-sans">
            <h1>Biggest online <span className="underline">bookstore </span>in Nigeria.</h1>
            <p className="">Buy books and novels at affordable price and get 7% off your first purchase</p>
            <button className="order-button">Order now</button>
        </div>
        <div className="hero-image animate__animated animate__bounceInRight  custom-transition">
            <img src={HeroImage3} alt="" className="left-image" />
            <img src={HeroImage1} alt="" className="center-image" />
            <img src={HeroImage2} alt="" className="right-image" />
        </div>
    </section>
    <div class="d-flex d-flex-resp mt-1 poppins">
        <div class="bg-colour1 p-4 me-1 flex-fill d-flex flex-column justify-content-center align-items-center ">
                <p>Payday</p>
                <p className="fs-4 m-0">Deals</p>
                <p className="f-50px m-0 text-white">-25%</p>
            <button className="shop">Shop now</button>
        </div>
        <div class="bg-colour2 p-4 me-1 flex-fill d-flex flex-column justify-content-center align-items-center">
            <p>Best seller</p>
            <img className="w-90px mb-3" src={Deal1} alt="" />
            <button className="shop">Shop now</button>
        </div>
        <div class="bg-colour3 p-4  flex-fill d-flex justify-content-center align-items-center">
            <div className="promos">
                <img className="w-70px" src={Deal2} alt="" />
                <img className="w-90px n-margin " src={Deal3} alt="" />
            </div>
            <div className="">
                <p>Buy 1 get 1 FREE!</p>
                    <button className="shop">Shop now</button>
            </div>
        </div>
    </div>
    <section className="trending">
    <h4 className='trending-heading'>Trending Books</h4>
    <div className="trending-books-grid">
                <button id="left"><img src={LeftIcon} alt="" width="100%" /></button>
                <div className="item">
                    <img className="w-50px"  src={TrendingBook1} alt=""/>
                </div>
                <div className="item">
                    <img className="w-50px"  src={TrendingBook2} alt=""/>
                </div>
                <div className="item">
                    <img className="w-50px" src={TrendingBook3} alt=""/>
                </div>
                <div className="item">
                    <img className="w-50px" src={TrendingBook4} alt=""/>
                </div>
                <div className="item">
                    <img className="w-50px" src={TrendingBook5} alt=""/>
                </div>
                <div className="item">
                    <img className="w-50px" src={TrendingBook6} alt=""/>
                </div>
                <button id="right" ><img src={RightIcon} alt="" width="100%"/></button>

            </div>
    </section>
    <section className="dm-sans categories d-flex flex-column justify-content-center align-items-center" id='categories'>
    <h4 className='trending-heading'>Book Categories</h4>
        <div className="category-grid m-3">
                <button onClick={() => handleCategoryChange('Fiction')} className="category-btn">Fiction</button>
                <button onClick={() => handleCategoryChange('Non-Fiction')} className="category-btn">Non-fiction</button>
                <button onClick={() => handleCategoryChange('Romance')} className="category-btn">Romance</button>
            </div>

            <div className="book-display d-flex flex-wrap justify-content-center align-items-center">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="d-flex  animate__animated animate__fadeInDown custom-transition " style={{ width: '18rem', margin: '10px' }}>
                        <img 
                            src={book.image} 
                            className="w-100px " 
                            alt={book.title} 
                            loading="lazy" 
                        />
                        <div className="ms-3
                        ">
                            <div className="">
                            <i class="bi bi-star-fill likes"></i>
                            <i class="bi bi-star-fill likes"></i>
                            <i class="bi bi-star-fill likes"></i>
                            <i class="bi bi-star likes"></i>
                            </div>
                            <p className="card-title">{book.title}</p>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{book.genre}</p>
                            <button onClick={() => handleAddToCart(book)} className="buy">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
    </section>
    </>
    )
};


export default Home;


