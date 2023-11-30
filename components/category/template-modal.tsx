'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, CardBody } from "@nextui-org/react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import writing from "@/assets/images/writing.png"
import { useRouter } from 'next/navigation'
import { stringify } from "querystring";
import { useEffect, useState } from "react";

import { TemplateType, templateList } from "@/config/category";


type Props = {
    type: string
}

export const TemplateModal = ({ type }: Props) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const router = useRouter()

    const [list, setList] = useState<TemplateType[]>([])


    useEffect(() => {
        if (type) {

            setList(templateList[type])
            onOpen()
        }
        else onClose()
    }, [onClose, onOpen, type])


    const handleSelectTemplate = (item: TemplateType) => {

        console.log(item)

        router.push('/design?' + stringify({ id: 123 }))

    }

    return <>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">{type.toUpperCase()} TEMPLATE</ModalHeader>
                    <ModalBody>

                        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                            {list.map((item, index) => (
                                <Card isPressable shadow="sm" key={index} onPress={() => handleSelectTemplate(item)} className=" cursor-pointer">
                                    <CardBody className="overflow-visible p-0 " >
                                        <Image
                                            shadow="none"
                                            radius="lg"
                                            width="100%"
                                            alt={item.title}
                                            className="w-full object-cover h-[220px]"
                                            src={writing.src}
                                        />
                                    </CardBody>
                                    <div className=" w-full text-center mb-2">{item.title}</div>

                                </Card>
                            ))}
                        </div>
                    </ModalBody>
                </>
            </ModalContent>
        </Modal>

    </>
}