import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeart, faPerson} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative bg-slate-100 shadow-md sticky top-0 z-50 py-6">
      <div className="absolute top-4 right-11">
            <ul className="flex space-x-4 text-rose-500 ">
                <li><Link><FontAwesomeIcon icon={faFacebook} size="xl" className="transition-all duration-300 transform hover:translate-y-[-2.5px]" /></Link></li>
                <li><Link><FontAwesomeIcon icon={faTwitter} size="xl" className="transition-all duration-300 transform hover:translate-y-[-2.5px]" /></Link></li>
                <li><Link><FontAwesomeIcon icon={faInstagram} size="xl" className="transition-all duration-300 transform hover:translate-y-[-2.5px]" /></Link></li>
            </ul>
      </div>
      <div className="container mx-auto flex justify-around items-center py-4">
        <div className="flex items-center">
          <img src="images/paplogo.png" alt="Logo" className="h-28 mr-4" />
        </div>
        <nav>
          <ul className="flex space-x-6 text-slate-600 gap-2 text-base font-medium">
            <li><Link to="/" className="relative hover:text-green-700 group">Home
            <span
              
              className="absolute bottom-0 left-0 right-0 border-2 border-green-700 opacity-0 rounded-sm h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 ease-out group-hover:opacity-100 group-hover:scale-x-100"

            />
            </Link></li>
            <li><Link to="/adopt-a-pet" className="relative hover:text-green-700 group">Find a pet

            <span
              className="absolute bottom-0 left-0 right-0 border-2 border-green-700 opacity-0 rounded-sm h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 ease-out group-hover:opacity-100 group-hover:scale-x-100"

            />
            
            </Link></li>
            <li><Link to="/signupasregister" className="relative hover:text-green-700 group">List a pet
            <span
              className="absolute bottom-0 left-0 right-0 border-2 border-green-700 opacity-0 rounded-sm h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 ease-out group-hover:opacity-100 group-hover:scale-x-100"

            />
            
            </Link></li>
            <li className="text-slate-600">
              <FlyoutLink href="/adopters"  FlyoutContent={AdoptersContent}>
                Adopters <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-12px" />
              </FlyoutLink>
            </li>
            <li>
              <FlyoutLink href="/rehomers" FlyoutContent={RehomersContent}>
                Rehomers <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-12px" />
              </FlyoutLink>
            </li>
            <li>
              <FlyoutLink href="/help-advice" FlyoutContent={HelpAndAdviceContent}>
                Help and Advice <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-12px" />
              </FlyoutLink>
            </li>
            <li><Link to="/list-a-pet" className="hover:text-green-700">About Us</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-3">
          <Link to = "/donate-now" className="rounded-xl border-1 border-solid border-red-600 bg-white px-4 py-1 font-semibold uppercase text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white active:rounded-xl ">
            <FontAwesomeIcon icon={faHeart} className="mr-2 fa-beat heart-icon active:text-red-600 hover:text-white" />
            Donate
          </Link>
          <Link to="/login" className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-1 font-semibold uppercase text-white transition-all duration-300 transform hover:translate-y-[-2.5px] active:rounded-2xl">
          <FontAwesomeIcon icon={faPerson} className="mr-2 active:text-red-600 hover:text-white" />
            Login/Register
          </Link>

        </div>
      </div>
    </header>
  );
};

// Flyout Link Component with Dropdown Menu Animation
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <Link to={href} className="relative text-slate-600 hover:text-green-700">
        {children}
        {/* Underline effect */}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute bottom-0 left-0 right-0 border-2 border-green-700 rounded-sm h-0.5 bg-green-700 transform scale-x-0 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-10 bg-white shadow-lg rounded-lg p-4 w-48"
            style={{ width: '200px' }}
          >
            {/* Triangle shape */}
            <div className="absolute top-0 left-4 transform -translate-y-1/2">
              <div className="w-3 h-3 bg-white rotate-45 shadow-lg"></div>
            </div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Content for Adopters Dropdown
const AdoptersContent = () => (
  <div className="space-y-2">
    <a href="#" className="block hover:underline text-green-700">Are You Ready To Adopt?</a>
    <a href="#" className="block hover:underline text-green-700">How It Works - Adopters</a>
    <a href="#" className="block hover:underline text-green-700">Adoption Guidelines</a>
    <a href="#" className="block hover:underline text-green-700">Top Tips For Adopters</a>
    <a href="#" className="block hover:underline text-green-700">Testimonials from Adopters</a>
    <a href="#" className="block hover:underline text-green-700">Browse Pets</a>
  </div>
);

// Content for Rehomers Dropdown
const RehomersContent = () => (
  <div className="space-y-2">
    <a href="#" className="block hover:underline text-green-700">How It Works - Rehomers</a>
    <a href="#" className="block hover:underline text-green-700">Rehoming Guidelines</a>
    <a href="#" className="block hover:underline text-green-700">Preparing Your Pet</a>
    <a href="#" className="block hover:underline text-green-700">Frequently Asked Questions</a>
  </div>
);

// Content for Help and Advice Dropdown
const HelpAndAdviceContent = () => (
  <div className="space-y-2">
    <a href="#" className="block hover:underline text-green-700">Frequently Asked Questions</a>
    <a href="#" className="block hover:underline text-green-700">Pet Care Information</a>
    <a href="#" className="block hover:underline text-green-700">Contact PetRehomer</a>
  </div>
);

export default Header;
