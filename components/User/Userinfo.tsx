import { Box, Button, Input } from '@chakra-ui/react'
import { useRequest } from 'ahooks'
import React, { useState } from 'react'
import { getUserInfo, sign } from '../../services/httpClient'
import useLoading from '../Loading/LoadingContext'
import Transfer from './Transfer'
import UserSign from './UserSign'
import { utils } from "ethers";
function Userinfo() {
    const { setLoading } = useLoading()
    const { data: userinfo } = useRequest<any, any>(getUserInfo, {
        onBefore: () => { setLoading(true) },
        onFinally: () => { setLoading(false) },
    })

    const handleTransfer = () => { }
    const logout = () => {
        localStorage.setItem('token', '')
        window.location.reload()
    }
    return <>
        {
            userinfo ? <div>
                <div> account: 0x{userinfo.addr}</div>
                <div>ETH balance: {utils.formatEther(userinfo.balance)}</div>
                <Button colorScheme={'red'} size={'xs'} onClick={logout}>Logout</Button>

                <UserSign />
                <Transfer />

            </div > : ""
        }
    </>
}

export default Userinfo