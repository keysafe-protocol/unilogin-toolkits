import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { sign } from '../../../services/httpClient';
import { useLoading } from '../Loading/LoadingContext';

export default function UserSign() {
    const [signMessage, setSignMessage] = useState('')
    const [signedMessage, setSignedMessage] = useState('')
    const {setLoading} = useLoading()

    const handleSign = async () => {
        setLoading(true)
        const data: any = await sign(signMessage)
        setSignedMessage(data.sig)
        setLoading(false)
    }
    return (
        <Box className='' w="500px" my={5}  >
            <div>Sign test</div>
            <Input value={signMessage} onChange={(e) => { setSignMessage(e.target.value); setSignedMessage('') }} className='' my={2}></Input>
            <Button onClick={handleSign}>Sign</Button>
            {
                signedMessage && <><div>Signature:</div> {signedMessage}</>
            }
        </Box>
    )
}
