import React, { forwardRef, memo } from "react";
import FormGroup from "./FormGroup";
import classNames from "classnames";
import { FormikErrors, FormikTouched } from "formik";

export type textareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    errors?: FormikErrors<{ [field: string]: any }>;
    touched?: FormikTouched<{ [field: string]: any }>;
    label?: string;
    parentProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
  };

export type textareaRef = HTMLTextAreaElement;
const Textarea = forwardRef<textareaRef, textareaProps>(
  (
    {
      name,
      value,
      placeholder = "What's on your mind",
      label,
      errors,
      touched,
      className,
      parentProps,
      ...rest
    },
    ref
  ) => {
    const classes = classNames(
      "form-control",
      {
        "is-valid":
          !errors?.[name as keyof typeof errors] &&
          touched?.[name as keyof typeof errors],
        "is-invalid": errors?.[name as keyof typeof errors],
      },
      className
    );

    return (
      <div className={classes}>
        <textarea
          name={name}
          value={value}
          className="fw-textarea"
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />


        <div className="post-create-action">
          
        </div>
      </div>
    );
  }
);

export default memo(Textarea);
