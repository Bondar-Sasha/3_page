const identifyDevice = (width) => {
	if (width <= 768) return "mobile"
	if (width <= 1024) return "tablet"
	if (width <= 1440) return "laptop"
	return "desktop"
}

export default identifyDevice
