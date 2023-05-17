"use client";

import { useFormik } from "formik";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import * as yup from "yup";
import Col from "../ui/Col";
import { AppContent } from "@/utils/AppContent";

const validation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required("Email is required!"),
  password: yup.string().required(),
  mobile: yup.string().required(),
});

export interface loginProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobile: string;
}

const Signup = () => {
  const {
    isSubmitting,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      mobile: "",
      confirmPassword: "",
    },
    validationSchema: validation,
    onSubmit(values: loginProps) {
      console.log("values", values);
    },
  });
  return (
    <Form onSubmit={handleSubmit} className="row">
      <Col sm={6}>
        <Input
          name="firstname"
          value={values.firstname}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="First name"
        />
      </Col>
      <Col sm={6}>
        <Input
          name="firstname"
          value={values.firstname}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Last name"
        />
      </Col>
      <Col sm={12}>
        <Input
          name="email"
          value={values.email}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Col>
      <Col sm={6}>
        <Input
          name="password"
          value={values.password}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="********"
        />
      </Col>
      <Col sm={6}>
        <Input
          name="confirmPassword"
          value={values.confirmPassword}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="********"
        />
      </Col>
      <Col sm={12}>
        <Input
          name="mobile"
          value={values.mobile}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Mobile no"
        />
      </Col>
      <Col>
        <Button type="submit">{AppContent.signUp}</Button>
      </Col>
    </Form>
  );
};

export default Signup;
