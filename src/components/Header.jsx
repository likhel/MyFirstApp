import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeart, faPerson } from '@fortawesome/free-solid-svg-icons';
// import './header.css';



const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-around items-center py-4">
          <div className="flex items-center">
            <img src="images/paplogo.png" alt="Logo" className="h-24 mr-4" />
          </div>
          <nav>
            <ul className="flex space-x-6 text-gray-800">
              <li><Link to="/" className="hover:text-green-700">Home</Link></li>
              <li><Link to="/find-a-pet" className="hover:text-green-700">Find a pet</Link></li>
              <li><Link to="/list-a-pet" className="hover:text-green-700">List a pet</Link></li>
              <li>
                <Link to="/adopters" className="hover:text-green-700">
                  Adopters <FontAwesomeIcon icon={faChevronDown} className = 'text-12px' />
                </Link>
              </li>
              <li>
                <Link to="/rehomers" className="hover:text-green-700">
                  Rehomers <FontAwesomeIcon icon={faChevronDown} className = 'text-12px' />
                </Link>
              </li>
              <li>
                <Link to="/ways-to-help" className="hover:text-green-700">
                  Ways to help <FontAwesomeIcon icon={faChevronDown} className = 'text-12px'/>
                </Link>
              </li>
              <li><Link to="/about-us" className="hover:text-green-700">About Us</Link></li>
              <li>
                <Link to="/help-advice" className="hover:text-green-700">
                  Help and advice <FontAwesomeIcon icon={faChevronDown} className = 'text-12px'/>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center hover:bg-rose-500">
              <FontAwesomeIcon icon={faHeart} className="mr-2 fa-beat heart-icon" />
              Donate
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-500">
              <FontAwesomeIcon icon={faPerson} className="mr-2" />
              Login/Register
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
