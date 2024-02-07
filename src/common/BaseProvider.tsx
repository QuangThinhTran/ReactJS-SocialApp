import React, { createContext } from "react"
import { useScreenDesktop, useScreenMobile, useScreenSurface, useScreenTablet } from "./ScreenResponsive";
import { useShow } from "./hooks/useShow";

interface MyComponentProps {
    children: React.ReactNode;
}

interface IScreen {
    mobile: boolean;
    tablet: boolean;
    surface: boolean;
    desktop: boolean;
}

interface IShow {
    show: boolean,
    handleShow: () => void
}

export const ScreenContext = createContext<IScreen>({
    mobile: true,
    tablet: true,
    surface: true,
    desktop: true,
})


export const ShowContext = createContext<IShow>({
    show: false,
    handleShow: () => { }
})

const BaseProvider: React.FC<MyComponentProps> = ({ children }) => {
    const mobile = useScreenMobile()
    const tablet = useScreenTablet()
    const surface = useScreenSurface()
    const desktop = useScreenDesktop()
    const show = useShow()

    return (
        <ScreenContext.Provider value={{ mobile: mobile.screen, tablet: tablet.screen, surface: surface.screen, desktop: desktop.screen }}>
            <ShowContext.Provider value={show}>
                {children}
            </ShowContext.Provider>
        </ScreenContext.Provider>
    )
}

export default BaseProvider
