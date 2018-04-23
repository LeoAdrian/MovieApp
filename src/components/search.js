import React, { Component } from 'react';
import SearchList from './search_list';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchVal : '',
      mockArr:['Geralt','Yennefer','Dendelion','Triss','Ciri','Emhyr','Vesemir','Crach'],
      result:[]
    }
  }

  searchProm = (t) => {
    return new Promise ((reject,resolve) => {
      console.log('Promise');

    })
  }

  getValue = (term) => {
    let arr = [];
    let ul = document.querySelector('.searchList');
    let li = document.createElement('LI');
    let mock = this.state.mockArr;
    let length = mock.length;

    this.setState({searchVal: term});

    mock.map (name => {
      if(term.toLowerCase().slice(0,1) === name.toLowerCase().slice(0,1)){
        arr.push(<li key = {name}>{name}</li>);
      }
      if(mock.indexOf(name) === length-1 && arr.length === 0 && term !== '') {
        arr.push(<li>Nothing matches your search</li>)
      }
    })


    this.state.result = arr;
  }

  render(){
    return (
      <div>
        <input type="text" value = {this.state.searchVal} placeholder = 'Search movie...' onChange = {(ev) => this.getValue(ev.target.value)}></input>
        <SearchList  className='searchList' result = {this.state.result} />
      </div>
    )
  }
}

export default Search;
