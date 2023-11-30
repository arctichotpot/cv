import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { title } from "../../primitives";

import { ReactNode, useState } from "react";


type EditBoxProps = {
    onSave?: () => void
    onCancel?: () => void
    children: (isEdit?: boolean) => ReactNode | ReactNode
    dragHandle?: ReactNode
}


export const EditBox = ({ children, onCancel, onSave, dragHandle }: EditBoxProps) => {

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

    return <Card className="w-full mt-1 mb-1"  >

        {isEdit ? <>

            <CardHeader className="flex gap-3">
                <h3 className={title({ size: 'sm' })}>Edit</h3>
            </CardHeader>

            <Divider />

        </> : null}

        <CardBody>
            {dragHandle}
            <div onClick={handleEdit}>
                {children(isEdit)}
            </div>
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