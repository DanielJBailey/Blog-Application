import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getBlogs, updateBlog } from '../reducers/blogs'
import Swal from 'sweetalert2'

class EditBlog extends React.Component {
  state = {
    title: '',
    body: '',
    claps: 0,
    loaded: false
  }

  componentDidUpdate () {
    let { loaded } = this.state
    this.resizeInputs()
    if (!loaded) {
      this.setState({
        ...this.props.blog,
        loaded: true
      })
    }
  }

  componentDidMount () {
    this.props.dispatch(getBlogs())
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    let { push } = this.props.history
    e.preventDefault()
    const { id } = this.props.match.params
    const blog = { ...this.state }
    const { dispatch } = this.props
    dispatch(updateBlog(blog, id))
    Swal({
      type: 'success',
      title: 'Blog Updated',
      text: 'You have patched forth your changes!'
    })
    push(`/blogs/${id}`)
  }

  resizeInputs = () => {
    let titleInput = document.querySelector('.title-input')
    if (titleInput.value === '') {
      titleInput.style.height = `75px`
    } else {
      var height = titleInput.scrollHeight
      titleInput.style.height = `${height}px`
    }
    let bodyInput = document.querySelector('.body-input')
    if (bodyInput.value === '') {
      bodyInput.style.height = `300px`
    } else {
      var bodyHeight = bodyInput.scrollHeight
      bodyInput.style.height = `${bodyHeight}px`
    }
  }

  render () {
    let { title, body } = this.state
    return (
      <BlogContainer>
        <Form onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Title'
            name='title'
            value={title}
            required
            className='title-input'
            autoFocus
            style={
              title === ''
                ? { caretColor: '#b2bec3' }
                : { caretColor: '#2d3436' }
            }
            onChange={this.handleChange}
          />
          <textarea
            placeholder='Tell your story...'
            name='body'
            value={body}
            required
            style={
              title === ''
                ? { caretColor: '#b2bec3' }
                : { caretColor: '#2d3436' }
            }
            onChange={this.handleChange}
            className='body-input'
          />
          <input type='submit' value='Submit' className='submit' />
        </Form>
      </BlogContainer>
    )
  }
}

const BlogContainer = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 82px);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 600px;
  padding: 1em;
  @media (max-width: 425px) {
    width: 100%;
  }

  .body-input {
    width: 100%;
    font-family: 'Crimson Text', serif;
    padding-left: 10px;
    font-size: 23px;
    min-height: 300px;
    border: none;
    overflow: hidden;
    margin: 20px 0;
    background-color: white;
    outline: none;
    color: #2d3436;
    resize: none;
    &::placeholder {
      font-size: 23px;
      color: #b2bec3;
      padding-left: 10px;
    }
  }

  .title-input {
    font-family: 'Playfair Display', serif;
    width: 100%;
    padding-left: 10px;
    overflow: hidden;
    font-size: 45px;
    resize: none;
    height: 75px;
    border: none;
    background-color: white;
    outline: none;
    color: #2d3436;
    &::placeholder {
      font-size: 45px;
      padding-left: 10px;
      color: #b2bec3;
    }
  }

  input {
    background-color: white;
    border: 2px solid #2d3436;
    color: #2d3436;
    margin-top: 1em;
    width: 300px;
    font-size: 14px;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
      background-color: #2d3436;
      color: white;
    }
  }
`

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => blog.id === parseInt(props.match.params.id))
  }
}

export default connect(mapStateToProps)(EditBlog)
