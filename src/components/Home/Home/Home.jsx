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

                {/* ----------------Weekly specials ---------- */}
            <div className='bg-black pt-3 pb-10'>
            <h1 style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }} className='flex justify-center mt-10 text-4xl text-green-500 mb-20'>Weekly specials</h1>
            <h3 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 600 }} className=" flex justify-center font-semibold text-4xl mt-3 mb-3 text-white">Menu Of the Day</h3>
            <div className='flex justify-center'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div style={{width:'500px'}} className='bg-white p-3 rounded-xl'>
                    <div className='flex mb-3'>
                    <div>
                        <h3 className='font-semibold text-lg'>American Combo Menu</h3>
                        <hr />
                        <p className='text-gr'>Maecenas posuere dolor sit amet consectur adipiscing purus egestas diam sit vitae egestas suspendisse amet…</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 font-bold'>$12</p>
                    </div>
                    </div>
                    <div className='flex mb-3'>
                    <div>
                        <h3 className='font-semibold text-lg'>Optic Breakfast Combo</h3>
                        <hr />
                        <p className='text-gr'>Nunc non tortor sed mi condimentum bibendum. Nunc sagittis elit nec ante facilisis varius. Aliquam…</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 font-bold'>$20</p>
                    </div>
                    </div>
                    <div className='flex mb-3'>
                    <div>
                        <h3 className='font-semibold text-lg'>Buffalo Meat Recipie Combo</h3>
                        <hr />
                        <p className='text-gr'>Nullam sit amet lectus at mauris scelerisque egestas at quis orci. Sed id eros sed…</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 font-bold'>$30</p>
                    </div>
                    </div>
                </div>
                <div style={{width:'500px'}} className='bg-white p-3 rounded-xl'>
                    <div className='flex mb-3'>
                    <div>
                        <h3 className='font-semibold text-lg'>Strawberry Jam French Toast</h3>
                        <hr />
                        <p className='text-gr'>Ut neque turpis, laoreet quis porttitor eu, scelerisque pellentesque dui. Suspendisse nec justo lacus. Quisque…</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 font-bold'>$15</p>
                    </div>
                    </div>
                    <div className='flex mb-3'>
                    <div>
                        <h3 className='font-semibold text-lg'>Truly Amazing Blueberry Recipes</h3>
                        <hr />
                        <p className='text-gr'>Fusce sagittis eros nec sapien sagittis auctor. Tortor sed ipsum dolor sit amet, consectetur adipiscing…</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 font-bold'>$25</p>
                    </div>
                    </div>
                    <div className='flex mb-3'>
                    <div>
                        <h3 className='font-semibold text-lg'>Toast Breakfast Menu Item</h3>
                        <hr />
                        <p className='text-gr'>Praesent tellus leo, finibus in ex nec, malesuada blandit arcu. In id quam eget sem…</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 font-bold'>$45</p>
                    </div>
                    </div>
                </div>
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


        </div>
    );
};

export default Home;