const Form = () => {
  return (
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
  )
}

export default Form
