import { useCallback, useLayoutEffect, useState } from "react"

export const useScreenMobile = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth < 768)

  const handleResize = useCallback(() => {
    setScreen(window.innerWidth >= 360 && window.innerWidth < 768)
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize)
  }, [])

  return { screen }
}

export const useScreenTablet = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth < 1023)

  const handleResize = useCallback(() => {
    setScreen(window.innerWidth >= 768 && window.innerWidth < 1023)
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.addEventListener('resize', handleResize)
  }, [])
  return { screen }
}

export const useScreenSurface = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth < 1365)

  const handleResize = useCallback(() => {
    setScreen(window.innerWidth >= 1023 && window.innerWidth < 1365)
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.addEventListener('resize', handleResize);
  }, [])

  return { screen }
}

export const useScreenDesktop = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth >= 1365)

  const handleResize = useCallback(() => {
    setScreen(window.innerWidth >= 1365)
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.addEventListener('resize', handleResize)
  }, []);

  return { screen }
}