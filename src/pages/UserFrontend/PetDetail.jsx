import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Toastify package module
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const PetDetail = () => {
    const [pet, setPet] = useState({});
    const params = useParams();

    useEffect(() => {
        const id = params.pet_id;
        // Replace with your actual pets API endpoint
        axios.get(`https://fakestoreapi.com/pets/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, [params.pet_id]);

    // Handling addToCart function for local storage
    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("petCartItems")) || [];

        const petItem = {
            id: pet.id,
            name: pet.name,
            breed: pet.breed,
            price: pet.price,
            image: pet.image,
            description: pet.description,
            quantity: 1,
        };

        const existItem = cartItems.find(item => item.id === pet.id);

        if (existItem) {
            toast.error("This pet is already in your cart");
        } else {
            cartItems.push(petItem);
            localStorage.setItem("petCartItems", JSON.stringify(cartItems));
            toast.success(`${petItem.name} has been successfully added to your cart`);
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition="bounce"
            />

            <div className="container my-5">
                <div className="row d-flex justify-content-evenly py-2">
                    <div className="col-md-5">
                        <img src={pet.image} alt={pet.name} width={`450`} />
                    </div>
                    <div className="col-md-6">
                        <h2>{pet.name}</h2>
                        <h4>Breed: {pet.breed}</h4>
                        <h4>Price: ${pet.price}</h4>
                        <p>{pet.description}</p>
                        <button className="btn btn-warning" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PetDetail;