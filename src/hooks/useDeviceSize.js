import { startTransition, useEffect, useState } from 'react'

const useDeviceSize = () => {
    const [device_size, setDeviceSize] = useState({
        device_width: window.innerWidth,
        device_height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () =>
            startTransition(() =>
                setDeviceSize({
                    device_width: window.innerWidth,
                    device_height: window.innerHeight,
                }),
            )
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [device_size])

    return {
        device_width: device_size.device_width,
        device_height: device_size.device_height,
    }
}

export default useDeviceSize
