import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import FetchBlogs from './components/FetchBlogs'
import './App.scss'

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route path='/' component={FetchBlogs} />
    </Switch>
  </>
)

export default App
