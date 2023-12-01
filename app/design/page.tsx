'use client'

import Content from "@/components/design/content";
import Preview from "@/components/design/preview";
import Customize from "@/components/design/customize";
import { Tabs, Tab, Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { useData } from "@/hooks/useData";





export default function Page() {

    const [selected, setSelected] = useState<string>("content");

    const { state, updateProperty } = useData();

    const tabs = [
        {
            key: 'content',
            title: 'Content'
        },
        {
            key: 'customize',
            title: 'Customize'
        }
    ]

    useEffect(() => {
        console.log(state?.name)
    }, [state])



    return (
        <>

            {
                state ? <>
                    <div className=" fixed top-4 w-2/4 right-0 left-0 z-20 " style={{ margin: '0 auto' }}>
                        <Card>
                            <CardBody>
                                <div className="flex justify-between items-center ">
                                    <div className="flex justify-between items-center">
                                        {/* <Button className="p-1" color="primary" variant="light" size="sm" as={Link} href="/">
                                    Back Home
                                </Button> */}
                                        <Tabs
                                            className=" mr-2 ml-2"
                                            color="primary"
                                            selectedKey={selected}
                                            variant="light"
                                            onSelectionChange={key => setSelected(key as string)}
                                        >
                                            {
                                                tabs.map(item => <Tab key={item.key} title={item.title} />)
                                            }
                                        </Tabs>
                                        <Input
                                            value={state?.name}
                                            labelPlacement='outside-left'
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <Button className=" float-right" color="danger" size="sm">
                                        Download
                                    </Button>
                                </div>

                            </CardBody>
                        </Card>

                    </div>
                    <div className="w-screen h-full flex justify-center">
                        <div className=" h-full">
                            {/* <Content></Content> */}
                            <Content className={`${selected !== 'content' ? 'hidden' : ''}`} ></Content>
                            <Customize className={`${selected !== 'customize' ? 'hidden' : ''}`}></Customize>
                        </div>
                        <Preview></Preview>
                    </div>
                </> : <Spinner className=" fixed top-1/2 left-1/2" label="Loading..." />
            }
        </>
    );
}
