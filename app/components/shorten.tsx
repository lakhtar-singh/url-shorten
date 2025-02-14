"use client";
import React, { useState }                from  "react";
import { Inter }                          from  "next/font/google";
import { useRecoilState }                 from  "recoil";
import { Links }                          from  "@/atoms/store";
import axios                              from  "axios";
import {urls}                             from  "@/environment/route_urls";
import {toastSuccess, toastError}         from  "@/util/helper";
const inter                               =     Inter({ subsets: ["latin"] });



const ShortenSection = () => {
  const [link, setLinkList] = useRecoilState(Links);
  const [inputValue, setInputValue] = useState("");

  const isUrl = (value:string) => {
    try {
      new URL(value)
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  }
  
  const shorten = async() => {

    //Check if that is actuall value
    if (!inputValue.trim()) return;

    //Check if the entered value is URL or not.
    if(!isUrl(inputValue)){
      alert('Enter Valid URL');
      return
    } 

    const data = {
      url : inputValue
    }
    const response = await axios.post(urls.shorten_url, data);
    
    if(response.data.status == 200){
      const structure = {
        short_link: response.data.short_link,
        original_link: inputValue,
        click: 0,
        status: "Active",
        date: new Date().toISOString().split("T")[0],
      };
      
      setLinkList((prevLinks) => [...prevLinks, structure]);
      setInputValue(""); // Clear input field after shortening
      toastSuccess("🚀 Success! Your URL has been shortened!");
    }
    else{
      toastError("🚀 Error! "+response?.data?.message);
    }
  };

  const triggerEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    
    if(e.key == 'Enter'){
      shorten();
      setInputValue("");
    }
  }


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
                onChange={(e) => {setInputValue(e.target.value)}}
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
