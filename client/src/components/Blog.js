import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

class Blog extends React.Component {

    state = {
        claps: undefined,
        clap: true
    }

    componentDidMount() {
        let {claps} = this.props;
        this.setState({
            claps: claps
        })
    }

    handleClick = () => {
        let {clap, claps} = this.state;
        console.log(clap, claps);
        if(clap) {
            this.setState({
                claps: claps + 1,
                clap: !clap
            })
        }
    }

    render() {
        const {id, title, body } = this.props;
        const {claps, clap} = this.state;
        return (
            <BlogPost>
                <img src='https://picsum.photos/1000/400/?random' alt='' />
                <BlogContent>
                <h1 className='title'>{title}</h1>
                <hr />
                <p className='body'>{body.substring(0, 500) + '...'}</p>
                <BlogFooter>
                    <Link to={`/blogs/${id}`}>
                        <button>Read More</button>
                    </Link>
                    <UpVoteContainer>
                    <UpVote onClick={this.handleClick}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style={clap ? null : {fill: "#00b894"}}>
                        <path d='M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z' />
                        </svg>
                    </UpVote>
                    <p className='claps'>{claps}</p>
                    </UpVoteContainer>
                </BlogFooter>
                </BlogContent>
            </BlogPost>
        )
    }
}

const BlogPost = styled.div`
  width: 100%;
  margin: 1em 0;
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

export default Blog
