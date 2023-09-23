const Weather = ({
  data: { locationData, weatherData },
  error: { locationError, weatherError },
  loading
}) => {
  console.log('location data:', locationData)
  console.log('weather data:', weatherData)
  console.log('location error:', locationError)
  console.log('weather error:', weatherError)

  if (locationData && weatherData) {
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
  } else if (locationError || weatherError) {
    return (
      <section className="alert alert-error mt-4">
        <svg
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>Error!</span>
        {locationError && <span>{locationError}</span>}
        {weatherError && <span>{weatherError}</span>}
      </section>
    )
  } else if (loading) {
    return (
      <section className="mt-4 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </section>
    )
  }
}

export default Weather
