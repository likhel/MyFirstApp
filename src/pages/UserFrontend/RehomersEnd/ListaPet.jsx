import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ListaPet = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    petType: Yup.string()
      .required('Pet type is required')
      .min(2, 'Name must be at least 2 characters long'),
    reproduction: Yup.string().required('Please select an option'),
    reason: Yup.string()
      .required('Reason for rehoming is required')
      .min(10, 'Reason must be at least 10 characters long'),
    time: Yup.string()
      .required('Details about how long you can keep the pet are required')
      .min(10, 'Details must be at least 10 characters long'),
    
  });

  // Initial Values
  const initialValues = {
    petType: '',
    reproduction: '',
    reason: '',
    time: ''
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    alert('Pet listed successfully!');
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Page Title */}
      
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-5xl mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-1">Before You Start..</h2>
        <p className='mb-6'>Please make sure you’ve read and agree to these points before you create a listing.</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-6 text-inherit">
            <span className='font-semibold text-gray-500'>You won’t get paid</span> for your pet but it is free to list them with our Charity.
          </li>
          <li className="mb-6 text-inherit">
            <span className='font-semibold text-gray-500'>We can't help with emergency rehoming.</span> You will need to be able to keep your pet for at least 4-6 weeks minimum before rehoming (more during peak holiday times when people are often away).
          </li>
          <li className="mb-6 text-inherit">
            <span className='font-semibold text-gray-500'>All listings are subject to approval</span> by the PetRehomer team. Before we post your listing on the site, we’ll check your pet’s profile thoroughly. If we have any questions, we will give you a call.
          </li>
          <li className="mb-6 text-inherit">
            If your listing does not provide a <span className='font-semibold text-gray-500'>detailed description of your pet</span> which must include <span className='font-semibold text-gray-500'>4 x good quality photos</span>, we will <span className='font-semibold text-gray-500 italic'>REJECT</span> the listing and you will need to resubmit a new listing. 
          </li>
          <li className="mb-6 text-inherit">
            We are <span className='font-semibold text-gray-500 italic'>NOT</span> a rescue centre so we can't take pets directly into our care. We help you find a suitable adopter.
          </li>
          <li className="mb-6 text-inherit">
            We <span className='font-semibold text-gray-500 italic'>ONLY</span> support the rehoming of pets that are living in Nepal.
          </li>
          
        </ul>
      </div>



      {/* Form Container */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="bg-lime-200 rounded-3xl shadow-lg p-8 w-full max-w-5xl">
            
            <div className="mb-6">
              <label htmlFor="petType" className="block text-gray-700 font-semibold mb-2">
                Are you rehoming a dog, cat or other pet?
              </label>
              <Field
                as="select"
                id="petType"
                name="petType"
                placeholder="Dog"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >

                <option value="">Select an option</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
               </Field>
              <ErrorMessage
                name="petType"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            

            {/* Species */}
            <div className="mb-6">
              <label htmlFor="reproduction" className="block text-gray-700 font-semibold mb-2">
                Is your pet spayed or neutered?
              </label>
              <Field
                as="select"
                id="reproduction"
                name="reproduction"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage
                name="reproduction"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Age */}
            <div className="mb-6">
              <label htmlFor="reason" className="block text-gray-700 font-semibold mb-2">
                Why do you need to rehome your pet?
              </label>
              <Field
                as="select"
                id="reason"
                name="reason"
                placeholder="Busy Schedule"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >

                <option value="">Select an option</option>
                <option value="Behavioural issues">Behavioural issues</option>
                <option value="Busy schedule">Busy schedule</option>
                <option value="Change in family circumstances">Change in family circumstances</option>
                <option value="Does not get aloong with another pet">Does not get aloong with another pet</option>
                <option value="fostered">Fostered</option>
                <option value="found">Found or abondoned</option>
                <option value="human health issues">Human health issues(e.g allergies,sickness)</option>
                <option value="infant,young children or pregnancy">Infant,young children or pregnancy</option>
                <option value="landlord permission issues">Landlord permission issues</option>
                <option value="ongoing costs">Ongoing costs(e.g lost job)</option>
                <option value="pet medical expense">Pet medical expenses(e.g vet procedure)</option>

               </Field>
              <ErrorMessage
                name="reason"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            
             

            {/* Description */}
            <div className="mb-12">
              <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                How long can you keep your pet while we find a new home?
              </label>
              <Field
                as="select"
                id="time"
                name="time"
                
                placeholder="3 weeks"
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
                

               </Field>
              <ErrorMessage
                name="time"
                component="div"
                className="text-red-500 text-sm mt-1 "
              />
            </div>

            {/* Submit Button */}
            <div className="text-center ">
              <Link
                to = "/signupasregister"
                className="bg-green-600 text-white text-base font-bold px-8 py-2 rounded-md shadow-md hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid"
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

export default ListaPet;
