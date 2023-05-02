import React, { useEffect, useState } from 'react';

const Home = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefData(data));
    }, []);

    console.log(chefData);

    return (
        <div>
            <h2> Our Services </h2>

        </div>
    );
};

export default Home;