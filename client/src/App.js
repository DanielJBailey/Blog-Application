import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FetchBlogs from './components/FetchBlogs'
import './App.scss'

const App = () => (
    <Switch>
      <Route path='/' component={FetchBlogs} />
    </Switch>
)

export default App
