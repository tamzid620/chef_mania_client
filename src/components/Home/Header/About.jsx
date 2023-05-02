import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3 className=' flex justify-center text-4xl font-semibold  mt-20'>NO About . Just Eat...</h3>
            <Link className='flex justify-center' to="/chefinfo"><button className='bg-green-500 mt-3 p-2 rounded-xl text-white font-semibold mb-20 '>back to recipes</button></Link>
        </div>
    );
};

export default About;