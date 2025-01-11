import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const ListaPetType = () => {
  const validationSchema = Yup.object({
    behaviour: Yup.string().required("Please select your pet’s behavior"),
    socializationIssues: Yup.string().required(
      "Please select any socialization issues"
    ),
  });

  const initialValues = {
    behaviour: "",
    socializationIssues: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("Pet type details submitted successfully!");
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
            {/* Pet Behavior */}
            <div className="mb-6">
              <label
                htmlFor="behaviour"
                className="block text-gray-700 font-semibold mb-2"
              >
                Describe your pet in general
              </label>
              <Field
                as="select"
                id="behaviour"
                name="behaviour"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="Good with adults">Good with adults</option>
                <option value="Good with children">Good with children</option>
                <option value="Good with other dogs">
                  Good with other dogs
                </option>
                <option value="Needs to be only PET in the home">
                  Needs to be only PET in the home
                </option>
                <option value="Has lived with other dogs-it was fine">
                  Has lived with other dogs-it was fine
                </option>
                <option value="Has lived with other dogs-it didn't go well">
                  Has lived with other dogs-it didn't go well
                </option>
                <option value="is fairly relaxed">is fairly relaxed</option>
                <option value="is active and lively">
                  is active and lively
                </option>
                <option value="is only walked on the leash">
                  is only walked on the leash
                </option>
                <option value="Can be left alone for short to medium periods">
                  Can be left alone for short to medium periods
                </option>
                <option value="Has good recall">Has good recall</option>
                <option value="Travel well in cars">Travel well in cars</option>
                <option value="Needs more exercise than most dogs">
                  Needs more exercise than most dogs
                </option>
              </Field>
              <ErrorMessage
                name="behaviour"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Socialization Issues */}
            <div className="mb-6">
              <label
                htmlFor="socializationIssues"
                className="block text-gray-700 font-semibold mb-2"
              >
                Does your pet have any socialization issues?
              </label>
              <Field
                as="select"
                id="socializationIssues"
                name="socializationIssues"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="Reacts badly to people">
                  Reacts badly to people
                </option>
                <option value="Reacts badly to other dogs">
                  Reacts badly to other dogs
                </option>
                <option value="Is aggressive">Is aggressive</option>
                <option value="Is a barker (to the point of being problematic)">
                  Is a barker (to the point of being problematic)
                </option>
                <option value="Has separation anxiety">
                  Has separation anxiety
                </option>
                <option value="Bites or nips">Bites or nips</option>
                <option value="Has no or limited recall">
                  Has no or limited recall
                </option>
                <option value="Cannot be walked off the leash">
                  Cannot be walked off the leash
                </option>
                <option value="Pulls on the lead (to the point of being problematic)">
                  Pulls on the lead (to the point of being problematic)
                </option>
                <option value="Jumps or lunges (to the point of being problematic)">
                  Jumps or lunges (to the point of being problematic)
                </option>
                <option value="Can demonstrate resource guarding at times">
                  Can demonstrate resource guarding at times
                </option>
              </Field>
              <ErrorMessage
                name="socializationIssues"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Link
                  to="/aboutpet"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                >
                  Back
                </Link>
              </div>
              <div className="text-center">
                {isValid && dirty && (
                  <Link
                    to="/pet-health"
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

export default ListaPetType;
