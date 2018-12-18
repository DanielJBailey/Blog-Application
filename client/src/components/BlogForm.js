import React from 'react';
import styled from 'styled-components';
import { connect, } from 'react-redux';


class BlogForm extends React.Component {
    initialState = {
        title: "",
        body: "",
        claps: 0
    }
    state = { ...this.initialState }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
        this.resizeInputs();
    }

    handleSubmit = (e) => {
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

    render() {
        let { title, body } = this.state;
        return (
            <BlogContainer>
                <Form onSubmit={this.handleSubmit}>
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
                </Form>
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

`;


const mapStateToProps = (state) => {
    return { id: state.nextId }
  }

export default connect(mapStateToProps)(BlogForm);