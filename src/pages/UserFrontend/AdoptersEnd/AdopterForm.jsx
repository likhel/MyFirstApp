import React, { useState } from "react";

const AdopterForm = () => {
  const [formData, setFormData] = useState({
    district: "",
    ward: "",
    contact: "",
    garden: "",
    image: null,
    adults: 0,
    children: 0,
    visitingChildren: "",
    otherAnimals: "",
    homeType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  const handleReset = () => {
    setFormData({
      district: "",
      ward: "",
      contact: "",
      garden: "",
      image: null,
      adults: 0,
      children: 0,
      visitingChildren: "",
      otherAnimals: "",
      homeType: "",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Adopter Form
      </h1>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          Address Details
        </h2>

        <div className="mb-4">
          <label htmlFor="district" className="block text-gray-600">
            District
          </label>
          <input
            type="text"
            name="district"
            placeholder="Enter the district..."
            value={formData.district}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ward" className="block text-gray-600">
            Ward Number
          </label>
          <input
            type="number"
            name="ward"
            value={formData.ward}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-600">
            Contact Number
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-xl font-medium text-gray-800 mt-6 mb-4">
          About Your Home
        </h2>

        <div className="mb-4">
          <label htmlFor="garden" className="block text-gray-600">
            Do you have a garden?
          </label>
          <input
            type="text"
            name="garden"
            value={formData.garden}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-xl font-medium text-gray-800 mt-6 mb-4">
          Images of Your Home *
        </h2>

        <div className="mb-4">
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-xl font-medium text-gray-800 mt-6 mb-4">
          People in Your Home
        </h2>

        <div className="mb-4">
          <label htmlFor="adults" className="block text-gray-600">
            Number of adults
          </label>
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="children" className="block text-gray-600">
            Number of children
          </label>
          <input
            type="number"
            name="children"
            value={formData.children}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="visitingChildren" className="block text-gray-600">
            Any visiting children?
          </label>
          <select
            name="visitingChildren"
            value={formData.visitingChildren}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="otherAnimals" className="block text-gray-600">
            How many other animals do you have at your home?
          </label>
          <select
            name="otherAnimals"
            value={formData.otherAnimals}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">More than 3</option>
          </select>
        </div>

        <h2 className="text-xl font-medium text-gray-800 mt-6 mb-4">
          Your Experience with Animals
        </h2>

        <div className="mb-4">
          <label htmlFor="homeType" className="block text-gray-600">
            Tell us about the type of home you plan to offer
          </label>
          <input
            type="text"
            name="homeType"
            value={formData.homeType}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="reset"
            onClick={handleReset}
            className="bg-gray-300 text-white py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Save my adopter's profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdopterForm;