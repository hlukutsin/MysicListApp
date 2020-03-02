
import React from 'react'
import Header from '../Header/Header'
import MusicList from '../MusicList/MusicList'
import Footer from '../Footer/Footer'
import list from '../data-list/list'

class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list,
      active: {
        btnFive: false,
        btnTen: false,
        btnTvFive: false,
        btnFifty: false,
        all: true
      },
      paginationList: [],
      year: '',
      genre: '',
      singer: '',
    } 
  }

  findSinger(value){
    let state = this.state
    state.singer = value
    return this.setState({
    state: state
    })
  }

  findGenre(value){
    let state = this.state
    state.genre = value
    return this.setState({
    state: state
    })
  }

  findYear(value){
    let state = this.state
    state.year = value
    return this.setState({
    state: state
    })
  }

  handleClick(className) {

    let paginationList = [];

      switch(className) {
        case 'btnFive':
           let countFive = Math.ceil(this.state.list.length/5);
          for(let i=0; i<countFive; i++) {
            paginationList.push( [i + 1, false])
          }
          paginationList[0][1] = true
          return this.setState({
            active: {
              btnFive: true,
              btnTen: false,
              btnTvFive: false,
              btnFifty: false,
              all: false
            },
             paginationList: paginationList
          })
          case 'btnTen':
            let countTen = Math.ceil(this.state.list.length/10);
          for(let i=0; i<countTen; i++) {
            paginationList.push([i + 1, false])
          }
          paginationList[0][1] = true
            return this.setState({
              active: {
                btnFive: false,
                btnTen: true,
                btnTvFive: false,
                btnFifty: false,
                all: false
              },
              paginationList: paginationList
            }) 
            case 'btnTvFive':
              let countTvFive = Math.ceil(this.state.list.length/25);
          for(let i=0; i<countTvFive; i++) {
            paginationList.push([i + 1, false])
          }
          paginationList[0][1] = true
              return this.setState({
                active: {
                  btnFive: false,
                  btnTen: false,
                  btnTvFive: true,
                  btnFifty: false,
                  all: false
                },
                paginationList: paginationList
              }) 
              case 'btnFifty':
                let countFifty = Math.ceil(this.state.list.length/50);
                for(let i=0; i<countFifty; i++) {
                  paginationList.push([i + 1, false])
                }
                paginationList[0][1] = true
              return this.setState({
                active: {
                  btnFive: false,
                  btnTen: false,
                  btnTvFive: false,
                  btnFifty: true,
                  all: false
                },
                paginationList: paginationList
              })
              case 'all':
              return this.setState({
                active: {
                  btnFive: false,
                  btnTen: false,
                  btnTvFive: false,
                  btnFifty: false,
                  all: true
                },
                paginationList: []
              })
              default:
                return this.state
        } 
      }
  paginationBtnClick(key) {

        let paginationList = this.state.paginationList
        let newPaginationList =[]
        for(let i=0; i<paginationList.length; i++) {
          newPaginationList.push([i + 1, false])
        }
        let newkey = key[0] - 1
        newPaginationList[newkey][1] = true
        return this.setState({
          paginationList: newPaginationList
        })
      }       
    
  render() {
    
    return (
      <div className='table'>
        <Header 
          findYear={event => this.findYear(event.target.value)}
          findGenre ={event => this.findGenre(event.target.value)}
          findSinger ={event => this.findSinger(event.target.value)}
        />
        <MusicList 
          list={this.state.list}
          state={this.state} 
          className='musicList'
        />
        <Footer
          handleClick={(btn) => this.handleClick(btn)}
          paginationBtnClick={(key) => this.paginationBtnClick(key)}
          state={this.state} 
        />
      </div>
    ) 
  }
}

export default Table