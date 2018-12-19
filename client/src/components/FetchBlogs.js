import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getBlogs } from '../reducers/blogs'
import Home from './Home';
import BlogShow from './BlogShow';
import EditBlog from './EditBlog';
import NewBlog from './NewBlog';

class FetchBlogs extends React.Component {
  state = { loaded: false }

  setLoaded = () => {
    this.setState({ loaded: true })
  }

  componentDidMount () {
    this.props.dispatch(getBlogs(this.setLoaded))
  }

  render () {
    const { loaded } = this.state
    if (loaded) {
      return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/blogs/new" component={NewBlog} />
          <Route exact path='/blogs/:id' component={BlogShow} />
          <Route exact path="/blogs/:id/edit" component={EditBlog}/>
        </Switch>
      )
    } else return (<></>)
  }
}

export default connect()(FetchBlogs)
