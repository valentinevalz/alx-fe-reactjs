// src/components/formikForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Formik Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{color:"red"}}>{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{color:"red"}}>{formik.errors.password}</p>
        )}
      </div>

      <button type="submit">Register (Formik)</button>
    </form>
  );
}
