"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

interface authProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: authProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
