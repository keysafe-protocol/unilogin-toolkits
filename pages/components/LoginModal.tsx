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
    Spinner,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { useLocalStorageState, useRequest } from 'ahooks'
import _ from 'lodash'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { getUserInfo, oAuthLogin } from '../../services/httpClient'
// import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import PostmessageReciever from './PostmessageReciever'

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [code, setCode] = useState('')
    const [token, setToken] = useLocalStorageState('token')
    const onClose = () => {
        setIsOpen(false)
    }
    const onOpen = () => {
        setIsOpen(true)
    }
    const { data, run, loading } = useRequest<any, any>(() => oAuthLogin(code), {
        throttleWait: 300,
        ready: !!code
    });
    useEffect(() => { }, [data])

    const { data: userinfo } = useRequest(getUserInfo, {
        ready: data
    })
    console.log(userinfo)



    return <div>
        <Button onClick={onOpen}>Open Modal</Button>
        <PostmessageReciever onMessage={(code) => { setCode(code); onClose() }} />
        {
            loading ? <Spinner /> : <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>UNILOGIN</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="xl">CONTINUE WITH</Text>

                        <Container maxW="lg" py={{ base: '6', md: '12' }} px={{ base: '0', sm: '8' }}>
                            <Stack spacing="6">
                                <OAuthButtonGroup />
                            </Stack>
                        </Container>
                        <div>
                        </div>

                    </ModalBody>

                    {/* <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => { getUserInfo() }}>
                        Confirm
                    </Button>
                </ModalFooter> */}
                </ModalContent>
            </Modal >
        }
    </div>
}
export default LoginModal