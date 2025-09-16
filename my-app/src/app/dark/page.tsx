"use client"

import { useState } from "react"
import { IoSunnyOutline } from "react-icons/io5"
import { MdOutlineDarkMode } from "react-icons/md"


export default function page() {

    const menu = ["Home", "About", "Location", "Contect", "Foods", "Hari","SANJAY","harikaran",'Balakumar',"Vasnthan","Deepakkumar","GokulAnanth","Lenin",]
    const [mode, setMode] = useState(false)
    return (
        <div className="h-screen w-full flex justify-center py-4 bg-black">
            <div className={`${mode ? "bg-blac" : "bg-whit"}`}>

                {/* <div className="text-3xl cursor-pointer" onClick={() => setMode(!mode)}>
                {mode ? <IoSunnyOutline className="text-white"/> : <MdOutlineDarkMode />}
            </div> */}


                <div className="bg-white px-16 py-4 rounded-full">
                    <div className="space-x-9 flex ">
                        {menu.map((item: any) => (
                            <div className="gap-9 py-2 px-4 rounded-full hover:bg-gray-400/95 hover:text-green-400 text-center  cursor-pointer">{item}</div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}