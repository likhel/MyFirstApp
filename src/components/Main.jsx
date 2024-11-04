import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faHeart, faPaw, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('images/bodydog.jpg')",
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-4">
          <button className="bg-emerald-600 text-white text-xl px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 hover:translate-x-4 hover:-translate-y-2 hover:bg-green-600">
            <FontAwesomeIcon icon={faSearch} />
            <span>I want to adopt a pet</span>
          </button>
          <button className="bg-emerald-600 text-white text-xl px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 hover:translate-x-4 hover:-translate-y-2 hover:bg-green-600">
            <FontAwesomeIcon icon={faHome} />
            <span>I want to rehome a pet</span>
          </button>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why choose PauseFurrPaws?</h2>
        <p className="text-gray-600 mb-12">
          Because we enable direct pet adoption, from one good home to another.
        </p>
        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
            <FontAwesomeIcon icon={faHeart} className="text-green-600 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-4">Safe & Respected</h3>
            <p className="text-gray-600">
              Every pet deserves to be safe, loved, and respected.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
            <FontAwesomeIcon icon={faPaw} className="text-green-600 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-4">Ethical Adoption</h3>
            <p className="text-gray-600">
              Adoption reduces the demand for illegal pet imports and abuse.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
            <FontAwesomeIcon icon={faHandshake} className="text-green-600 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-4">Responsible Rehoming</h3>
            <p className="text-gray-600">
              We prioritize pet welfare and offer a safer alternative.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main
