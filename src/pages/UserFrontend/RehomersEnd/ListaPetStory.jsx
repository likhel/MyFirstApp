import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePetStory } from "../../../Redux/FormSlice";
// import { updatePetStory } from '../features/formSlice';

const ListaPetStory = () => {
  const dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate(); // Hook for navigation
  const petStory = useSelector((state) => state.form.pet); // Get pet state from Redux

  // Initial Values from Redux store
  const initialValues = {
    personality: petStory.personality || "",
    likesToPlay: petStory.likesToPlay || "",
    foodAndTreats: petStory.foodAndTreats || "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    personality: Yup.string()
      .required("Please describe your pet's personality.")
      .min(10, "Description should be at least 10 characters."),
    likesToPlay: Yup.string()
      .required("Please tell us about your pet's favorite activities.")
      .min(10, "Description should be at least 10 characters."),
    foodAndTreats: Yup.string()
      .required("Please tell us about your pet's diet.")
      .min(10, "Description should be at least 10 characters."),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    dispatch(updatePetStory(values)); // Dispatch updated values to Redux
    alert("Form submitted successfully!");
    navigate("/final-check"); // Navigate to the next page
  };

  return (
    <div className="container mx-auto p-4 max-w-lg bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Step 7: Your Pet's Story</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="space-y-4">
            {/* Personality Field */}
            <div>
              <label htmlFor="personality" className="block font-semibold mb-2">
                How would you describe your pet's personality? How are they with
                people?
              </label>
              <Field
                as="textarea"
                id="personality"
                name="personality"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Type here..."
              />
              <ErrorMessage
                name="personality"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Likes to Play Field */}
            <div>
              <label htmlFor="likesToPlay" className="block font-semibold mb-2">
                Does your pet like to play? Do they have a favorite toy or
                activity?
              </label>
              <Field
                as="textarea"
                id="likesToPlay"
                name="likesToPlay"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Type here..."
              />
              <ErrorMessage
                name="likesToPlay"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Food and Treats Field */}
            <div>
              <label
                htmlFor="foodAndTreats"
                className="block font-semibold mb-2"
              >
                What foods and treats does your pet like? (Any special dietary
                needs?)
              </label>
              <Field
                as="textarea"
                id="foodAndTreats"
                name="foodAndTreats"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Type here..."
              />
              <ErrorMessage
                name="foodAndTreats"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Back and Next Navigation */}
            <div className="flex justify-between items-center">
              <div>
                <Link
                  to="/pet-health"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                >
                  Back
                </Link>
              </div>
              <div>
                {isValid && dirty && (
                  <button
                    type="submit"
                    className="bg-green-600 text-white font-bold px-10 py-2 rounded-md shadow-md hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ListaPetStory;
