"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import {  useDispatch } from "react-redux";
import { addLink } from "@/redux/slices/linkSlice";
import axios from "axios";
import { urls } from "@/environment/route_urls";
import { toastSuccess, toastError } from "@/util/helper";

const inter = Inter({ subsets: ["latin"] });

const ShortenSection = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const isUrl = (value: string) => {
    try {
      new URL(value);
      return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return false;
    }
  };

  const shorten = async () => {
    if (!inputValue.trim()) return;

    if (!isUrl(inputValue)) {
      alert("Enter a valid URL");
      return;
    }

    const data = { url: inputValue };

    try {
      const response = await axios.post(urls.shorten_url, data);

      if (response.data.status === 200) {
        const structure = {
          short_link: response.data.short_link,
          original_link: inputValue,
          click: 0,
          status: "Active",
          date: new Date().toISOString().split("T")[0],
        };

        dispatch(addLink(structure)); // ✅ Use Redux instead of setLinkList
        setInputValue(""); // Clear input field after shortening
        toastSuccess("🚀 Success! Your URL has been shortened!");
      } else {
        toastError("🚀 Error! " + response?.data?.message);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toastError("🚀 Error! Something went wrong.");
    }
  };

  const triggerEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      shorten();
    }
  };

  return (
    <div className="special-bg">
      <div className="container mx-auto">
        <div className="flex items-center flex-col justify-center col-direction w-full custom-height">
          <div className={`introduction font-bold special-design text-6xl ${inter.className}`}>
            Shorten your loooooooong links!
          </div>
          <div className="fixed-width">
            <div className={`text-sm mt-5 ${inter.className}`}>
              LinkU is an efficient and easy-to-use URL shortening service that streamlines your online experience.
            </div>
            <div className={`mt-4 shorten-bar relative`}>
              <input
                type="text"
                className={`w-full border rounded-6xl p-4 border-gray-300 ${inter.className}`}
                placeholder="Enter the link here"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={triggerEvent}
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-1">
                <button onClick={shorten} className={`rounded-6xl register-btn p-3 ${inter.className}`}>
                  Shorten Now
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortenSection;
