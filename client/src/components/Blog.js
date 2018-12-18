import React from 'react';
import styled from 'styled-components';

const Blog = ({id, title, body}) => (
    <BlogPost>
        <img src="https://picsum.photos/1000/400/" alt=""/>
        <BlogContent>
            <h1 className="title">{title}</h1>
            <hr />
            <p className="body">{body.substring(0, 1000) + "..."}<button>Read More</button></p>   
        </BlogContent>
        
    </BlogPost>
)


const BlogPost = styled.div`
    width: 100%;
    margin: 1em 0;
    box-shadow: 4px 10px 20px rgba(0,0,0,0.1);
    border-radius: 10px;

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
        padding: 5px 10px;
        margin-left: 10px;
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
`;


const BlogContent = styled.div`
    padding: 0 2em 2em;
`;

export default Blog;