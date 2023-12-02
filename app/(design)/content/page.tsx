'use client'
import { useEffect, useState } from "react";

import { useData } from "@/hooks/useData";
 
 
 
 const Page = () => {


    const { state, updateProperty } = useData();

    const tabs = [
        {
            key: 'content',
            title: 'Content'
        },
        {
            key: 'customize',
            title: 'Customize'
        }
    ]

    useEffect(() => {
        console.log(state)
    }, [state])


    return (
        <div className="flex flex-col min-h-screen">
            asd
        </div>
    );
};


export default Page;