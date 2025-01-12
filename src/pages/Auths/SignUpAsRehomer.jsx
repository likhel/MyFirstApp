import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateRehomerId } from "../../Redux/FormSlice";

const SignUpAsRehomer = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    contact_number: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.username) {
      newErrors.username = "Full name is required.";
    }
    if (!formData.contact_number) {
      newErrors.contact_number = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contact_number)) {
      newErrors.contact_number = "Enter a valid 10-digit contact number.";
    }
    if (!formData.address) {
      newErrors.address = "Address is required.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/register",
        formData
      );

      alert("Registration successful!");
      console.log(response.data.id);
      
      dispatch(updateRehomerId(response.data.id)); // Dispatch the rehomer ID to Redux
      navigate("/list-a-pet");
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message || "Failed to register. Please try again."
        );
      } else if (error.request) {
        alert(
          "No response from the server. Please check your network connection."
        );
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="focus:outline-none flex-grow"
                placeholder="Enter your email"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-green-600 ml-4"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="focus:outline-none flex-grow"
                placeholder="e.g., Mary Johnson"
              />
              <FontAwesomeIcon icon={faUser} className="text-green-600 ml-4" />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact_number"
            >
              Contact
            </label>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <input
                type="tel"
                id="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                className="focus:outline-none flex-grow"
                placeholder="e.g., 9857910449"
              />
              <FontAwesomeIcon icon={faPhone} className="text-green-600 ml-4" />
            </div>
            {errors.contact_number && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contact_number}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="focus:outline-none flex-grow"
                placeholder="Enter your address"
              />
              <FontAwesomeIcon
                icon={faLocationPin}
                className="text-green-600 ml-4"
              />
            </div>
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="focus:outline-none flex-grow"
                placeholder="Enter your password"
              />
              <FontAwesomeIcon icon={faLock} className="text-green-600 ml-4" />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg px-4 py-2">
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="focus:outline-none flex-grow"
                placeholder="Confirm your password"
              />
              <FontAwesomeIcon icon={faLock} className="text-green-600 ml-4" />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`max-w-32 bg-green-600 text-white font-bold px-8 py-2 rounded-lg hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Next"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpAsRehomer;
