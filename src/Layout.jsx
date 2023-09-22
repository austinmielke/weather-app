const Layout = ({ children }) => {
  return (
    <div className="container prose mx-auto min-h-screen px-4">
      <header>
        <h1 className="pt-4 text-center">Weather App</h1>
      </header>
      {children}
    </div>
  )
}

export default Layout
