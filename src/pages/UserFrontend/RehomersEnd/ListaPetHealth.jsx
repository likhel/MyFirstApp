import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ListaPetHealth = () => {
  const validationSchema = Yup.object({
    utd_vaccinations: Yup.string().required('Please select if your pet is up-to-date with vaccinations'),
    utd_fleatreatments: Yup.string().required('Please select if your pet is up-to-date with flea treatments and worming'),
    utd_dentalchecks: Yup.string().required('Please select if your pet is up-to-date with dental checkups'),
    current_health_issues: Yup.string().required('Please indicate if your pet has any current health issues'),
  });

  const initialValues = {
    utd_vaccinations: '',
    utd_fleatreatments: '',
    utd_dentalchecks: '',
    current_health_issues: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    alert('Pet health details submitted successfully!');
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="bg-lime-200 rounded-3xl shadow-lg mt-24 p-8 w-full max-w-5xl">
            {/* Vaccinations */}
            <div className="mb-6">
              <label
                htmlFor="utd_vaccinations"
                className="block text-gray-700 font-semibold mb-2"
              >
                Is your pet up-to-date with vaccinations?
              </label>
              <Field
                as="select"
                id="utd_vaccinations"
                name="utd_vaccinations"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </Field>
              <ErrorMessage
                name="utd_vaccinations"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Flea Treatments */}
            <div className="mb-6">
              <label
                htmlFor="utd_fleatreatments"
                className="block text-gray-700 font-semibold mb-2"
              >
                Is your pet up-to-date with flea treatments and worming?
              </label>
              <Field
                as="select"
                id="utd_fleatreatments"
                name="utd_fleatreatments"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </Field>
              <ErrorMessage
                name="utd_fleatreatments"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Dental Checkups */}
            <div className="mb-6">
              <label
                htmlFor="utd_dentalchecks"
                className="block text-gray-700 font-semibold mb-2"
              >
                Is your pet up-to-date with dental checkups?
              </label>
              <Field
                as="select"
                id="utd_dentalchecks"
                name="utd_dentalchecks"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </Field>
              <ErrorMessage
                name="utd_dentalchecks"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Current Health Issues */}
            <div className="mb-6">
              <label
                htmlFor="current_health_issues"
                className="block text-gray-700 font-semibold mb-2"
              >
                Does your pet have any current health issues?
              </label>
              <Field
                as="select"
                id="current_health_issues"
                name="current_health_issues"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage
                name="current_health_issues"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Link
                  to="/pet-story"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                >
                  Back
                </Link>
              </div>
            <div className="text-center">
              {isValid && dirty && (
                <Link
                  to="/pet-behaviour"
                  className="bg-green-600 text-white font-bold px-10 py-2 rounded-md shadow-md hover:bg-white hover:text-green-600 transition duration-200 border-2 border-green-600 border-solid"
                >
                  Next
                </Link>
              )}
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ListaPetHealth;
