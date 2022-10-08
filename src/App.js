import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
      {/* <Route path="/signIn" element={<Navigation />}>
      </Route> */}
    </Routes>
  )
}

export default App
