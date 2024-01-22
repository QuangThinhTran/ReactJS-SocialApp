import React, { createContext } from "react"
import { useScreenDesktop, useScreenMobile, useScreenSurface, useScreenTablet } from "./ScreenResponsive";

interface MyComponentProps {
    children: React.ReactNode;
}

interface IScreen {
    mobile: boolean;
    tablet: boolean;
    surface: boolean;
    desktop: boolean;
}

export const ScreenContext = createContext<IScreen>({
    mobile: true,
    tablet: true,
    surface: true,
    desktop: true,
})


const BaseProvider: React.FC<MyComponentProps> = ({ children }) => {
    const mobile = useScreenMobile()
    const tablet = useScreenTablet()
    const surface = useScreenSurface()
    const desktop = useScreenDesktop()

    return (
        <ScreenContext.Provider value={{ mobile: mobile.screen, tablet: tablet.screen, surface: surface.screen, desktop: desktop.screen }}>
            {children}
        </ScreenContext.Provider>
    )
}

export default BaseProvider
