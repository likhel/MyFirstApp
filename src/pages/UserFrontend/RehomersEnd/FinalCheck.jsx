import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const FinalCheck = () => {
   
    const validationSchema = Yup.object({
        referralSource: Yup.string().required("This field is required."),
      });
    
      // Initial values for Formik
      const initialValues = {
        referralSource: "",
      };
    
      // Form submission handler
      const onSubmit = (values) => {
        console.log("Form Data:", values);
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
                  How did you hear about PetRehomer? <span className="text-red-500">*</span>
                </label>
                <div role="group" aria-labelledby="referralSource" className="space-y-2">
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
                  </div>
    
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="facebook"
                      name="referralSource"
                      value="Facebook"
                      className="mr-2"
                    />
                    <label htmlFor="facebook" className="text-gray-700">
                      Facebook
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="instagram"
                      name="referralSource"
                      value="Instagram"
                      className="mr-2"
                    />
                    <label htmlFor="instagram" className="text-gray-700">
                      Instagram
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="otherSocialMedia"
                      name="referralSource"
                      value="Other social media"
                      className="mr-2"
                    />
                    <label htmlFor="otherSocialMedia" className="text-gray-700">
                      Other social media
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="google"
                      name="referralSource"
                      value="Google"
                      className="mr-2"
                    />
                    <label htmlFor="google" className="text-gray-700">
                      Google
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="otherSearchEngine"
                      name="referralSource"
                      value="Other search engine"
                      className="mr-2"
                    />
                    <label htmlFor="otherSearchEngine" className="text-gray-700">
                      Other search engine
                    </label>
                  </div>
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
    
    
export default FinalCheck