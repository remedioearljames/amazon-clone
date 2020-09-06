import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <img className="home_image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt = ""
            />

            <div className="home_row">
            <Product
                id="1251asd"
                title="SanDisk 128GB microSDXC UHS-I-Memory-Card for Nintendo-Switch - SDSQXAO-128G-GNCZN"
                image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_UY218_.jpg"
                price={20.49}
                rating={3}
            />

            <Product
                id="5123"
                title="amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)"
                image="data:image/webp;base64,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"
                price={12.49}
                rating={3}
            />

           
            </div>

            <div className="home_row">
                <Product
                    id="123"
                    title="Turtle Beach - Ear Force Recon 50P Stereo Gaming Headset - PS4 and Xbox One (compatible w/ Xbox One controller w/ "
                    image="https://m.media-amazon.com/images/I/81dh8R950eL._AC_UY218_.jpg"
                    price={50.49}
                    rating={3}
                />

                <Product
                    id="eqwe"
                    title="Minecraft - Nintendo Switch"
                    image="https://m.media-amazon.com/images/I/71dIHv1zh7L._AC_UY218_.jpg"
                    price={30.49}
                    rating={3}
                />
                <Product
                    id="12r123"
                    title="Intel BX80684I79700KF Intel Core i7-9700KF Desktop Processor 8 Cores up to 4.9 GHz Turbo Unlocked Without Processor Graphics LGA1151 300 Series 95W"
                    image="https://images-na.ssl-images-amazon.com/images/I/41bcJWJLZ1L._AC_US160_.jpg"
                    price={470.29}
                    rating={3}
                />
            </div>

            <div className="home_row">
                <Product
                    id="124213"
                    title="SAMSUNG: EVO Select 128GB microSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME128HA)"
                    image="https://m.media-amazon.com/images/I/81axmUuRHrL._AC_UY218_.jpg"
                    price={242.49}
                    rating={3}
                />

                
            </div>

        </div>

    )
}

export default Home
