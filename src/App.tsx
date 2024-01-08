import { Route, Routes } from 'react-router-dom'
import Register from './components/template/Auth/Register'
import Login from './components/template/Auth/Login'
import NotFoundPage from './page/NotFoundPage'
import Bookmark from './components/template/Bookmark'
import Profile from './components/template/Profile/Profile'
import Home from './components/origanism/Home'
import LayoutPage from './page/LayoutPage'

function App() {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/bookmark'} element={<Bookmark />} />

      </Route>
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
