import { useEffect, useState } from 'react'

import { fetchLocation, fetchWeather } from './api'
import Form from './Form'
import Layout from './Layout'
import Weather from './Weather'

function App() {
  const [inputSubmission, setInputSubmission] = useState(null)
  const [locationData, setLocationData] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [weatherError, setWeatherError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let ignore = false

    const handleFetchData = async () => {
      setLoading(true)
      setLocationData(null)
      setWeatherData(null)
      setLocationError(null)
      setWeatherError(null)

      const { error: locationError, response: locationResponse } =
        await fetchLocation(inputSubmission)

      if (!ignore) {
        if (locationError) {
          setLocationError(locationError.message)
        } else {
          setLocationData(locationResponse)
        }
      }

      if (locationResponse.length === 0) {
        setLocationError(
          `Location was unable to be found from search query: "${inputSubmission.query}". If state was included in the search, please ensure it is not abbreviated.`
        )
        return () => {
          ignore = true
        }
      }

      const { error: weatherError, response: weatherResponse } =
        await fetchWeather(locationResponse[0])

      if (!ignore || locationResponse.length === 0) {
        if (weatherError) {
          setWeatherError(weatherError.message)
        } else {
          setWeatherData(weatherResponse)
        }
      }

      setLoading(false)
    }

    if (inputSubmission) {
      handleFetchData()
    }

    return () => {
      ignore = true
    }
  }, [inputSubmission])

  return (
    <Layout>
      <Form setInputSubmission={setInputSubmission} />
      <Weather
        data={{ locationData, weatherData }}
        error={{ locationError, weatherError }}
        loading={loading}
      />
    </Layout>
  )
}

export default App
