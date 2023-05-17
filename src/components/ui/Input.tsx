import classNames from "classnames";
import React, { ReactNode, forwardRef } from "react";
import PropTypes from "prop-types";
import type { FormikErrors, FormikTouched } from "formik";
import FormGroup from "./FormGroup";
import { IconType } from "react-icons";

export type inpRef = HTMLInputElement;
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errors: FormikErrors<{ [field: string]: any }>;
  touched: FormikTouched<{ [field: string]: any }>;
  label?: string;
  parentProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const Input = forwardRef<inpRef, IInputProps>(
  (
    {
      type,
      errors,
      touched,
      name,
      value,
      className,
      label,
      parentProps,
      children,
      startIcon,
      endIcon,
      ...rest
    },
    ref
  ) => {
    const classes = classNames(
      "form-control",
      {
        "is-valid":
          !errors[name as keyof typeof errors] &&
          touched?.[name as keyof typeof errors],
        "is-invalid": errors[name as keyof typeof errors],
      },
      className
    );

    return (
      <FormGroup label={label} {...parentProps}>
        <div className={classes}>
          {startIcon}
          <input
            type={type}
            className="fw-input"
            name={name}
            value={value}
            {...rest}
            ref={ref}
          />
          {children}
          {endIcon}
        </div>
        {errors?.[name as keyof typeof errors] &&
          touched?.[name as keyof typeof errors] && (
            <div className="invalid-feedback">Filed is required!</div>
          )}
      </FormGroup>
    );
  }
);

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
