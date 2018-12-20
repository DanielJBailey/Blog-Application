import React from 'react'

// Set Up The Initial Context
const SearchContext = React.createContext()

// Create an exportable consumer that can be injected into components
export const SearchConsumer = SearchContext.Consumer

// Create the provider using a traditional React.Component class
class SearchProvider extends React.Component {
    
  state = {
    search: '',
    handleChange: (e) => this.handleChange(e),
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

export default SearchProvider
