import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                {/* banner */}
                <div className="banner">
                    
                </div>
                {/* banner ends */}

                {/* product section */}
                <div className="home__row">

                <Product 
                id={10}
                title="Ikigai:The japaneese secret to a long and happy life"
                price={19.99}
                rating={5}
                image="https://images4.penguinrandomhouse.com/cover/9780143130727"
                />

                <Product
                id={11}
                title="Disano extra virgin olive oil, first cold pressed,1L"
                price={6.15}
                rating={4}
                image="https://m.media-amazon.com/images/I/712YpNymS3L._SX569_.jpg"/>
                </div>
                <div className="home__row">
                <Product
                id={12}
                title="Acer predator galea 311, gaming headset"
                price={40}
                rating={5}
                image="https://m.media-amazon.com/images/I/51th7Ac8xJL._SX466_.jpg"
                />
                <Product
                id={13}
                title="Panache Mini PC - S10 with Intel Atom Z8350 CPU,"
                price={130}
                rating={4}
                image="https://m.media-amazon.com/images/I/71wtVIGirqL._SX466_.jpg"
                />
                <Product
                id={14}
                title="Dell XPS 7390 13.3-inch (33.78 cms) UHD Display Thin & Light Laptop (10th Gen Core i7-10510U/16GB/512GB SSD/Win 10 + MS Office/Integrated Graphics), Silver "
                price={1400}
                rating={4}
                image="https://m.media-amazon.com/images/I/610o0lI8IFL._SY355_.jpg"/>
                </div>
                <div className="home__row">
                <Product
                id={15}
                title="HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports, AMD FreeSync(3KS61AA) "
                price={140}
                rating={5}
                image="https://m.media-amazon.com/images/I/71yYGgCG+hL._SL1500_.jpg"
                />
                </div>
                {/* product section ends */}
            </div>
            
        </div>
    )

}

export default Home
