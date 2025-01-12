import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAboutPet } from "../../../Redux/FormSlice"; // Ensure this path is correct

const ListaPetAboutPet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aboutPet = useSelector((state) => state.form.aboutPet); // Adjust based on your state structure

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.string().required("Age is required"),
    breed: Yup.string().required("Pet breed is required"),
    size: Yup.string().required("Size of pet is required"),
    gender: Yup.string().required("Gender of the pet is required"),
    sterilization: Yup.string().required("Please select an option"),
    pet_img: Yup.array()
      .min(1, "Please upload at least 1 photo.")
      .test(
        "fileType",
        "Only image files are allowed.",
        (value) => value && Array.from(value).every((file) =>
          ["image/jpeg", "image/png"].includes(file.type)
        )
      )
      .test(
        "fileSize",
        "Each image must be smaller than 2MB.",
        (value) => value && Array.from(value).every((file) => file.size <= 2 * 1024 * 1024)
      ),
    terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
    ownedTime: Yup.string().required("Please select an option"),
    getFrom: Yup.string().required("Please select an option"),
    color: Yup.string().required("Please select an option"),
  });

  const initialValues = {
    name: aboutPet.name || "",
    age: aboutPet.age || "",
    breed: aboutPet.breed || "",
    size: aboutPet.size || "",
    gender: aboutPet.gender || "",
    sterilization: aboutPet.sterilization || "",
    pet_img: [],
    terms: aboutPet.terms || false,
    ownedTime: aboutPet.ownedTime || "",
    getFrom: aboutPet.getFrom || "",
    color: aboutPet.color || "",
  };

  const handleFileChange = (e, setFieldValue) => {
    const files = Array.from(e.currentTarget.files);
    if (files.length === 0) {
      setFieldValue("pet_img", []);
    } else if (files.every((file) =>
      ["image/jpeg", "image/png"].includes(file.type)
    )) {
      setFieldValue("pet_img", files);
    } else {
      alert("Only JPEG and PNG image files are allowed.");
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    const pet_img = values.pet_img.map((file) => file.name);
    const aboutPetValues = {
      ...values,
      pet_img,
    };
    dispatch(updateAboutPet(aboutPetValues));
    alert("Pet listed successfully!");
    navigate("/pet-behaviour");
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="bg-lime-200 rounded-3xl shadow-lg p-8 w-full max-w-5xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name of the pet</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age of the pet</label>
              <Field
                type="number"
                id="age"
                name="age"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
              <ErrorMessage name="age" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="breed" className="block text-gray-700 font-semibold mb-2">Breed of the pet</label>
              <Field
                type="text"
                id="breed"
                name="breed"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
              <ErrorMessage name="breed" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="size" className="block text-gray-700 font-semibold mb-2">Size of the pet</label>
              <Field
                as="select"
                id="size"
                name="size"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="" label="Select size" />
                <option value="small" label="Small" />
                <option value="medium" label="Medium" />
                <option value="large" label="Large" />
              </Field>
              <ErrorMessage name="size" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender of the pet</label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="select">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="sterilization" className="block text-gray-700 font-semibold mb-2">Sterilization</label>
              <Field
                as="select"
                id="sterilization"
                name="sterilization"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage name="sterilization" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="pet_img" className="block text-gray-700 font-semibold mb-2">Upload Photos</label>
              <input
                type="file"
                id="pet_img"
                name="pet_img"
                accept="image/jpeg,image/png"
                className="w-full border border-gray-300 rounded-md p-3"
                multiple
                onChange={(e) => handleFileChange(e, setFieldValue)}
              />
              <ErrorMessage name="pet_img" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="terms" className="block text-gray-700 font-semibold mb-2">Terms and Conditions</label>
              <Field
                type="checkbox"
                id="terms"
                name="terms"
                className="w-4 h-4"
              />
              <label htmlFor="terms" className="ml-2 text-gray-700">I agree to the terms and conditions</label>
              <ErrorMessage name="terms" component="div" className="text-red-500" />
            </div>

            <div className="mb-6">
              <label htmlFor="ownedTime" className="block text-gray-700 font-semibold mb-2">Owned Time</label>
              <Field
                as="select"
                id="ownedTime"
                name="ownedTime"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
               <option value="" label="Select status" />
                <option value="under 6 months" label="Under 6 months" />
                <option value="6 months to 1 year" label="6 months to 1 year" />
                <option value="1 - 2 years" label="1 - 2 years" />
                <option value="3 - 4 years" label="3 - 4 years" />
                <option value="5 years +" label="5 years +" />
              </Field>
              <ErrorMessage name="ownedTime" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="getFrom" className="block text-gray-700 font-semibold mb-2">Got From</label>
              <Field
                as="select"
                id="getFrom"
                name="getFrom"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="pet shop">Pet Shop</option>
                <option value="friend">Friend</option>
                <option value="family">Family</option>
              </Field>
              <ErrorMessage name="getFrom" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="mb-6">
              <label htmlFor="color" className="block text-gray-700 font-semibold mb-2">Color</label>
              <Field
                as="select"
                id="color"
                name="color"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </Field>
              <ErrorMessage name="color" component="div" className="text-red-500 mt-2" />
            </div>

            <div className="flex justify-between items-center">
              <Link to="/pethousehold" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">
                Back
              </Link>
              <button type="submit" className="bg-green-600 text-white font-bold px-10 py-2 rounded-md shadow-md transition duration-200">
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ListaPetAboutPet;