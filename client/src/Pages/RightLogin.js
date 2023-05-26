import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../images/eye.png";
import * as EmailValidator from "email-validator";
import * as Yup from "yup"
import { Formik } from "formik";

const RightLogin= () => (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
      
  
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

      return (
        <div className="login-details" >
          <div className="login-details-inside">
            <div className="login-type">
              <p className="login-heading">LOGIN</p>
              <div className="login-line"></div>
              <form onSubmit={handleSubmit}>
                <div className="inputuser">
                <label htmlFor="email">Email</label>
                  <br />
                  <input
                  name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"} 
                  />
                  <div className="valie">
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                 )}
                 </div>
                  <br />
                </div>
                <div className="inputpass">
                <label htmlFor="email">Password</label>
                  <br />
                  <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />
                    <div className="vali">
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}
                    </div>
                  <br />

                  <div>
                    <p>Forgot password?</p>
                    <img className="logo" src={eye} alt="polygon" />
                  </div>
                </div>
                
            <div className="submit">
                <Link to="/student" className="sublink">
                <div>
                  <p>Login</p>
                    </div>
                    </Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </Formik>
)

export default RightLogin;