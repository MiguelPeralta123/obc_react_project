import React from 'react';
import { Formik } from 'formik';

const RegisterFormik = () => (
  <div className='card'>
    <h2 className='card-header p-4'>Sign up</h2>
    <Formik
      initialValues={{ email: '', password: '', confirm: '' }}
      validate={values => {
        const errors = {};
        /* Email errors */
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        /* Password errors */
        if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(values.password)
        ) {
          errors.password = 'Password must include at least one capitalized letter, one number, one symbol, and be at least 8 characters long';
        }
        /* Password confirm errors */
        if (!values.confirm) {
          errors.confirm = 'Required';
        } else if (
          !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(values.password)
        ) {
          errors.password = 'Password must include at least one capitalized letter, one number, one symbol, and be at least 8 characters long';
        } else if (values.confirm !== values.password) {
          errors.confirm = 'Password and confirm field don´t match'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='card-body p-4 pt-0 pb-0'>
          <div className="mb-3">
            <label htmlFor="email" className="form-label mt-3">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='example@gmail.com'
              className="form-control"
            />
            <p className="text-danger mb-0">{errors.email && touched.email && errors.email}</p>
            <label htmlFor="password" className="form-label mt-3">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='Create your password'
              className="form-control"
            />
            <p className="text-danger mb-0">{errors.password && touched.password && errors.password}</p>
            <label htmlFor="confirm" className="form-label mt-3">Confirm password</label>
            <input
              type="password"
              name="confirm"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm}
              placeholder='Repeat your password'
              className="form-control"
            />
            <p className="text-danger">{errors.confirm && touched.confirm && errors.confirm}</p>
            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default RegisterFormik;