import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SearchConsumer } from '../providers/SearchProvider'

const NavBar = () => {
  return (
    <SearchConsumer>
      {value => (
        <Nav>
          <Link to='/' className='logo'>
            D
          </Link>
          <Search
            placeholder='Search blogs...'
            value={value.search}
            name='search'
            onChange={value.handleChange}
          />
          <Link to={'/blogs/new'}>New Post</Link>
        </Nav>
      )}
    </SearchConsumer>
  )
}

const Search = styled.input`
  width: 250px;
  height: 42px;
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  caret-color: rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.03);
  margin-right: 10px;
  &::placeholder {
    padding-left: 5px;
    color: rgba(0, 0, 0, 0.3);
  }
`

const Nav = styled.ul`
  position: fixed;
  top: 0;
  width: 100%;
  list-style: none;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 100px;
  z-index: 99;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1em;
  }

  a {
    text-decoration: none;
    padding: 10px 15px;
    background-color: transparent;
    border: 2px solid #2d3436;
    margin: 0 5px;
    color: #2d3436;
    font-size: 14px;

    &:first-child {
      margin-right: auto;
      background-color: #00b894;
      cursor: pointer;
      width: 50px;
      height: 50px;
      margin-right: auto;
      font-size: 28px;
      color: white;
      border: none;
      padding: 0;
      width: 50px;
      font-family: 'Merriweather', serif;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    &:hover {
      background-color: #2d3436;
      color: white;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export default NavBar
