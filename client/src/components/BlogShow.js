import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const BlogShow = ({ blog = {} }) => {
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
          <img src='https://picsum.photos/800/400?random' alt='' />
        </ImageContainer>
      </BlogHeader>
      <BlogBody>
          
      </BlogBody>
    </BlogContainer>
  )
}

const BlogHeader = styled.div`
  display: flex;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 2em 2em 2em 0;
  margin-bottom: 40px;
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
  img {
    width: 100%;
  }
`

const BlogContainer = styled.div`
  padding: 82px 0;
  max-width: 1200px;
  margin: 0 auto;
`

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => blog.id === parseInt(props.match.params.id))
  }
}

export default connect(mapStateToProps)(BlogShow)
