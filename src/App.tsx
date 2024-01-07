import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import Register from './components/template/Auth/Register'
import Login from './components/template/Auth/Login'
import ProfilePage from './page/ProfilePage'
import BookmarkPage from './page/BookmarkPage'
import NotFoundPage from './page/NotFoundPage'

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/profile'} element={<ProfilePage/>}/>
        <Route path={'/bookmark'} element={<BookmarkPage/>}/>
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
