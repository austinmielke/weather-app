function App() {
  return (
    <div className="container prose mx-auto min-h-screen px-4">
      <header>
        <h1 className="pt-4 text-center">Weather App</h1>
      </header>
      <form className="join join-vertical w-full md:join-horizontal">
        <input
          className="input join-item input-bordered input-secondary md:flex-1"
          name="search"
          placeholder="Enter city name"
        />
        <select className="select join-item select-bordered select-secondary">
          <option selected>City</option>
          <option>Zip Code</option>
        </select>
        <button className="btn btn-primary join-item">Search</button>
      </form>
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
    </div>
  )
}

export default App
