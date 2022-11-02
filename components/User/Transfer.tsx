import { Input, Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Transfer() {
    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState(0)
    const handleTransfer = () => {

    }
    return (
        <div><Box className='' w="500px" my={2} >
            <div>Transfer test</div>
            <Input value={address} onChange={(e) => { setAddress(e.target.value) }} className='' mr={10} my={2} placeholder={'Please input an Ethereum address'}></Input>
            <Input value={balance} onChange={(e) => { setBalance(Number(e.target.value)) }} mr={10} my={2} placeholder={'Please input balance'}></Input>
            <Button onClick={handleTransfer}>Transfer</Button>
            <div>Transfer is not available</div>
        </Box>
        </div>
    )
}
