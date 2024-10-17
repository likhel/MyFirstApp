import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
  return (
    <>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Find a pet to adopt</h3>
          
          {/* Buttons for pet types */}
          <div className="mb-4">
            <div className="inline-flex space-x-2">
              <button className="bg-green-600 text-white px-6 py-2 rounded">Dog</button>
              <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded ">Cat</button>
              <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded">Rabbit</button>
            </div>
          </div>

          {/* Filter options with controlled width */}
          <div className="bg-white p-6 shadow-md rounded-md mx-auto max-w-xl">
            <div className="flex space-x-4">
              
              {/* Breed selection */}
              <div className="w-1/3">
                <label htmlFor="breed" className="block text-gray-700 font-bold mb-2">Select breed</label>
                <select id="breed" className="block w-full border border-gray-300 rounded-md py-2 px-3">
                  <option>All breeds</option>
                </select>
              </div>

              {/* Location input */}
              <div className="w-2/3">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Select location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Nationwide... or start typing"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>

              {/* Search button */}
              <div className="flex items-end">
                <button className="bg-green-600 text-white px-6 py-2 rounded flex justify-start items-center w-48 hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid">
                  <FontAwesomeIcon icon={faSearchLocation} className="mr-2" />
                  Search dogs
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;


