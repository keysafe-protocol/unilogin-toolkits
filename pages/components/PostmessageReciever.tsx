import React, { FC, useEffect } from 'react'
import { EPostMessageType } from '../../types'

interface TPostmessageReciever {
    onMessage: (data: string) => void
}
const PostmessageReciever: FC<TPostmessageReciever> = ({ onMessage }) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (event.data.type === EPostMessageType.GITHUB_OAUTH) {
                onMessage(event.data.data)
            }
        }
        window.addEventListener('message', listener)
    }, [])

    return (
        <div>PostmessageReciever</div>
    )
}
export default PostmessageReciever