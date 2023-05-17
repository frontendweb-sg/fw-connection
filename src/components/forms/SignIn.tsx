"use client";

import { useFormik } from "formik";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import * as yup from "yup";
import { AppContent } from "@/utils/AppContent";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { signIn } from "next-auth/react";

const validation = yup.object().shape({
  email: yup.string().email().required("Email is required!"),
  password: yup.string().required(),
});

export interface loginProps {
  email: string;
  password: string;
}

const LoginForm = () => {
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
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: async (values: loginProps) => {
      console.log("values", values);
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      console.log("result", result);
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        errors={errors}
        touched={touched}
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        startIcon={<FaEnvelope />}
        placeholder="Email id"
      />
      <Input
        name="password"
        type="password"
        errors={errors}
        touched={touched}
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        startIcon={<FaKey />}
        placeholder="********"
      />
      <Button type="submit">{AppContent.signIn}</Button>
    </Form>
  );
};

export default LoginForm;
