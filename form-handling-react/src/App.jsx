// src/App.jsx
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Registration Forms</h1>

      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Controlled Component</h2>
        <RegistrationForm />
      </section>

      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Formik + Yup Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
