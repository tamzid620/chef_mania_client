import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* 
                const [infos, setInfos] = useState([]);

    const  handleAddToFavorites= () =>{
        toast("add to your Favourite");
    }

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setInfos(data));
    }, []);
    return (
        <div>
            <h2 style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 400 }} className='flex justify-center text-3xl mt-5 mb-5 text-green-600'> Chef Information </h2>
            {
                infos.map(info => <div
                    key={info.id}
                >
                    <div className='mb-5 border  bg-green-100 p-3'>
                        <div className='flex items-center'>
                            <div>
                                <img style={{ width: '700px' }} src={info.picture} alt="" />
                            </div>
                            <div className='ms-2'>
                                <h2 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }} className="card-title text-3xl">{info.name}</h2>
                                <p className='font-semibold'>Short Bio: {info.bio}</p>
                                <p className='text-2xl '>Years of Experience: {info.years_of_experience} years</p>
                                <p className='font-semibold'>Numbers of Recipes: {info.num_recipes}</p>
                                <p className='font-semibold'>Likes: {info.likes} <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue" }} /></p>

                            </div>
                        </div>
                        <h2 style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 400 }} className='text-3xl  text-green-600 mb-5 mt-5'>Chef's Special recipes - </h2>
                        <div className='mt-5 flex gap-5'>
                            <div className="card w-96 glass">
                                <figure><img style={{ width: '300px' }} src={info.recipes[0].picture} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{info.recipes[0].name}</h2>
                                    <p><span className='font-semibold'>Ingredients:</span> {info.recipes[0].ingredients}</p>
                                    <p><span className='font-semibold'>Cooking Method:</span> {info.recipes[0].cooking_method}</p>
                                    <p><span className='font-semibold'>rating:</span> {info.recipes[0].rating}</p>
                                    <button onClick={handleAddToFavorites} className="btn btn-accent border-green-600">add to Favorite</button>
                                </div>
                            </div>
                            <div className="card w-96 glass">
                                <figure><img style={{ width: '300px' }} src={info.recipes[1].picture} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{info.recipes[1].name}</h2>
                                    <p><span className='font-semibold'>Ingredients:</span> {info.recipes[1].ingredients}</p>
                                    <p><span className='font-semibold'>Cooking Method:</span> {info.recipes[1].cooking_method}</p>
                                    <p><span className='font-semibold'>rating:</span> {info.recipes[1].rating}</p>
                                    <button onClick={handleAddToFavorites} className="btn btn-accent border-green-600">add to Favorite</button>
                                </div>
                            </div>
                            <div className="card w-96 glass">
                                <figure><img style={{ width: '300px' }} src={info.recipes[2].picture} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{info.recipes[2].name}</h2>
                                    <p><span className='font-semibold'>Ingredients:</span> {info.recipes[2].ingredients}</p>
                                    <p><span className='font-semibold'>Cooking Method:</span> {info.recipes[2].cooking_method}</p>
                                    <p><span className='font-semibold'>rating:</span> {info.recipes[2].rating}</p>
                                    <button onClick={handleAddToFavorites} className="btn btn-accent border-green-600">add to Favorite</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <ToastContainer />
        </div>
    );
 */}
        </div>
    );
};

export default Layout;