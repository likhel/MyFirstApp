import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const ListaPetAboutPet = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.string().required("Age is required"),
    breed: Yup.string().required("Pet breed is required"),
    size: Yup.string().required("Size of pet is required"),
    gender: Yup.string().required("Gender of the pet is required"),
    sterialization: Yup.string().required("Please select an option"),
    pet_img: Yup.array()
      .min(4, "Please upload at least 4 photos.")
      .test(
        "fileType",
        "Only image files are allowed.",
        (value) =>
          value &&
          Array.from(value).every((file) =>
            ["image/jpeg", "image/png"].includes(file.type)
          )
      )
      .test(
        "fileSize",
        "Each image must be smaller than 2MB.",
        (value) =>
          value &&
          Array.from(value).every((file) => file.size <= 2 * 1024 * 1024)
      ),
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    ownedTime: Yup.string().required("Please select an option"),
    getFrom: Yup.string().required("Please select an option"),
    color: Yup.string().required("Please select an option"),
  });

  const initialValues = {
    name: "",
    age: "",
    breed: "",
    size: "",
    gender: "",
    sterialization: "",
    pet_img: [],
    terms: false,
    ownedTime: "",
    getFrom: "",
    color: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("Pet listed successfully!");
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isValid }) => (
          <Form className="bg-lime-200 rounded-3xl shadow-lg p-8 w-full max-w-5xl">
            {/* Other Fields */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name of the pet
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="age"
                className="block text-gray-700 font-semibold mb-2"
              >
                Age of the pet
              </label>
              <Field
                type="text"
                id="age"
                name="age"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="breed"
                className="block text-gray-700 font-semibold mb-2"
              >
                Breed of the pet
              </label>
              <Field
                type="text"
                id="breed"
                name="breed"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
              <ErrorMessage
                name="breed"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="size"
                className="block text-gray-700 font-semibold mb-2"
              >
                Size of the pet
              </label>
              <Field
                as="select"
                id="size"
                name="size"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="" label="Select size" />
                <option value="small" label="Small" />
                <option value="medium" label="Medium" />
                <option value="large" label="large" />
              </Field>

              <ErrorMessage
                name="size"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-semibold mb-2"
              >
                What is the sex of your pet?
              </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="" label="Select gender" />
                <option value="male" label="Male" />
                <option value="female" label="Female" />
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="sterialization"
                className="block text-gray-700 font-semibold mb-2"
              >
                Is your pet neutred or not?
              </label>
              <Field
                as="select"
                id="sterialization"
                name="sterialization"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="" label="Select status" />
                <option value="yes" label="Yes" />
                <option value="no" label="No" />
              </Field>
              <ErrorMessage
                name="sterialization"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="pet_img"
                className="block text-gray-700 font-semibold mb-2"
              >
                Upload Photos
              </label>
              <input
                type="file"
                id="pet_img"
                name="pet_img"
                accept="image/*"
                className="w-full border border-gray-300 rounded-md p-3"
                multiple
                onChange={(event) => {
                  const files = event.currentTarget.files;
                  setFieldValue("pet_img", files);
                }}
              />
              <ErrorMessage
                name="pet_img"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <Field type="checkbox" name="terms" className="mr-2" />I accept
                the terms and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ownedTime"
                className="block text-gray-700 font-semibold mb-2"
              >
                How long have you owned your pet?
              </label>
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
              <ErrorMessage
                name="OwnedTime"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="sterialization"
                className="block text-gray-700 font-semibold mb-2"
              >
                Where did you get your pet from?
              </label>
              <Field
                as="select"
                id="getFrom"
                name="getFrom"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="" label="Select option" />
                <option value="Breeder" label="Breeder" />
                <option value="Friend/Family" label="Friend/Family" />
                <option value="Found" label="Found" />
                <option value="Fostered" label="Fostered" />
                <option
                  value="Charity/RescueCenter"
                  label="Charity/RescueCenter"
                />
                <option value="PetSho" label="PetShop" />
                <option
                  value="OwnerSeller/Marketplace"
                  label="OwnerSeller/Marketplace"
                />
                <option value="Other" label="Other" />
              </Field>
              <ErrorMessage
                name="getFrom"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>
            <div className="mb-16">
              <label
                htmlFor="color"
                className="block text-gray-700 font-semibold mb-2"
              >
                What color is your pet?
              </label>
              <Field
                as="select"
                id="color"
                name="color"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="" label="Select color" />
                <option value="Black" label="Black" />
                <option value="Brown/Chocolate" label="Brown/Chocolate" />
                <option value="Blue" label="Blue" />
                <option value="Cream/Fawn/Yellow" label="Cream/Fawn/Yellow" />
                <option value="Mixed Color" label="Mixed Color" />
                <option value="Red/Ginger" label="Red/Ginger" />
                <option value="White" label="White" />
                <option value="Silver/Grey" label="Silver/Grey" />
                <option value="Gold/Apricot" label="Gold/Apricot" />
                <option value="Other" label="Other" />
              </Field>
              <ErrorMessage
                name="color"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <Link
                  to="/pethousehold"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                >
                  Back
                </Link>
              </div>

              <div >
                <Link
                  to={isValid ? "/pet-behaviour" : "#"}
                  className={`${
                    isValid
                      ? "bg-green-600 text-white"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  } font-bold px-10 py-2 rounded-md shadow-md transition duration-200`}
                  onClick={(e) => !isValid && e.preventDefault()}
                >
                  Next
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ListaPetAboutPet;
