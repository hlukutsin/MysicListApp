import React from 'react'

class Song extends React.Component {

  render() {
    return (
    <div className='songClass'>
      <div className='singerList'>{this.props.singer}</div>
        <div className='songList'>{this.props.song}</div>
        <div className='genreList'>{this.props.genre}</div>
        <div className='yearList'>{this.props.year}</div>
    </div>
    )
  }
}

export default Song