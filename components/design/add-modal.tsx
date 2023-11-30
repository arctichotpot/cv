import { Button, Card } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, CardBody } from "@nextui-org/react";



export const AddModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return <>

        <div className="flex justify-center mt-6">
            <Button onPress={onOpen} radius="full" className=" w-60  h-14 text-3xl  bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Add Content
            </Button>
        </div>


        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1"> ADD CONTENT</ModalHeader>
                    <ModalBody>

                        <Card>
                            asd
                        </Card>

                    </ModalBody>
                </>
            </ModalContent>
        </Modal>

    </>
}