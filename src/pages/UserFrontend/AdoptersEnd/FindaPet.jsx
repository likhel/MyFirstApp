import React from "react";
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import PetCard from "../../../components/PetCard";

const fetchPets = async () => {
  const response = await axios.get(`http://192.168.18.66:8000/Pets/petsList/`);
  return response.data.results;
};

const FindaPet = () => {
  const { data: pets = [], isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: fetchPets,
    staleTime: 1000 * 60, // Keep data fresh for 1 minute
    cacheTime: 5000 * 60, // Cache data for 5 minutes
  });

  return (
    <>
      {/* Search and Filter Section */}
      <div className="bg-white p-6 shadow-md rounded-md mx-auto max-w-4xl mt-8">
        <div className="flex  space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Breed selection */}
          <div className="w-full sm:w-1/3">
            <label
              htmlFor="breed"
              className="block text-gray-700 font-bold mb-2"
            >
              Select animal type
            </label>
            <select
              id="breed"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
            >
              <option>All </option>
            </select>
          </div>

          {/* Location input */}
          <div className="w-full sm:w-2/3">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Select location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Nationwide... or start typing"
              className="block w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
        </div>
      </div>

      {/* Pets Grid Section */}
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Available Dogs for Adoption
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Loading Spinner */}
          {isLoading ? (
            <div className="flex justify-center items-center w-full col-span-full">
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
            </div>
          ) : (
            /* Map over fetched pets data */
            pets.slice(0, 8).map((pet, i) => <PetCard key={i} item={pet} />)
          )}
        </div>
      </div>
    </>
  );
};

export default FindaPet;
