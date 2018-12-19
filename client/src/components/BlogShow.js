import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const BlogShow = ({ blog = {},}) => {
  return (
    <BlogContainer>
        <BlogPost>
        <img src='https://picsum.photos/1000/400/?random' alt='' />
        <BlogContent>
            <h1 className='title'>{blog.title}</h1>
            <hr />
            <p className='body'>{blog.body}</p>
        </BlogContent> 
        </BlogPost>
    </BlogContainer>
  )
}

const BlogContainer = styled.div`
    padding: 100px 0;
`;

const BlogPost = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 1em auto;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .title {
    padding: 30px 0 0;
    font-size: 48px;
    font-family: 'Merriweather', serif;
    @media (max-width: 425px) {
      font-size: 30px;
    }
  }

  hr {
    margin: 30px 0;
    border: none;
    background-color: #ccc;
    height: 1px;
  }

  .body {
    white-space: pre-wrap;
    line-height: 1.5em;
    word-wrap: break-word;
  }

  button {
    padding: 10px 15px;
    background-color: #fff;
    cursor: pointer;
    color: #2d3436;
    border: none;
    border-radius: 5px;
    border: 2px solid #2d3436;
    &:hover {
      background-color: #2d3436;
      color: white;
    }
  }
`

const BlogFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
`

const UpVote = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  svg {
    fill: #2d3436;
  }
`

const UpVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .claps {
    font-size: 12px;
    margin-left: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 5px;
    color: #2d3436;
    font-weight: bold;
  }
`

const BlogContent = styled.div`
  padding: 0 2em 2em;
`

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => blog.id === parseInt(props.match.params.id))
  }
}

export default connect(mapStateToProps)(BlogShow)
