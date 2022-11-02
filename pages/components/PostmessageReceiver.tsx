import React, { FC, useEffect } from 'react'
import { EPostMessageType } from '../../types'

interface TPostmessageReceiver {
    onMessage: (data: string) => void
}
const PostmessageReceiver: FC<TPostmessageReceiver> = ({ onMessage }) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (event.data.type === EPostMessageType.GITHUB_OAUTH) {
                onMessage(event.data.data)
            }
        }
        window.addEventListener('message', listener)
    }, [])

    return (
        <></>
    )
}
export default PostmessageReceiver