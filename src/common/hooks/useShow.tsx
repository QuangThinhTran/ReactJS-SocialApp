import { useState } from "react"

export const useShow = () => {
    const [show, setShow] = useState<boolean>(false)

    const handleShow = () => {
        setShow(!show)
    }
    return { show, handleShow };
}
