import React from "react";

export const TableStates = ({ myForm }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Form State</th>
          <th>Current Value</th>
          <th>Default Value</th>
          <th>Changed?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dirty</td>
          <td>{JSON.stringify(myForm.dirty)}</td>
          <td>false</td>
          <td>{myForm.dirty !== false ? "changed" : ""}</td>
        </tr>
        <tr>
          <td>touched</td>
          <td className="code">{JSON.stringify(myForm.touched, null, 2)}</td>
          <td>{"{}"}</td>
          <td>{Object.keys(myForm.touched).length > 0 ? "changed" : ""}</td>
        </tr>
        <tr>
          <td>isValid</td>
          <td>{JSON.stringify(myForm.isValid)}</td>
          <td>true</td>
          <td>{myForm.isValid !== true ? "changed" : ""}</td>
        </tr>
        <tr>
          <td>isValidating</td>
          <td>{JSON.stringify(myForm.isValidating)}</td>
          <td>false</td>
          <td>{myForm.isValidating !== false ? "changed" : ""}</td>
        </tr>
        <tr>
          <td>isSubmitting</td>
          <td>{JSON.stringify(myForm.isSubmitting)}</td>
          <td>false</td>
          <td>{myForm.isSubmitting !== false ? "changed" : ""}</td>
        </tr>
        <tr>
          <td>errors</td>
          <td className="code">{JSON.stringify(myForm.errors, null, 2)}</td>
          <td>{"{}"}</td>
          <td>{Object.keys(myForm.errors).length > 0 ? "changed" : ""}</td>
        </tr>
      </tbody>
    </table>
  );
};
