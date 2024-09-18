import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { TableStates } from "./table-states";

export const MyForm = () => {
  const [initialValues, updateValues] = useState({
    email: "",
    password: "",
    agreement: false,
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          console.debug("piecioshka, validate", { values });
          const errors = {};
          if (values.email === "") {
            errors.email = "Email is required";
          }
          if (values.password === "") {
            errors.password = "Password is required";
          }
          if (values.agreement === false) {
            errors.agreement = "Agreement should be checked";
          }
          return errors;
        }}
        onSubmit={(values, formikHelpers) => {
          console.debug("piecioshka, onSubmit", { values, formikHelpers });
          return new Promise((resolve) => {
            setTimeout(() => {
              formikHelpers.resetForm();
              formikHelpers.setTouched({});
              formikHelpers.setErrors({});
              updateValues(values);
              formikHelpers.setValues(values);
              resolve("done");
            }, 2000);
          });
        }}
      >
        {(props) => {
          console.debug("piecioshka, render", props);
          return (
            <Form>
              <div className="row">
                <label>
                  E-mail:
                  <Field type="text" name="email" />
                </label>
              </div>
              <div className="row">
                <label>
                  Password:
                  <Field type="text" name="password" />
                </label>
              </div>
              <div className="row">
                <label>
                  <Field type="checkbox" name="agreement" />I agree terms
                </label>
              </div>
              <div className="row">
                <input
                  type="submit"
                  value="Save"
                  disabled={props.isSubmitting}
                />
              </div>

              <TableStates myForm={props} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
