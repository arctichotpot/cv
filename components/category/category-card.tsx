'use client'

import { Card, CardFooter, Image } from "@nextui-org/react";
import { categoryList } from "@/config/category";
import { useState } from "react";
import { TemplateModal } from "./template-modal";

export const CategoryCard = () => {

    const [templateType, setTemplateType] = useState<string>('')

    const handleClickCategory = (type: string) => {

        setTemplateType(type)
        console.log(type)
    }

    return <>
        <div className="inline-block max-w-lg ">

            <div className="gap-2 grid grid-cols-2 mt-10">
                {
                    categoryList.map(item => {
                        return <Card key={item.type}
                            isFooterBlurred
                            isPressable
                            onClick={() => handleClickCategory(item.type)}
                            radius="lg"
                            className="border-none "
                        >
                            <Image
                                isZoomed
                                alt="Woman listing to music"
                                className="object-cover"
                                src={item.img}
                            />

                            <CardFooter className="justify-center before:bg-white/10 text-center border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className=" text-lg font-semibold text-slate-800 ">{item.title}</p>
                            </CardFooter>
                        </Card>
                    })
                }

            </div>
        </div>
        <TemplateModal type={templateType}  ></TemplateModal>
    </>
}