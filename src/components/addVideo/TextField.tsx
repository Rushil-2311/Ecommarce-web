import React, { FunctionComponent } from "react";
import { ErrorMessage, useField } from "formik";

type TextFieldPropsTypes = {
    label: string;
    name: string;
    type: string;
    accept?: string;
    onChange?: (event: any) => void;
    value?: any;
};

const TextField: FunctionComponent<TextFieldPropsTypes> = ({label,...props}) => {
    const [field, meta] = useField(props);
  return (
    <div className="text-filed">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;
