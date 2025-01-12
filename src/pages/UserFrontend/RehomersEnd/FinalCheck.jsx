import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { updateFinalCheck } from './formSlice'; // Adjust with correct path to your slice

const FinalCheck = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Select the entire form data from the Redux store
  const formData = useSelector((state) => state.form);
  
  // Validation schema for the referral source selection
  const validationSchema = Yup.object({
    referralSource: Yup.string().required("This field is required."),
  });

  // Initial values for Formik
  const initialValues = {
    referralSource: "",
  };

  // Form submission handler
  const onSubmit = async (values) => {
    // Combine the referralSource with existing form data
    const fullDataToSend = {
      ...formData,
      finalCheck: { referralSource: values.referralSource }
    };
    
    try {
      // Send the combined form data to the backend server
      const response = await axios.post('http://127.0.0.1:8000/rehomers/re_appCreate', fullDataToSend);

      // Check response status to ensure success
      if (response.status === 200) {
        console.log(response.data);
        alert("Form submitted successfully!");
        // Clear form data if desired
        dispatch(clearFormData()); // Optional: use if you want to clear Redux state after submission
        navigate('/thank-you'); // Navigate to thank-you page
      }
    } catch (error) {
      // Handle error responses from the server
      if (error.response) {
        console.error("Error:", error.response.data);
        alert(`Error submitting form: ${error.response.data.message || "An error occurred"}`);
      } else if (error.request) {
        console.error("Error Request:", error.request);
        alert("Error: No response received from the server.");
      } else {
        console.error("Error Message:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Step 8: Final Check</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <label className="block text-gray-600 mb-2">
              How did you hear about PauseFurrPaws? <span className="text-red-500">*</span>
            </label>
            <div role="group" aria-labelledby="referralSource" className="space-y-2">
              {/* ...Radio Fields... */}
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="friendFamily"
                  name="referralSource"
                  value="Friend / Family Recommendation"
                  className="mr-2"
                />
                <label htmlFor="friendFamily" className="text-gray-700">
                  Friend / Family Recommendation
                </label>

                <Field
                  type="radio"
                  id="social_media"
                  name="referralSource"
                  value="Social media"
                  className="mr-2"
                />
                <label htmlFor="social_media" className="text-gray-700">
                  Social Media
                </label>

              
                
              </div>
              {/* Add other radio buttons here as previously defined */}
            </div>

            <ErrorMessage
              name="referralSource"
              component="div"
              className="text-red-500 text-sm mt-2"
            />

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FinalCheck;