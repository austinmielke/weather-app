const Weather = ({
  data: { locationData, weatherData },
  error: { locationError, weatherError },
  loading
}) => {
  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }

  if (locationData && weatherData) {
    return (
      <section className="text-center">
        <img
          className="h-30 mx-auto -mb-4 mt-0"
          src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
        />
        <h2 className="mt-0">{locationData[0].name}</h2>
        <p className="mb-6 text-4xl text-secondary">
          {weatherData.current.temp.toFixed(1)}&deg;F
        </p>
        <p className="italic">
          {titleCase(weatherData.current.weather[0].description)}
        </p>
        <p className="-mt-4 text-secondary">
          <span className="font-bold text-base-content">H:</span>{' '}
          {weatherData.daily[0].temp.max.toFixed(1)}&deg;F{' '}
          <span className="font-bold text-base-content">|</span>{' '}
          <span className="font-bold text-base-content">L:</span>{' '}
          {weatherData.daily[0].temp.min.toFixed(1)}&deg;F
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
        <p>
          <span className="font-bold">Error! </span>
          {locationError && <span>{locationError} </span>}
          {weatherError && <span>{weatherError} </span>}
        </p>
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
