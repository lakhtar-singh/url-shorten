import React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex justify-between mt-3">
                    <div className="flex items-center justify-center">
                        <div className={`special-design font-bold text-5xl ${inter.className}`}>
                            LinkU
                        </div>
                    </div>
                    <div className="flex flex-auth">
                        <div className="login">
                            {/* <div className={`login-btn text-md px-10 p-4 rounded-6xl ${inter.className} `}>
                                Login
                            </div> */}
                        </div>
                        {/* <div className={`register-btn ml-4 text-md px-10 p-4 rounded-6xl ${inter.className} `}>
                            Register
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;