"use client";
import React from "react";
import Header from "./components/header";
import LinkTable from "./components/linkTable";
import ShortenSection from "./components/shorten";

export default function Home() {
  return (
        <>
          <Header></Header>
          <ShortenSection></ShortenSection>
          <LinkTable></LinkTable>
        </>
    
  );
}
