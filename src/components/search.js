import React, { Component } from 'react'
import SearchList from './search_list'

const getElement = ({ capitalized, text }) => (
  <li>
    <b>{capitalized}</b>
    {text}
  </li>
)

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      mockArr: [
        'Geralt',
        'Yennefer',
        'Dendelion',
        'Triss',
        'Ciri',
        'Emhyr',
        'Vesemir',
        'Crach',
        'Grenver'
      ],
      results: []
    }
  }

  searchProm = t => {
    return new Promise((reject, resolve) => {
      console.log('Promise')
    })
  }

  handleInputChange = ev => {
    return new Promise((resolve, reject) => {
      resolve(this.setState({ query: ev.target.value }))
    })
  }

  displayQuery = ev => {
    // Change the state whenever the user inputs something
    // after that start finding the match
    this.handleInputChange(ev).then(() => {
      let mock = this.state.mockArr
      let query = this.state.query
      let b = document.createElement('B')
      let li = document.createElement('LI')
      // Matches are pushed to this array
      let filteredArr = []
      // Create a reg-expression that takes the input for comparison
      let regex = new RegExp(query, 'i')

      mock.filter(name => {
        if (name.search(regex) === 0 && query.length !== 0) {
          let capitalizeQ = query.replace(/\b\w/g, l => l.toUpperCase())
          let remainingWord = name.split(regex)[1]

          filteredArr.push(
            getElement({ capitalized: capitalizeQ, text: remainingWord })
          )
        }
      })
      this.setState({ results: filteredArr })
    })
    // .then((filteredArr) => this.setState({results:filteredArr}));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchVal}
          placeholder="Search movie..."
          onChange={this.displayQuery}
        />
        <SearchList className="searchList" results={this.state.results} />
      </div>
    )
  }
}

export default Search
