
import { Box } from "./box";
import { AddModal } from "./add-modal";
import { useData } from "@/hooks/useData";
import { EditBox } from "./components/edit";
import { useEffect, forwardRef, LegacyRef, ReactNode } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";



type Props = {
    className?: string
}


const Handle = (_: any, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return <div ref={ref} onClick={() => console.log(123123)}>
        asdasd123
    </div>
}


const SortHandle = forwardRef<HTMLDivElement, {}>(Handle)


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

                                    <EditBox key={item?.type} dragHandle={<SortableKnob>
                                        <SortHandle  ></SortHandle>
                                    </SortableKnob>}>
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


