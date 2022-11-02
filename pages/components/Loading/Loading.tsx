import { useLoading } from "./LoadingContext"
import styles from './loading.module.css'
import { Spinner } from "@chakra-ui/react"

const Loading = () => {
    const { loading } = useLoading()
    return <>
        {
            loading ? <div className={styles.loading}>
                <Spinner thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl' />
            </div> : ''
        }
    </>
}
export default Loading