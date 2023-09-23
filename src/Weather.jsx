const Weather = ({
  data: { locationData, weatherData },
  error: { locationError, weatherError },
  loading
}) => {
  console.log('location data:', locationData)
  console.log('weather data:', weatherData)
  console.log('location error:', locationError)
  console.log('weather error:', weatherError)

  return (
    <section className="text-center">
      <img
        className="h-30 mx-auto -mb-4 mt-0"
        src="https://openweathermap.org/img/wn/10d@2x.png"
      />
      <h2 className="mt-0">Omaha</h2>
      <p className="mb-6 text-4xl text-secondary">74&deg;F</p>
      <p className="italic">Cloudy</p>
      <p className="-mt-4 text-secondary">
        <span className="font-bold text-base-content">H:</span> 74&deg;F{' '}
        <span className="font-bold text-base-content">|</span>{' '}
        <span className="font-bold text-base-content">L:</span> 61&deg;F
      </p>
    </section>
  )
}

export default Weather
