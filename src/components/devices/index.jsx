import { lazy } from 'react'

const Desktop = lazy(() => import('./desktop/Desktop'))
const Laptop = lazy(() => import('./laptop/Laptop'))
const Mobile = lazy(() => import('./mobile/Mobile'))
const Tablet = lazy(() => import('./tablet/Tablet'))

const data = {
    mobile: <Mobile />,
    tablet: <Tablet />,
    laptop: <Laptop />,
    desktop: <Desktop />,
}

export default device => data[device]
