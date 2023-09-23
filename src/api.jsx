const fetchLocation = async ({ query, type }) => {
  const generateURL = () => {
    if (type === 'city') {
      const [city, state] = query
        .split(', ')
        .map((item) => item.trim().replace(' ', '%20'))
      return `http://api.openweathermap.org/geo/1.0/direct?q=${city},${
        state || ''
      }&limit=1&appid=${import.meta.env.VITE_API_KEY}`
    } else if (type === 'zip') {
      const zip = query
      return `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    }
  }

  try {
    const res = await fetch(generateURL())

    if (res.ok === true) {
      if (type === 'city') {
        return {
          error: null,
          response: await res.json()
        }
      } else {
        return {
          error: null,
          response: [await res.json()]
        }
      }
    }
  } catch (e) {
    return {
      error: e,
      response: null
    }
  }
}

const fetchWeather = async ({ lat, lon }) => {
  const generateURL = () => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${
      import.meta.env.VITE_API_KEY
    }`
  }

  try {
    const res = await fetch(generateURL())

    if (res.ok === true) {
      return {
        error: null,
        response: await res.json()
      }
    }
  } catch (e) {
    return {
      error: e,
      response: null
    }
  }
}

export { fetchLocation, fetchWeather }
