import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { PostMassageType } from '../../types'
// import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => { }
    const onOpen = () => {
        setIsOpen(true)
    }

    return <div>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                        <Stack spacing="6">
                            <OAuthButtonGroup />
                        </Stack>
                    </Container>

                </ModalBody>

                {/* <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter> */}
            </ModalContent>
        </Modal >
    </div>
}
export default LoginModal