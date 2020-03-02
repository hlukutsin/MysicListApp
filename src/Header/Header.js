import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

class Header extends React.Component {

  render() {

    return (
    <header>
      <SearchBar 
      findYear={this.props.findYear}
      findGenre={this.props.findGenre}
      findSinger={this.props.findSinger}
      />
      <div className='category'>
        <div className='singer'>Singer</div>
        <div className='song'>Song</div>
        <div className='genre'>Genre</div>
        <div className='year'>Year</div>
      </div>
    </header>
    )
  }
}

export default Header