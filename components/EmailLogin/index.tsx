import { CheckIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

enum EStep {
    INPUT_EMAIL,
    GET_CODE,
    INPUT_CODE,
    COMPLETED
}
function EmailLogin() {
    const [email, setEmail] = useState('')
    const [step, setStep] = useState()
    return (
        <Flex
            direction={{ base: 'column' }}
            justify="center"
            align="center"
            as={'form'}
            justifyContent="center"
            onSubmit={(e: FormEvent) => {

            }}>
            <FormControl>
                <Input
                    variant={'solid'}
                    borderWidth={1}
                    color={'gray.800'}
                    _placeholder={{
                        color: 'gray.400',
                    }}
                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                    id={'email'}
                    type={'email'}
                    required
                    placeholder={'Your Email'}
                    aria-label={'Your Email'}
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
            </FormControl>
            <FormControl mt={3} display={'flex'} justifyContent={'center'} >
                <Button
                    w={{ base: '100%' }}
                // colorScheme={state === 'success' ? 'green' : 'blue'}
                // isLoading={state === 'submitting'}
                // w="100%"
                // type={state === 'success' ? 'button' : 'submit'}
                >
                    Continue with email</Button>
            </FormControl>
        </Flex>
    )
}

export default EmailLogin