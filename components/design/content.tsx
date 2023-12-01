
import { Box } from "./box";
import { AddModal } from "./add-modal";
import { useData } from "@/hooks/useData";
import { EditBox } from "./components/edit";
import { useEffect, forwardRef, LegacyRef, ReactNode } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RiDragMove2Line } from "react-icons/ri";

import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";



type Props = {
    className?: string
}





export default function Content({ className }: Props) {
    const { state, updateProperty } = useData();

    const print = (oldIndex: number, newIndex: number) => {

        console.log(oldIndex, newIndex)
    }

    return (
        <>
            <Box className={` ${className} bg-none   no-scrollbar`} boxBodyClassName=" bg-none">
                <SortableList
                    onSortEnd={print}>
                    {
                        state?.content?.map((item: any) => {
                            return <SortableItem key={item?.type}>
                                <div>
                                    <EditBox key={item?.type} >
                                        {(isEdit) => (
                                            <>
                                                {isEdit ? "123" : item.type}
                                            </>
                                        )}
                                    </EditBox>

                                </div>

                            </SortableItem>
                        })
                    }

                </SortableList>
                <AddModal></AddModal>
            </Box>
        </>

    );
}


