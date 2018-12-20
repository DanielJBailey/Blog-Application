import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBlogs } from '../reducers/blogs'
import Blog from './Blog'
import { SearchConsumer } from '../providers/SearchProvider'

class BlogList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getBlogs())
  }

  render () {
    let { blogs } = this.props;
    return (
      <BlogContainer>
        <SearchConsumer>
          {value => (
            <>
              {value.search.length > 0 ? 
                blogs.filter(blog => (
                  blog.title.toLowerCase().includes(value.search.toLowerCase())
                )).map(blog => (
                  <Blog key={blog.id} {...blog} />
                ))
              :
                blogs.map(blog => (
                  <Blog key={blog.id} {...blog} />
                ))
              }        
            </>
          )}
        </SearchConsumer>
      </BlogContainer>
    )
  }
}

const BlogContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  padding: 50px 0;
  height: 100%;
  min-height: calc(100vh - 82px);
  width: 1000px;
  @media (max-width: 425px) {
    width: 100%;
    padding-top: 10px;
  }
`

const mapStateToProps = state => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)
