/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const HCard = ({ chef }) => {
    const {picture ,name,years_of_experience, num_recipes, likes, id} = chef;
    return (
        <div>
            <div className="card lg:card-side bg-green-100 shadow-xl mb-10 line-height-1 ">
                <figure><img style={{width:'300px'}} src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }} className="card-title text-3xl">{name}</h2>
                    <p className='text-2xl '>Years of Experience: {years_of_experience} years</p>
                    <p className='font-semibold'>Numbers of Recipes: {num_recipes}</p>
                    <p className='font-semibold'>Likes: {likes} <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue" }} /></p>
                    <div className="card-actions justify-end">
                    <Link to={`recipes/${id}`}><button className="btn btn-accent border-green-600">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HCard;