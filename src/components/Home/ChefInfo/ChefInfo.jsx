import React, { useEffect, useState } from 'react';

const ChefInfo = () => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setInfos(data));
    }, []);
    return (
        <div>
            <h3>Chef Info</h3>
            {
                infos.map(info => <div
                    key={info.id}
                >
                    <div style={{width:'400px'}} className='mb-5'>
                        <img src={info.picture} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default ChefInfo;