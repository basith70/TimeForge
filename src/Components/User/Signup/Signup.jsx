import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Signup.css';

const validationSchema = yup.object({
  Username: yup.string().trim().required('Username is required'),
  Emailaddress: yup.string().email('Invalid email address').required('Email address is required'),
  Password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  ConfirmPassword: yup.string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  Phonenumber: yup.string().required('Phone number is required')
});

function Signup() {
  const initialValues = {
    Username: '',
    Emailaddress: '',
    Password: '',
    ConfirmPassword: '',
    Phonenumber: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-container">
      <center>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username1"
              name="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Username}
            />
            {formik.touched.Username && formik.errors.Username ? (
              <div className="error">{formik.errors.Username}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="Emailaddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Emailaddress}
            />
            {formik.touched.Emailaddress && formik.errors.Emailaddress ? (
              <div className="error">{formik.errors.Emailaddress}</div>
            ) : null}
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Password}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="error">{formik.errors.Password}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="ConfirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ConfirmPassword}
            />
            {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
              <div className="error">{formik.errors.ConfirmPassword}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Phone number:
            </label>
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              name="Phonenumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Phonenumber}
            />
            {formik.touched.Phonenumber && formik.errors.Phonenumber ? (
              <div className="error">{formik.errors.Phonenumber}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}

export default Signup;
