import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {
    const params = useParams();
    const ChefInfo = useLoaderData();
    return (
        <div>
            <h2>ChefInfo : {ChefInfo.length}</h2>
        </div>
    );
};

export default Recipes;