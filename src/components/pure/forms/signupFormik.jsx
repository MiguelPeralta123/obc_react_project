import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password too short')
        .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            'Password must include at least one capitalized letter, one number, and one symbol'
        )
        .required('Required'),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords don´t match')
        .required('Required'),
});

const SignupFormik = () => (
    <div className='card'>
        <h2 className='card-header p-4'>Sign up</h2>
        <Formik
            initialValues={{ email: '', password: '', confirm: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ errors, touched }) => (
                <Form className='card-body p-4 pt-0 pb-0'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label mt-3">Email</label>
                        <Field name="email" type="email" placeholder='example@gmail.com' className="form-control" />
                        {errors.email && touched.email ? (
                            <p className="text-danger mb-0">{errors.email}</p>
                        ) : null}
                        <label htmlFor="password" className="form-label mt-3">Password</label>
                        <Field name="password" type="password" placeholder='Create your password' className="form-control" />
                        {errors.password && touched.password ? (
                            <p className="text-danger mb-0">{errors.password}</p>
                        ) : null}
                        <label htmlFor="confirm" className="form-label mt-3">Confirm password</label>
                        <Field name="confirm" type="password" placeholder='Repeat your password' className="form-control" />
                        {errors.confirm && touched.confirm ? (
                            <p className="text-danger mb-0">{errors.confirm}</p>
                        ) : null}
                        <button type="submit" className="btn btn-primary w-100 mt-4">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default SignupFormik;