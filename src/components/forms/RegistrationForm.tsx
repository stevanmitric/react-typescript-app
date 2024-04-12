import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../../helpers/validation';
import { FormValues } from '../../ts/interfaces/Form';
import { handleSubmit } from '../../helpers/submit';

const RegistrationForm: React.FC = () => {

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <div className="registration-form-container">
      <h2>Registration</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
