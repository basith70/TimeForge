import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Login.css';

const validationSchema = yup.object({
  Username: yup.string().trim().required('Username is required'),
  Password: yup.string().required('Password is required')
});

function Login() {
  const initialValues = {
    Username: '',
    Password: ''
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
              id="username"
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </center>
    </div>
  );
}

export default Login;
