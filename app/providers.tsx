"use client"; // ✅ Forces this to be a Client Component
import React from "react";
// import { RecoilRoot } from "recoil";
import ReduxProvider from "@/redux/Provider";

import { ToastContainer } from "react-toastify";

interface IProps {
    children: React.ReactNode;
  }

export default function Providers ({ children }: IProps) {
  return (
    <ReduxProvider>
        <>
            {children}
            <ToastContainer />
        </>
    </ReduxProvider>
  );
}
