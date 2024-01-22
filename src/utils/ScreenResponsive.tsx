import { useEffect, useState } from "react"

export const useScreenMobile = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth >= 360 && window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return { screen }
}

export const useScreenTablet = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth < 1023)

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth >= 768 && window.innerWidth < 1023)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])
  return { screen }
}

export const useScreenSurface = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth < 1365)

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth >= 1023 && window.innerWidth < 1365)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', handleResize);
    }
  }, [])

  return { screen }
}

export const useScreenDesktop = () => {
  const [screen, setScreen] = useState<boolean>(window.innerWidth >= 1365)

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth >= 1365)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, []);

  return { screen }
}