'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, CardBody } from "@nextui-org/react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import writing from "@/assets/images/writing.png"
import { useRouter } from 'next/navigation'


type Props = {
    title: string
    img: string
    type: string
}

export const TemplateModal = ({ title, type, img }: Props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();



    const list = Array(30).fill(null).concat({
        id: 'create',
        title: "create ",
        img: writing.src,
    }).map((_, index) => {
        return {
            id: index,
            title: "title " + index,
            img: writing.src,
        }
    })


    const print = () => {
        console.log(12312312312)
        onOpen()
    }

    return <>
        <Card
            isFooterBlurred
            isPressable
            onClick={print}
            radius="lg"
            className="border-none"
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                src={img}
            />

            <CardFooter className="justify-center before:bg-white/10 text-center border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className=" text-lg font-semibold text-slate-800 ">{title}</p>
            </CardFooter>
        </Card>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{type.toUpperCase()} TEMPLATE</ModalHeader>
                        <ModalBody>

                            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                                {list.map((item, index) => (
                                    <Card shadow="sm" key={index} onPress={() => console.log("item pressed")} className=" cursor-pointer">
                                        <CardBody className="overflow-visible p-0" >
                                            <Image
                                                shadow="none"
                                                radius="lg"
                                                width="100%"
                                                alt={item.title}
                                                className="w-full object-cover h-[220px]"
                                                src={writing.src}
                                            />
                                        </CardBody>
                                        <div className=" text-center">{item.title}</div>

                                    </Card>
                                ))}
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>

    </>
}