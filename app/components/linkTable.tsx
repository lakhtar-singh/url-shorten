import React, {useEffect} from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useRecoilState } from "recoil";
import { QRCodeCanvas } from "qrcode.react";
import { Links } from "@/atoms/store";
import axios from "axios";
import { urls } from "@/environment/route_urls";
import {env} from "@/environment/envVariable";
import { format } from "date-fns";


const LinkTable = () => {

    const [loop, setLoop]              =   useRecoilState(Links)   

    useEffect(() => {
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const beautify = (value:string) => {
        const rawDate = new Date(value);
        const formattedDate = format(rawDate, "MMMM d, yyyy - hh:mm a"); // Example: Friday, February 14, 2025 - 02:30 PM
        return formattedDate;
    }

    const fetch = async() => {
        const result      =   await axios.get(urls.default_list);
        console.log(result.data);
        setLoop(result.data);
    }
    

    return (
        <>
            <div className="container mx-auto border mb-5 ">
                <div className="mb-5">
                <table className="w-full ">
                    <thead>
                        <tr className={`color-181E29 color-font-C9CED6 ${inter.className}`}>
                            <th className="p-4">Short Link</th>
                            <th className="p-4">Original Link</th>
                            <th className="p-4">QR Code</th>
                            <th className="p-4">Clicks</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {loop.map((item, index) => (
                        // color-bg-181E29 color-font-C9CED6
                        <tr key={index} className={` font-xs ${inter.className}`}>
                            <td className="p-4 ">
                                <a href={item.short_link} target="_blank" rel="noopener noreferrer" className="">
                                    {env.SITE_URL}/{item.short_link}
                                </a>
                            </td>
                            <td className="p-4">
                                <a href={item.original_link} target="_blank" rel="noopener noreferrer" className="">
                                    {item.original_link}
                                </a>
                            </td>
                            <td className="p-4 text-center">
                                {item.short_link ? (
                                    <QRCodeCanvas value={item.short_link} size={50} />
                                ) : (
                                    <span className="text-gray-500">N/A</span>
                                )}
                            </td>
                            <td className="p-4 text-center">{item.click}</td>
                            <td className="p-4 text-center">
                                <span className={`px-2 py-1 rounded text-white ${ ["Active",true].includes(item.status) ? "bg-green-500" : "bg-red-500"}`}>
                                    {item.status ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="p-4 text-center">{beautify(item.date)}</td>
                        </tr>
                    )
                    )}
                    </tbody>
                </table>
                </div>   
            </div>
        </>
    )
}

export default LinkTable;