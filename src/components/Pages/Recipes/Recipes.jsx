/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AuthContext } from "../../providers/AuthProvider";

const Recipes = () => {
    const params = useParams();


    const [infos, setinfos] = useState({});
    const [disable, setDisable] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)

    const handleAddToFavorites = (name) => {
        toast("add to your Favourite");
        setDisable([...disable, name]);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/chefs/${params.id}`)
            .then((res) => res.json())
            .then((data) => setinfos(data));
        setLoading(false);
    }, [params]);

    console.log(infos);
    return (
        <div>
            {loading ? (
                <div className=" flex justify-center">
                    <div
                        className="radial-progress animate-spin my-3 mb-10"
                        style={{ "--value": 50 }}
                    ></div>
                </div>
            ) : (
                <div>
                    <h2
                        style={{ fontFamily: "Dancing Script, cursive", fontWeight: 400 }}
                        className="flex justify-center text-3xl mt-5 mb-5 text-green-600"
                    >
                        {" "}
                        Chef infos?rmation{" "}
                    </h2>

                    <div className="mb-5 border  bg-green-100 p-3">
                        <div className="flex items-center">
                            <div>
                                <LazyLoadImage
                                    alt={"Album"}
                                    src={infos?.picture}
                                    style={{ width: "700px" }}
                                />

                            </div>
                            <div className="ms-2">
                                <h2
                                    style={{ fontFamily: "Lato, sans-serif", fontWeight: 700 }}
                                    className="card-title text-3xl"
                                >
                                    {infos?.name}
                                </h2>
                                <p className="font-semibold">Short Bio: {infos?.bio}</p>
                                <p className="text-2xl ">
                                    Years of Experience: {infos?.years_of_experience} years
                                </p>
                                <p className="font-semibold">
                                    Numbers of Recipes: {infos?.num_recipes}
                                </p>
                                <p className="font-semibold">
                                    Likes: {infos?.likes}{" "}
                                    <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue" }} />
                                </p>
                            </div>
                        </div>
                        <h2
                            style={{ fontFamily: "Dancing Script, cursive", fontWeight: 400 }}
                            className="text-3xl  text-green-600 mb-5 mt-5"
                        >
                            Chef's Special recipes -{" "}
                        </h2>
                        {/* -------------recipes list -------- */}

                        <div className="mt-5 flex gap-5">
                            {infos?.recipes?.map((recipe, key) => {
                                return (
                                    <div key={key} className="card w-96 glass">
                                        <figure>
                                            <LazyLoadImage
                                                alt={"Album"}
                                                src={recipe?.picture}
                                                style={{ width: '300px' }}
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{recipe.name}</h2>
                                            <p>
                                                <span className="font-semibold">
                                                    Ingredients: {recipe.ingredients}
                                                </span>
                                            </p>
                                            <p>
                                                <span className="font-semibold">
                                                    Cooking Method: {recipe.cooking_method}
                                                </span>{" "}
                                            </p>
                                            <div>
                                                <p>
                                                    <span className="font-semibold ">
                                                        rating: {recipe.rating}{" "}
                                                        <Rating
                                                            emptySymbol={<FontAwesomeIcon icon={faStar} className="text-white-400" />}
                                                            fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-400" />}
                                                            initialRating={recipe.rating}
                                                            readonly
                                                        />
                                                    </span>
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleAddToFavorites(recipe.name)}
                                                disabled={
                                                    disable.filter((a) => a == recipe.name).length ? true : false
                                                }
                                                className="btn btn-accent border-green-600"
                                            >
                                                add to Favorite
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <ToastContainer />
                </div>
            )}
        </div >
    );
};

export default Recipes;