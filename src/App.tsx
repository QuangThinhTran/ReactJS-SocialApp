import { Route, Routes, useLocation } from 'react-router-dom'
import Register from './components/template/Auth/Register'
import Login from './components/template/Auth/Login'
import NotFoundPage from './page/NotFoundPage'
import Bookmark from './components/template/Bookmark'
import Profile from './components/template/Profile/Profile'
import Home from './components/template/Home'
import LayoutPage from './page/LayoutPage'
import People from './components/template/People'
import BaseProvider from './common/providers/BaseProvider'
import React from 'react'
import AuthProvider from './common/providers/AuthProvider'
import ResultSearch from './components/template/ResultSearch'

function AppUI() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || undefined;
  const email = searchParams.get('email') || undefined;

  return (
    <React.Fragment>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/profile/:usernameTemp'} element={<Profile />} />
          <Route path={'/bookmark'} element={<Bookmark />} />
          <Route path={'/people'} element={<People />} />
          <Route path={'/search'} element={<ResultSearch name={name} email={email} />}></Route>
        </Route>
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  )
}

function App() {
  return (
    <AuthProvider>
      <BaseProvider>
        <AppUI />
      </BaseProvider>
    </AuthProvider>
  )
}

export default App
