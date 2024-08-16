"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Providers = ({ children }) => {
  return (
    <RecoilRoot>
      <SessionProvider>
        {children}
        <ToastContainer position="top-center" />
      </SessionProvider>
    </RecoilRoot>
  );
};
