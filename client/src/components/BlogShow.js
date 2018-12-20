import React from 'react'
import { connect } from 'react-redux'
import {Link, } from 'react-router-dom';
import styled from 'styled-components'

const BlogShow = ({ blog = {}, blogs={} }) => {

  let blogsShown = blogs;
  // Set the number of sample blogs to show in sidebar
  blogsShown = blogsShown.slice(0,5);
  console.log(blogsShown);
  return (
    <BlogContainer>
      <BlogHeader>
        <TitleContainer>
          <h1 className='title'>{blog.title}</h1>
          <p className='intro'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </p>
        </TitleContainer>
        <ImageContainer>
          <img src='https://picsum.photos/600/500?random' alt='' />
        </ImageContainer>
      </BlogHeader>
      <BlogBody>
        <SideBar>
          {blogsShown.map(blog => 
            <div key={blog.id} className="sample-blog">
              <p className="blog-title">{blog.title}</p>
              <p className="blog-body">{blog.body.substring(0, 100) + '...'}</p>
              <Link to ={`/blogs/${blog.id}`} className="blog-link">View</Link>
              <hr />
              
            </div>
            
          )}
        </SideBar>
        <BlogText>{blog.body}</BlogText>
      </BlogBody>
    </BlogContainer>
  )
}


const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px auto;
  justify-content: flex-start;
  max-width: 200px;

  .sample-blog {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .blog-title {
      font-weight: bold;
      font-family: 'Playfair Display', serif;
      margin-bottom: 10px;
      text-align: left;

    }
    .blog-body {
      font-size: 14px;
      font-family: 'Crimson Text', serif;
      margin-bottom: 20px;
      text-align: left;
    }
    .blog-link {
      text-decoration: none;
      font-size: 14px;
      margin: 0 auto 10px;
      padding: 5px 10px;
      color: #2d3436;
      border: 1px solid #2d3436;
    }
    hr {
      width: 100%;
      height: 2px;
      background-color: rgba(0,0,0,0.2);
      border: none;
    }
  }
`;

const BlogBody = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
`

const BlogText = styled.p`
  white-space: pre-wrap;
  max-width: 800px;
  margin: 100px auto 100px;
  line-height: 1.58;
  font-size: 22px;
  font-family: 'Crimson Text', serif;
  font-weight: 300;
`

const BlogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
  max-width: 500px;
  padding: 60px 60px 32px 0;
  margin-left: auto;
  .title {
    font-size: 50px;
    line-height: 64px;
    margin-bottom: 16px;
    font-family: 'Playfair Display', serif;
  }
  .intro {
    font-size: 20px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.54);
  }
`

const ImageContainer = styled.div`
  display: flex;
  width: 75%;
  img {
    width: 100%;
  }
`

const BlogContainer = styled.div`
  padding: 82px 100px;
`

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => blog.id === parseInt(props.match.params.id)),
    blogs: state.blogs.filter(blog => blog.id !== parseInt(props.match.params.id))
  }
}

export default connect(mapStateToProps)(BlogShow)
