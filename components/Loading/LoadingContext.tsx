import { createContext, FC, ReactElement, useContext, useState } from "react";
import Loading from "./Loading";

interface ILoadingContext {
    loading: boolean,
    setLoading: ((loading: boolean) => void)
}

const LoadingContext = createContext<ILoadingContext>({
    loading: true,
    setLoading: () => {},
});

type TLoadingProps = {
    children: ReactElement
}
export const LoadingProvider: FC<TLoadingProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const value = { loading, setLoading };
    return (
        <LoadingContext.Provider value={value}>
            <Loading />
            {children}
        </LoadingContext.Provider>
    );
}


function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within LoadingProvider");
    }
    return context;
}
export default useLoading