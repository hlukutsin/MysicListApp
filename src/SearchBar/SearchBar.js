import React from 'react'

class SearchBar extends React.Component {

  render() {

    return (
    <div className='searchBar'>
      <div className='logo'>
      <p>MysicListApp</p>
      </div>
      <div>
        <input onChange={this.props.findSinger} placeholder='Singer'></input>
        <input onChange={this.props.findGenre} placeholder='Genre'></input>
        <input onChange={this.props.findYear} className='year' placeholder='Year'></input>
      </div>
    </div>
    )
  }
}

export default SearchBar