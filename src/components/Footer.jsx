import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
      <>
        <footer className="bg-gray-600 text-white py-8 px-4">
          <div className="container mx-auto grid grid-cols-1 px-5 md:grid-cols-4 gap-10">
            {/* About Us Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About Us</h2>
              <p className="text-sm text-gray-300">
                We’re reimagining how you can responsibly rehome and adopt pets in the Nepal. PauseFurrPaws believes that it is time to make pet rehoming and adoption better for pets, great for people, and safer for everyone. Together, we can responsibly rehome pets using a better, kinder adoption process.
              </p>
            </div>

            {/* Quick Links Section 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="#" className="hover:text-white">Frequently Asked Questions</Link></li>
                <li><Link to="#" className="hover:text-white">Check If You're Ready To Adopt A Pet</Link></li>
                <li><Link to="#" className="hover:text-white">Register for a free PetRehomer Account</Link></li>
                <li><Link to="#" className="hover:text-white">Login to your PetRehomer Account</Link></li>
                <li><Link to="#" className="hover:text-white">About Us</Link></li>
                <li><Link to="#" className="hover:text-white">Contact PetRehomer</Link></li>
                <li><Link to="#" className="hover:text-white">Tips For Adopters</Link></li>
                <li><Link to="#" className="hover:text-white">Tips For Rehomers</Link></li>
              </ul>
            </div>

            {/* Quick Links Section 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="#" className="hover:text-white">How It Works - Adopters</Link></li>
                <li><Link to="#" className="hover:text-white">How It Works - Rehomers</Link></li>
                <li><Link to="#" className="hover:text-white">Adoption Guidelines</Link></li>
                <li><Link to="#" className="hover:text-white">Giving Up A Dog</Link></li>
                <li><Link to="#" className="hover:text-white">Giving Up A Cat</Link></li>
                <li><Link to="#" className="hover:text-white">Volunteer With Us</Link></li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
              <ul className="flex space-x-4 text-gray-300">
                <li><Link><FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-white" /></Link></li>
                <li><Link><FontAwesomeIcon icon={faTwitter} size="lg" className="hover:text-white" /></Link></li>
                <li><Link><FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-white" /></Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </>
  );
};



export default Footer;