import React from 'react';
import {connect,} from 'react-redux';
import styled from 'styled-components';


class EditBlog extends React.Component {

    state = {
        title: "",
        body: ""
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        id = parseInt(id);
        let blog = this.props.blog.filter(blog => (
            blog.id === id
        ));
        blog = blog[0];
        this.setState({
            title: blog.title,
            body: blog.body
        })
    }

    resizeInputs = () => {
        let titleInput = document.querySelector('.title-input');
        if(titleInput.value === "") {
            titleInput.style.height = `75px`;
        } else {
            var height = titleInput.scrollHeight;
            titleInput.style.height = `${height}px`;
        }
        let bodyInput = document.querySelector('.body-input');
        if(bodyInput.value === "") {
            bodyInput.style.height = `300px`;
        } else {
            var bodyHeight = bodyInput.scrollHeight;
            bodyInput.style.height = `${bodyHeight}px`
        }
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventdefault();
    }

    render() {
        let { title, body } = this.state;
        return (
            <BlogContainer>
                <BlogForm onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Title"
                        name="title"
                        value={title}
                        required
                        className="title-input"
                        autoFocus
                        style={title === "" ? { caretColor: "#b2bec3" } : { caretColor: "#2d3436" }}
                        onChange={this.handleChange}
                    />
                    <textarea
                        placeholder="Tell your story..."
                        name="body"
                        value={body}
                        required
                        style={title === "" ? { caretColor: "#b2bec3" } : { caretColor: "#2d3436" }}
                        onChange={this.handleChange}
                        className="body-input"
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="submit"
                    />
                </BlogForm>
            </BlogContainer>
        )
    }
}

const BlogContainer = styled.div`
    padding-top: 100px;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 82px);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const BlogForm = styled.form`
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

`;


const mapStateToProps = (state) => {
    return { blog: state.blogs }
}

export default connect(mapStateToProps)(EditBlog);