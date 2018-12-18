import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import BlogForm from './components/BlogForm';
import BlogShow from './components/BlogShow';
import NavBar from './components/NavBar';
import './App.scss';

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blogs/new" component={BlogForm} />
      <Route exact path="/blogs/:id" component={BlogShow} />
    </Switch>
  </>
)

export default App;
