import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import emailValidator from "email-validator";
import { Link } from "react-router-dom";

const SignUpAsAdopter = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const confirmPasswordRef = useRef();

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  useEffect(() => {
    if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
      setError((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setError((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  }, [formData.password, formData.confirmPassword]);

  const validate = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required.";

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailValidator.validate(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one special character, and one number.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.focus();
      return;
    }

    setError({});
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/users/register", formData);
      console.log(response.data);
      alert("Registration successful!");
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setError({ api: err.response?.data?.message || "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Username", type: "text", name: "username", icon: faUser },
            { label: "Email Address", type: "email", name: "email", icon: faEnvelope },
            { label: "Password", type: "password", name: "password", icon: faLock },
            { label: "Confirm Password", type: "password", name: "confirmPassword", icon: faLock },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
                {field.label}
              </label>
              <div className="flex items-center border rounded-lg px-4 py-2">
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required
                  ref={field.name === "confirmPassword" ? confirmPasswordRef : null}
                />
                <FontAwesomeIcon icon={field.icon} className="text-green-600 ml-4" />
              </div>
              {error[field.name] && (
                <span className="text-red-500 text-sm" aria-live="assertive">
                  {error[field.name]}
                </span>
              )}
            </div>
          ))}
          {error.api && <p className="text-red-500 text-sm text-center">{error.api}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-green-600 text-white font-bold py-2 px-8 rounded-lg transition duration-200 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-green-600"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
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

export default SignUpAsAdopter;
