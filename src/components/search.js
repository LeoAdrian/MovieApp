import React, { Component } from 'react';
import SearchList from './search_list';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchVal : '',
      mockArr:['Geralt','Yennefer','Dendelion','Triss','Ciri','Emhyr','Vesemir','Crach'],
      results:[]
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
    let coun = 0;

    this.setState({searchVal: term});

    // .then(() => {
    //   this.state.mockArr.map(name => {
    //     if(name.toLowerCase().slice(0,1) === name.toLowerCase().slice(0,1)){
    //       coun ++;
    //     }
    //   })
    // })
    // .then(() => {
    //   console.log(coun);
    //   coun = 0;
    // })
  }

  render(){
    return (
      <div>
        <input type="text" value = {this.state.searchVal} placeholder = 'Search movie...' onChange = {(ev) => this.getValue(ev.target.value)}></input>
        <ul className='searchList'><SearchList /></ul>
      </div>
    )
  }
}

export default Search;
