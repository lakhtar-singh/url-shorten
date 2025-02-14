"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Header from "./components/header";
import LinkTable from "./components/linkTable";
import ShortenSection from "./components/shorten";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <Header></Header>
        <ShortenSection></ShortenSection>
        <LinkTable></LinkTable>
        <ToastContainer></ToastContainer>
      </RecoilRoot>
    </>
  );
}
