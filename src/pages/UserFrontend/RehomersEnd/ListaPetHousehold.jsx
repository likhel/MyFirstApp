import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ListaPetHousehold = () => {
const validationSchema = Yup.object({
      HouseholdActivity: Yup.string()
      .required('Typical household activity is required'),
      SinglePet: Yup.string().required('Please select an option'),
      PetEnvironment: Yup.string()
      .required('enivironment pet is used to is required')
      

    
  });

  // Initial Values
  const initialValues = {
    HouseholdActivity: '',
    SinglePet: '',
    PetEnvironment: ''
    
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    alert('Pet listed successfully!');
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      
      
      


      {/* Form Container */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="bg-lime-200 rounded-3xl shadow-lg p-8 w-full max-w-5xl">
            
            <div className="mb-6">
              <label htmlFor="Household" className="block text-gray-700 font-semibold mb-2">
                What best describes the current household's typical activity level? 
              </label>
              <Field
                as="select"
                id="HouseholdActivity"
                name="HouseholdActivity"
                
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >

                <option value="">Select an option</option>
                <option value="Busy/Noisy">Busy/Noisy</option>
                <option value="Moderate comings and goings">Moderate comings and goings</option>
                <option value="Quiet with occasional guests">Quiet with occasional guests</option>
               </Field>
              <ErrorMessage
                name="HouseholdActivity"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            

            {/* Species */}
            <div className="mb-6">
              <label htmlFor="SinglePet" className="block text-gray-700 font-semibold mb-2">
                Does your pet/s currently live with any ither pets?
              </label>
              <Field
                as="select"
                id="SinglePet"
                name="SinglePet"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="Yes,my pet lives with cats">Yes,my pet lives with cats</option>
                <option value="Yes,my pet lives with dogs">Yes,my pet lives with dogs</option>
                <option value="Yes,my pet lives with other small furries">Yes,my pet lives with other small furries</option>
                <option values="No,my pet lives as only pet in household">No,my pet lives as only pet in household</option>
              </Field>
              <ErrorMessage
                name="SinglePet"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Age */}
            <div className="mb-10">
              <label htmlFor="PetEnvironment" className="block text-gray-700 font-semibold mb-2">
                What best describes the household environment that the pet is used to?
              </label>
              <Field
                as="select"
                id="PetEnvironment"
                name="PetEnvironment"
                placeholder="Rural"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >

                <option value="">Select an option</option>
                <option value="Rural">Rural</option>
                <option value="Suburban">Suburban</option>
                <option value="Town">Town</option>
                <option value="City">City</option>
                
               </Field>
              <ErrorMessage
                name="PetEnvironment"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            
             

            
              

            {/* Submit Button */}
            <div className="text-center ">
              <Link
                to = ""
                className="bg-green-600 text-white font-bold px-10 py-2 rounded-md shadow-md hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid"
              >
                Next
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default ListaPetHousehold;