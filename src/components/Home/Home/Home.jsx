import React, { useEffect, useState } from 'react';
import BannerDP from '../../../../public/andre-rush-compressed-700x700.jpeg';

const Home = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefData(data));
    }, []);

    console.log(chefData);

    return (
        <div className='mb-20'>
            <div className='flex gap-5 justify-center items-center'>
                <div className='col'>
                    <h2  style={{fontFamily: 'Dancing Script, cursive', fontWeight:400}}  className='text-3xl  text-green-600'>OurStory </h2>
                    <h3 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400}}  className="font-semibold text-4xl mt-3">Traditional & Modern <br /> Service <span className='text-green-600'>Since 1970</span></h3>
                    <p className='font-bold text-gray-400 mt-3'>Ut neque turpis dolor sit amet consectetur adipiscing elit purus egestas <br /> diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor  <br />  morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est <br /> malesuada tellus sed nunc, etiam maecenas.</p>
                </div>
                <div className='col'> 
                    <img style={{width:' 500px'}} className='rounded-lg' src={BannerDP} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Home;