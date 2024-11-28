import './App.css'
import GetLayout from './components/devices'
import useDeviceSize from './hooks/useDeviceSize'
import identifyDevice from './utils/identifyDevice'

function App() {
    const { device_width } = useDeviceSize()

    return GetLayout(identifyDevice(device_width))
}

export default App
