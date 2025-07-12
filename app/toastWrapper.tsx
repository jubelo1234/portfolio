"use client";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function ToastWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
