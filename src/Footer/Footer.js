import React from 'react'

class Footer extends React.Component {



  render() {
    // console.log(this.props.state)
    let state = this.props.state
    let list = null

   if (state.active.btnFive) {
      list = state.paginationList.map((index) => {
      return (
        <a className='pgn' onClick={() => this.props.paginationBtnClick(index)}  key={index}>{index} </a> )}
        )
      } else if (state.active.btnTen ) {
        list = state.paginationList.map((index) => {
          return (
            <a className='pgn' onClick={() => this.props.paginationBtnClick(index)}  key={index}>{index} </a> )}
            )
      } else if (state.active.btnTvFive ) {
        list = state.paginationList.map((index) => {
          return (
            <a className='pgn' onClick={() => this.props.paginationBtnClick(index)}  key={index}>{index} </a> )}
            )
      } else if (state.active.btnFifty ) {
        list = state.paginationList.map((index) => {
          return (
            <a className='pgn' onClick={() => this.props.paginationBtnClick(index)}  key={index}>{index} </a> )}
            )
      }
if(this.props.state.singer||this.props.state.genre||this.props.state.year){
  return (
    <footer>
    </footer>
  )
} else {
    return (
    
    <footer>
      <div className='btnGrp'>
        <button className='btnFive' onClick={() => this.props.handleClick('btnFive')}>5</button>
        <button className='btnTen' onClick={() => this.props.handleClick('btnTen')}>10</button>
        <button className='btnTvFive' onClick={() => this.props.handleClick('btnTvFive')}>25</button>
        <button className='btnFifty' onClick={() => this.props.handleClick('btnFifty')}>50</button>
        <button className='all' onClick={() => this.props.handleClick('all')}>All</button>
      </div>
      <div className='pgnGrp'>
        { list }
      </div>
    </footer>
    )}
  }
}

export default Footer