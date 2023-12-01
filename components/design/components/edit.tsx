import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import { forwardRef, LegacyRef, ReactNode, useState } from "react";
import { RiDragMove2Line } from "react-icons/ri";
import { SortableKnob } from "react-easy-sort";


type EditBoxProps = {
    onSave?: () => void
    onCancel?: () => void
    children: (isEdit?: boolean) => ReactNode | ReactNode
    dragHandle?: ReactNode
}



const Handle = (_: any, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return <span ref={ref} className=" cursor-move w-auto">
        <RiDragMove2Line />
    </span>
}


const SortHandle = forwardRef<HTMLDivElement, {}>(Handle)



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
                <SortHandle  ></SortHandle>
            </SortableKnob>
        </CardHeader>

        <CardBody>

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