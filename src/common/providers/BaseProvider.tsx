import React, { createContext } from "react"
import { useShow } from "../hooks/useShow";

interface MyComponentProps {
    children: React.ReactNode;
}

interface IShow {
    show: boolean,
    handleShow: () => void
}

export const ShowContext = createContext<IShow>({
    show: false,
    handleShow: () => { }
})

const BaseProvider: React.FC<MyComponentProps> = ({ children }) => {
    const show = useShow()

    return (
        <ShowContext.Provider value={show}>
            {children}
        </ShowContext.Provider>
    )
}

export default BaseProvider
