import axios from 'axios';

const BLOGS = "BLOGS";
const ADD = "ADD_BLOG";
const UPDATE = "UPDATE_BLOG";
const DELETE = "DELETE_BLOG";

// REDUX ACTIONS

export const getBlogs = (cb) => {
  return (dispatch) => {
    axios.get('/api/blogs')
    .then(res => dispatch({ type: BLOGS, blogs: res.data}))
    .then( cb );
  }
}

export const addBlog = (blog) => {
  return (dispatch) => {
    axios.post(`/api/blogs`, { blog })
    .then(res => dispatch({ type: ADD, blog: res.data }))
  }
}


export const updateBlog = (blog, id) => {
  return (dispatch) => {
    axios.put(`/api/blogs/${id}`, { blog })
    .then(res => dispatch({ type: UPDATE, blog: res.data }))
  }
}

export const deleteBlog = (id) => {
  return (dispatch) => {
    axios.delete(`/api/blogs/${id}`)
    .then( () => dispatch({ type: DELETE, id }))
  }
}

const blogs = ( state = [], action ) => {
  switch(action.type) {
    case BLOGS:
      return action.blogs
    case ADD:
      return [action.blog, ...state]
    case UPDATE:
      return state.map(blog => {
        if(blog.id === action.blog.id) 
          return action.blog
        return blog
      })
    case DELETE:
      return state.filter(blog => blog.id !== action.id)
    default: return state
  }
}
  
export default blogs;