import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 chars").required(),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("User registered successfully!");
        resetForm();
      }}
    >
      {() => (
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" /><br/>

          <Field name="email" placeholder="Email" type="email" />
          <ErrorMessage name="email" component="div" /><br/>

          <Field name="password" placeholder="Password" type="password" />
          <ErrorMessage name="password" component="div" /><br/>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
