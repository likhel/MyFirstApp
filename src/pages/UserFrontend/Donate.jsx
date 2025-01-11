import React from 'react'
import { Link } from 'react-router-dom';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Donate = () => {
    return (
        <div className="flex-col">
            <div className="flex justify-evenly items-center gap-20 mb-10 mt-20">
                <div className="div">
                    <h2 className='text-2xl font-semibold mb-6'>Help us to neuter the pets!</h2>
                    <p>
                        Maybe the time isn't right for you to adopt a pet, however you can help in another way.
                    </p>
                    <p>
                        Every year thousands of dogs, cats and rabbits are brought into this world through accidental litters, yet
                    </p>
                    <p className='mb-10'>
                        we know we don't have enough homes for them!

                    </p>
                    <h2 className='text-2xl font-semibold mb-6'>We don't want to turn away un-neutered pets at PetRehomer</h2>
                    <p>
                        We know that in an ideal world pets should be neutered before being rehomed. But this is real life,
                        <p>
                            and at PetRehomer we want to help adoptable family pets to find their ideal, responsible adopter.
                        </p>
                    </p>

                </div>
                <div className="">
                    <img src="images/poorcat.jpg" alt="image" className="h-80  rounded-xl shadow-md shadow-neutral-950 " />

                </div>

            </div>

            <div className="flex items-center ml-20 mb-16">
                <Link
                    to="/"
                    className="rounded-lg border-1 border-solid border-red-600 bg-red-600 px-4 py-1.5 font-semibold uppercase text-white transition-all duration-300 "
                >
                    <FontAwesomeIcon icon={faHeart} className="mr-2 fa-beat heart-icon  text-white" />
                    Donate Now
                </Link>
            </div>

            <div className="flex justify-evenly items-center gap-44 mb-20 mt-20 ">
                <div className="">
                    <img src="images/povertdog.jpg" alt="image" className="h-80  rounded-xl shadow-md shadow-neutral-950 " />

                </div>
                <div className="div">
                    <h2 className='text-2xl font-semibold mb-6'>How will it work?</h2>
                    <p>
                        If you adopt a pet through the PetRehomer service that has not been neutered,
                    </p>
                        <p> we may be able to help towards the cost. Before you book your pet's neutering,</p>
                        <p className='mb-6'>please read our Terms and Conditions which explains the process in more detail.</p>
                        <p>Applications for support must be made within 60 days of adopting through our</p>
                        <p>service.

                        If our fund allows (it is constantly changing!), we will reimburse a proportion</p>
                        <p>of the cost to you after the procedure has been carried out by a qualified vet at</p>
                        <p>a UK veterinary practice.

                        Every situation is considered on a case by case basis</p> 
                        <p>(subject to our Terms and Conditions), and we promise to help where we can.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Donate



