import React from 'react';
import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';

const LoginFormik = () => {
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <form>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email' placeholder='example@gmail.com' />
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' name='password' placeholder='password' />
                    <button type='submit'>Login</button>
                </form>
            </Formik>
        </div>
    );
};

LoginFormik.propTypes = {

};

export default LoginFormik;
