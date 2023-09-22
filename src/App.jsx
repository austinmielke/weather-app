import { useState } from 'react'

import Form from './Form'
import Layout from './Layout'
import Weather from './Weather'

function App() {
  const [inputSubmission, setInputSubmission] = useState({})

  return (
    <Layout>
      <Form setInputSubmission={setInputSubmission} />
      <Weather />
    </Layout>
  )
}

export default App
