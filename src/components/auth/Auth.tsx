"use client";
import Typography from "../ui/Typography";
import Signup from "../forms/Singup";
import LoginForm from "../forms/SignIn";
import Link from "next/link";
import { useState } from "react";
import { AppContent } from "@/utils/AppContent";
import { useSession } from "next-auth/react";
import { useRedirect } from "@/hooks/useRedirect";

/**
 * Auth component
 * @returns
 */
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  useRedirect();

  return (
    <div className="auth-form w-50">
      <div className="auth-form-title">
        <Typography variant="h3">
          {isSignup ? AppContent.signUp : AppContent.signIn}
        </Typography>
        <Typography variant="body2" className="text-sm mt-2 mb-4">
          {isSignup ? (
            <>
              {AppContent.signInText}
              <Link
                onClick={() => setIsSignup(false)}
                href="#"
                className="text-blue ms-1"
              >
                {AppContent.signInHere}
              </Link>
            </>
          ) : (
            <>
              {AppContent.signupText}
              <Link
                className="text-blue ms-1"
                onClick={() => setIsSignup(true)}
                href="#"
              >
                {AppContent.signUpHere}
              </Link>
            </>
          )}
        </Typography>
      </div>
      {isSignup ? <Signup /> : <LoginForm />}
      <div className="auth-social">
        <span>Or</span>
      </div>
    </div>
  );
};

export default Auth;
