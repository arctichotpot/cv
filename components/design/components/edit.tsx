import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import { forwardRef, LegacyRef, ReactNode, useState } from "react";
import { RiDragMove2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

import { SortableKnob } from "react-easy-sort";


type EditBoxProps = {
    onSave?: () => void
    onCancel?: () => void
    children: (isEdit?: boolean) => ReactNode | ReactNode
    dragHandle?: ReactNode
}



const DragIcon = (_: any, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return <span ref={ref} className=" cursor-move w-auto ">
        <RiDragMove2Line className=" text-xl" />
    </span>
}



const EditIcon = ({ onClick }: { onClick: () => void }) => {
    return <span onClick={onClick} className=" cursor-pointer w-auto ">
        <FaEdit className=" text-xl" />
    </span>
}




const SortHandle = forwardRef<HTMLDivElement, {}>(DragIcon)





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



        <CardHeader className="flex gap-3">
            <SortableKnob>
                <SortHandle></SortHandle>
            </SortableKnob>
            <EditIcon onClick={handleEdit}></EditIcon>
        </CardHeader>

        <CardBody>

            {children(isEdit)}

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