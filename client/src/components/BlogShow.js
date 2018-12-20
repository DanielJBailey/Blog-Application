import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBlog } from '../reducers/blogs'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const BlogShow = ({ blog = {}, blogs = {}, dispatch, history }) => {
  let blogsShown = blogs
  // Set the number of sample blogs to show in sidebar
  blogsShown = blogsShown.slice(0, 5)

  const confirm = id => {
    console.log(history)
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal('Deleted!', 'Your file has been deleted.', 'success')
          .then(dispatch(deleteBlog(id)))
          .then(history.push('/'))
      }
    })
  }

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
          {blogsShown.map(blog => (
            <div key={blog.id} className='sample-blog'>
              <p className='blog-title'>{blog.title}</p>
              <p className='blog-body'>{blog.body.substring(0, 100) + '...'}</p>
              <Link to={`/blogs/${blog.id}`} className='blog-link'>
                View
              </Link>
              <hr />
            </div>
          ))}
        </SideBar>
        <BlogText>
          <SocialBar>
            <div className='claps-container'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z' />
              </svg>
              <p className='claps'>{blog.claps}</p>
            </div>
            <div className='social-icons'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path d='M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z' />
              </svg>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
              </svg>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                <path d='M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z' />
              </svg>
            </div>
          </SocialBar>
          {blog.body}
          <AdminBar>
            <Link to={`/blogs/${blog.id}/edit`}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                <path d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z' />
              </svg>
            </Link>
            <div onClick={() => confirm(blog.id)}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M381.6 80l-34-56.7C338.9 8.8 323.3 0 306.4 0H205.6c-16.9 0-32.5 8.8-41.2 23.3l-34 56.7H40c-13.3 0-24 10.7-24 24v12c0 6.6 5.4 12 12 12h16.4L76 468.4c2.3 24.7 23 43.6 47.8 43.6h264.5c24.8 0 45.5-18.9 47.8-43.6L467.6 128H484c6.6 0 12-5.4 12-12v-12c0-13.3-10.7-24-24-24h-90.4zm-176-32h100.8l19.2 32H186.4l19.2-32zm182.6 416H123.8L92.6 128h326.7l-31.1 336z' />
              </svg>
            </div>
          </AdminBar>
        </BlogText>
      </BlogBody>
    </BlogContainer>
  )
}

const AdminBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 50px 1em;
  &:hover > svg {
    fill: rgba(0, 0, 0, 0.7);
  }
  svg {
    width: 20px;
    cursor: pointer;
    height: 20px;
    fill: rgba(0, 0, 0, 0.4);
    margin-left: 10px;
  }
`

const SocialBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 1em;
  margin-bottom: 20px;

  .claps-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      fill: #2d3436;
    }
    .claps {
      font-size: 14px;
      border-radius: 5px;
      padding: 5px;
      color: #2d3436;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .social-icons {
    svg {
      width: 20px;
      height: 20px;
      fill: #2d3436;
      margin-left: 10px;
    }
  }
`

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px auto;
  justify-content: flex-start;
  max-width: 200px;

  @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    margin: 50px auto;
  }
  .sample-blog {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 1000px) {
      width: 50%;
    }
    &:first-child {
      padding: 0 1em 1em;

      @media (max-width: 1000px) {
        padding: 1em;
      }
    }
    .blog-title {
      font-weight: bold;
      font-family: 'Playfair Display', serif;
      margin-bottom: 10px;
      text-align: left;
    }
    .blog-body {
      font-size: 14px;
      font-family: 'Crimson Text', serif;
      margin-bottom: 10px;
      text-align: left;
    }
    .blog-link {
      text-decoration: none;
      width: 100%;
      font-size: 14px;
      text-align: right;
      margin: 0 auto 20px;
      padding: 5px 10px;
      color: #2d3436;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    hr {
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.2);
      border: none;
    }
  }
`

const BlogBody = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const BlogText = styled.p`
  white-space: pre-wrap;
  max-width: 800px;
  margin: 100px auto 100px;
  line-height: 1.58;
  font-size: 22px;
  font-family: 'Crimson Text', serif;
  font-weight: 300;
  @media(max-width: 1000px) {
    margin: 50px auto 100px;
    padding: 0 1em;
  }
`

const BlogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
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
  @media (max-width: 1000px) {
    padding: 1em;
    align-items: center;
    margin: 50px 0;
  }
`

const ImageContainer = styled.div`
  display: flex;
  width: 75%;
  img {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 400px;
  }
`

const BlogContainer = styled.div`
  padding: 82px 100px;
  @media (max-width: 1000px) {
    padding: 82px 0 0;
  }
`

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => blog.id === parseInt(props.match.params.id)),
    blogs: state.blogs.filter(
      blog => blog.id !== parseInt(props.match.params.id)
    )
  }
}

export default connect(mapStateToProps)(BlogShow)
