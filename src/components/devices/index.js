import Desktop from './desktop/Desktop'
import Laptop from './laptop/Laptop'
import Mobile from './mobile/Mobile'
import Tablet from './tablet/Tablet'

const data = {
    mobile: <Mobile />,
    tablet: <Tablet />,
    laptop: <Laptop />,
    desktop: <Desktop />,
}

export default device => data[device]
