import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock,faUser,faPhone,faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUpAsRehomer = () => {
   return (
       <>
         <div className="flex justify-center items-center h-screen bg-gray-100">
           <div className="w-full max-w-2xl relative bg-white shadow-md rounded-lg p-6">
             <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
             <form>
               
               <div className="mb-4 ">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                   Email Address
                 </label>
                 <div className="flex items-center justify-between  border rounded-lg px-4 py-2"  style={{ width: "300px" }}>
                   
                   <input
                     type="email"
                     id="email"
                     className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your email"
                     required
                   />
                   <FontAwesomeIcon icon={faEnvelope} className="text-green-600 ml-4" />
                 </div>
               </div>
               <div className='flex  justify-between'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                        Firstname
                        </label>
                        <div className = 'flex items-center justify-between border rounded-lg px-4 py-2 ' style={{ width: "300px" }}>
                        <input
                            type="text"
                            id="firtname"
                            className="w-42 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            Placeholder="e.g Maryln"
                            required
                        />
                        <FontAwesomeIcon icon = {faUser} className='text-green-600 ml-4'/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                        Lastname
                        </label>
                        <div className = 'flex items-center justigy-between border rounded-lg px-4 py-2' style={{ width: "300px" }}>
                        <input
                            type="text"
                            id="lastname"
                            className="w-42 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g Doe"
                            required
                        />
                        <FontAwesomeIcon icon = {faUser} className='text-green-600 ml-4'/>
                        </div>
                    </div>
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                   Telephone
                 </label>
                 <div className='flex items-center justify-between border rounded-lg px-4 py-2' style={{ width: "300px" }}>
                   <input
                     type="tel"
                     id="phonenumber"
                     className="w-42 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="e.g 9857910449"
                     required
                   />
                   <FontAwesomeIcon icon={faPhone} className="text-green-600 ml-14" />
                 </div>
               </div> 
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                   Address
                 </label>
                 <div className='w-full flex items-center justify-between border rounded-lg px-4 py-2' >
                   <input
                     type="text"
                     id="address"
                     className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your address"
                     required
                   />
                   <FontAwesomeIcon icon={faLocationPin} className="text-green-600 ml-4" />
                 </div>
               </div>
               <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                   Password
                 </label>
                 <div className='flex items-center justify-between border rounded-lg px-4 py-2' style={{ width: "300px" }}>
                   <input
                     type="password"
                     id="password"
                     className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Enter your password"
                     required
                   />
                   <FontAwesomeIcon icon={faLock} className="text-green-600 ml-14" />
                 </div>
               </div>
               <div className="mb-10">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                   Confirm Password
                 </label>
                 <div className='flex items-center justify-between border rounded-lg px-4 py-2' style={{ width: "300px" }}>
                   <input
                     type="password"
                     id="confirmpassword"
                     className="w-42 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Confirm your password"
                     required
                   />
                   <FontAwesomeIcon icon={faLock} className="text-green-600 ml-14" />
                 </div>
               </div>
               <div className='flex justify-center'>
                  <Link
                    to="/pethousehold"
                    className="max-w-32 bg-green-600  text-white font-bold px-8 py-2  rounded-lg hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid"
                  >
                    Next
                  </Link>
               </div>
             </form>
             <div className="mt-6 text-center">
               <p className="text-sm text-gray-600">
                 Already have an account?{" "}
                 <a href="/login" className="text-blue-500 hover:underline">
                   Log in
                 </a>
               </p>
             </div>
           </div>
         </div>
       </>
     );
}

export default SignUpAsRehomer