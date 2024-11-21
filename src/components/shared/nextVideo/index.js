import Desktop from './desktop/desktop'
import Laptop from './laptop/laptop'
import Mobile from './mobile/mobile'
import Tablet from './tablet/tablet'

const data = {
    mobile: <Mobile />,
    tablet: <Tablet />,
    laptop: <Laptop />,
    desktop: <Desktop />,
}

export default device => data[device]
