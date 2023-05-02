import React, { useEffect, useState } from 'react';
import BannerDP from '../../../../public/andre-rush-compressed-700x700.jpeg';
import carouselpic1 from '../../../../public/c1.jpg';
import carouselpic2 from '../../../../public/c2.png';
import carouselpic3 from '../../../../public/c3.jpg';
import carouselpic4 from '../../../../public/c4.jpg';
import HCard from '../HCard/HCard';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, []);

    console.log(chefs);

    return (
        <div>
            <h1 style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }} className='flex justify-center mt-10 text-4xl text-green-700'>Welcome to ChedMania</h1>
            {/* ------------------Carousel section---------------------- */}
            <div className="carousel w-full h-96 mt-10 mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={carouselpic1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={carouselpic2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={carouselpic3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={carouselpic4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/*-------------------- Our Story --------------------- */}

            <div className='flex justify-center mb-20'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2  gap-5  items-center'>
                    <div className=''>
                        <h2 style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 400 }} className='text-3xl  text-green-600'>OurStory </h2>
                        <h3 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }} className="font-semibold text-4xl mt-3">Traditional & Modern <br /> Service <span className='text-green-600'>Since 1970</span></h3>
                        <p className='font-bold text-gray-400 mt-3'>Ut neque turpis dolor sit amet consectetur adipiscing elit purus egestas <br /> diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor  <br />  morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est <br /> malesuada tellus sed nunc, etiam maecenas.</p>
                    </div>
                    <div className=''>
                        <img style={{ width: ' 500px' }} className='rounded-lg' src={BannerDP} alt="" />
                    </div>
                </div>


            </div>

            {/*------------------------ Our Chef ---------------------------- */}
            <div>
                <h1 style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }} className='flex justify-center mt-10 text-4xl text-green-700 mb-20'>Our Chef</h1>

                {
                    chefs.map(chef => <HCard
                    key={chef.id}
                    chef= {chef}
                    >
                        
                    </HCard>)
                }
            </div>

        </div>
    );
};

export default Home;