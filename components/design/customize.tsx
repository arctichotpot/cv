
import { Tabs, Tab } from "@nextui-org/react";
import {Box} from "./box";


type Props = {
    className?: string
}

export default function Customize({ className }: Props) {


    return (
        <Box className={` ${className}`}>
            <Tabs color="primary" aria-label="Tabs" className=" inline-block">
                <Tab key="photos" title="Photos" />
                <Tab key="music" title="Music" />
            </Tabs>
        </Box>

    );
}
