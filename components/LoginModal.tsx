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
} from '@chakra-ui/react'
import { useRequest } from 'ahooks'
import _ from 'lodash'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { oAuthLogin } from '../services/httpClient'
import Loading from './Loading/Loading'
import useLoading from './Loading/LoadingContext'
// import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import PostmessageReceiver from './PostmessageReceiver'
import Userinfo from './User/Userinfo'

const LoginModal = () => {
    const { setLoading } = useLoading()
    const [isOpen, setIsOpen] = useState(false)
    const [code, setCode] = useState('')
    const [token, setToken] = useState<string | null>('')
    const onClose = () => {
        setIsOpen(false)
    }
    const onOpen = () => {
        setIsOpen(true)
    }
    const { data, loading } = useRequest<any, any>(() => oAuthLogin(code), {
        throttleWait: 300,
        ready: !!code,
        onBefore: () => { setLoading(true) },
        onSuccess: () => { setToken(localStorage.getItem('token')) },
        onFinally: () => { setLoading(false) },
    });
    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])




    return <div>
        {token ? <Userinfo /> : <Button onClick={onOpen}>Login with unilogin</Button>}

        <PostmessageReceiver onMessage={(code) => { setCode(code); onClose() }} />
        {
            loading ? <Loading /> : <Modal isOpen={isOpen} onClose={onClose}>
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