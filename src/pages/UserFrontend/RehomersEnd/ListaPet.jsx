import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePet } from "../../../Redux/FormSlice"; // Adjust this import as per your file structure

const ListaPet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pet = useSelector((state) => state.form.pet);
  const rehomerId = useSelector((state) => state.form.rehomerId);
  // const rehomerId = useSelector((state) => state.form.rehomerId); // Ensure this line is uncommented

  // Initial State
  const [formData, setFormData] = useState({
    petType: pet.petType || "",
    sterilization: pet.sterilization || "",
    reason: pet.reason || "",
    time: pet.time || "",
    photos: [],
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when the user reselects an option
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length >= 2) {
      const validFiles = files.every((file) =>
        ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
      );
      if (validFiles) {
        setFormData({ ...formData, photos: files });
        setErrors({ ...errors, photos: "" });
      } else {
        setErrors({ ...errors, photos: "Only image files are allowed." });
      }
    } else {
      setErrors({ ...errors, photos: "Please upload at least 2 photos." });
      setFormData({ ...formData, photos: [] });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Add this back
    // if (!rehomerId) {
    //   newErrors.rehomer = "Rehomer ID is required.";
    // }
    // if (!rehomerId) {
    //   console.log("error");
    //   newErrors.rehomer = "Rehomer ID is required.";
    // }
    if (!formData.petType) newErrors.petType = "Pet type is required.";
    if (!formData.sterilization)
      newErrors.sterilization = "Please select an option.";
    if (!formData.reason) newErrors.reason = "Reason for rehoming is required.";
    if (!formData.time)
      newErrors.time =
        "Details about how long you can keep the pet are required.";
    if (formData.photos.length < 2)
      newErrors.photos = "Please upload at least 2 photos.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const petData = {
      petType: formData.petType,
      sterilization: formData.sterilization,
      reason: formData.reason,
      time: formData.time,
      photos: formData.photos, // File upload handling might vary
      rehomerId,
    };

    try {
      // Dispatch the data to Redux
      await dispatch(updatePet(petData));

      // Navigate to the next page
      navigate("/pethousehold");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the pet data. Please try again.");
    }

    // Reset form data (optional)
    setFormData({
      petType: "",
      sterilization: "",
      reason: "",
      time: "",
      photos: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-5xl mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-1">
          Before You Start..
        </h2>
        <p className="mb-6">
          Please make sure you’ve read and agree to these points before you
          create a listing.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-lime-200 rounded-3xl shadow-lg p-8 w-full max-w-5xl"
      >
        {/* Pet Type */}
        <div className="mb-6">
          <label
            htmlFor="petType"
            className="block text-gray-700 font-semibold mb-2"
          >
            Are you rehoming a dog, cat or other pet?
          </label>
          <select
            id="petType"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Select an option</option>
            <option value="2">Dog</option>
            <option value="1">Cat</option>
            <option value="3">Rabbit</option>
          </select>
          {errors.petType && (
            <div className="text-red-500 text-sm mt-1">{errors.petType}</div>
          )}
        </div>

        {/* Sterilization */}
        <div className="mb-6">
          <label
            htmlFor="sterilization"
            className="block text-gray-700 font-semibold mb-2"
          >
            Is your pet spayed or neutered?
          </label>
          <select
            id="sterilization"
            name="sterilization"
            value={formData.sterilization}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.sterilization && (
            <div className="text-red-500 text-sm mt-1">
              {errors.sterilization}
            </div>
          )}
        </div>

        {/* Reason */}
        <div className="mb-6">
          <label
            htmlFor="reason"
            className="block text-gray-700 font-semibold mb-2"
          >
            Why do you need to rehome your pet?
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Select an option</option>
            <option value="Behavioural issues">Behavioural issues</option>
            <option value="Busy schedule">Busy schedule</option>
            <option value="Change in family circumstances">
              Change in family circumstances
            </option>
            <option value="Does not get along with another pet">
              Does not get along with another pet
            </option>
            <option value="Fostered">Fostered</option>
            <option value="Found">Found or abandoned</option>
            <option value="Human health issues">
              Human health issues (e.g allergies, sickness)
            </option>
            <option value="Infant, young children or pregnancy">
              Infant, young children or pregnancy
            </option>
            <option value="Landlord permission issues">
              Landlord permission issues
            </option>
            <option value="Ongoing costs">Ongoing costs (e.g lost job)</option>
            <option value="Pet medical expenses">
              Pet medical expenses (e.g vet procedure)
            </option>
          </select>
          {errors.reason && (
            <div className="text-red-500 text-sm mt-1">{errors.reason}</div>
          )}
        </div>

        {/* Time */}
        <div className="mb-12">
          <label
            htmlFor="time"
            className="block text-gray-700 font-semibold mb-2"
          >
            How long can you keep your pet while we find a new home?
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Select an option</option>
            <option value="less than 1 week">Less than 1 week</option>
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="3 weeks">3 weeks</option>
            <option value="1 month">1 month</option>
            <option value="2 months">2 months</option>
            <option value="over 2 months">Over 2 months</option>
          </select>
          {errors.time && (
            <div className="text-red-500 text-sm mt-1">{errors.time}</div>
          )}
        </div>

        {/* Photos */}
        <div className="mb-6">
          <label
            htmlFor="photos"
            className="block text-gray-700 font-semibold mb-2"
          >
            Upload at least 2 good-quality photos of your pet:
          </label>
          <input
            id="photos"
            name="photos"
            type="file"
            multiple
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
          {errors.photos && (
            <div className="text-red-500 text-sm mt-1">{errors.photos}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 text-white text-base font-bold px-8 py-2 rounded-md shadow-md border-2 border-solid border-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListaPet;
