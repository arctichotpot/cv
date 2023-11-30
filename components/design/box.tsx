import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { title } from "../primitives";

import { CSSProperties, ReactNode, useState } from "react";

type Props = {
    boxBodyClassName?: string
    className?: string
    style?: string | CSSProperties
    children?: ReactNode

}

export const Box = ({ className, children, style }: Props) => {
    return <div className={` overflow-scroll max-h-full w-unit-9xl pt-24 bg-none no-scrollbar  ${className}  pb-4`} style={style as CSSProperties}>
        {children}
    </div>
}

export const BoxCard = ({ className, children, style, boxBodyClassName }: Props) => {
    return <>
        <Card radius="sm" className={` max-h-full w-unit-9xl  ${className} `} style={style as CSSProperties}>
            <CardBody className={` no-scrollbar`}>
                {children}
            </CardBody>
        </Card>
    </>
}




export const EditBox = () => {

    const [isEdit, setIsEdit] = useState(false)
    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleCancel = () => {
        setIsEdit(false)
    }

    const handleSave = () => {
        setIsEdit(false)
    }

    return <Card className="w-full mt-1 mb-1" onPress={handleEdit} isPressable={!isEdit}>

        {isEdit ? <>

            <CardHeader className="flex gap-3">
                <h3 className={title({ size: 'sm' })}>Edit</h3>
            </CardHeader>
            <Divider />

        </> : null}


        <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>

        {
            isEdit ?
                <>
                    <Divider />
                    <CardFooter className=" flex justify-end">
                        <Button className=" mr-2" size="sm" onPress={handleCancel}>Cancel</Button>
                        <Button size="sm" color="success" onPress={handleSave}>Save</Button>
                    </CardFooter>
                </> : null
        }

    </Card>
}