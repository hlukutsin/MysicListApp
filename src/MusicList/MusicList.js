import React from 'react'

import Song from '../Song/Song'

class MusicList extends React.Component {

  render() {
    let indexArr = this.props.state.paginationList;
    let result = null;

    if (this.props.state.singer) {  
      result =  this.props.state.list.map((song, index) => {
        let singerState =this.props.state.list[index].singer
        let singerFind = this.props.state.singer
        if (singerState.includes(singerFind)){
        return <Song 
         key={index}
         singer = {song.singer}
         song = {song.song}
         genre = {song.genre}
         year = {song.year}
       />
      } 
    }) 
  } else if (this.props.state.genre) {  
      result =  this.props.state.list.map((song, index) => {
        let genreState =this.props.state.list[index].genre
        let genreFind = this.props.state.genre
        if (genreState.includes(genreFind)){
        return <Song 
         key={index}
         singer = {song.singer}
         song = {song.song}
         genre = {song.genre}
         year = {song.year}
       />
      } 
    }) 
  } else if (this.props.state.year) {  
      result =  this.props.state.list.map((song, index) => {
        let yearState = String(this.props.state.list[index].year)
        let yearFind = String(this.props.state.year)
        if (yearState.includes(yearFind)){
        return <Song 
         key={index}
         singer = {song.singer}
         song = {song.song}
         genre = {song.genre}
         year = {song.year}
       />
      } 
    }) 
  } else if (this.props.state.active.all) {
    result =  this.props.state.list.map((song, index) => {
         return <Song 
          key={index}
          singer = {song.singer}
          song = {song.song}
          genre = {song.genre}
          year = {song.year}
        />
      })
  } else if (this.props.state.active.btnFive) {
      for (let i=0; i < indexArr.length;i++){
        if (indexArr[i][1]) {
        let newList = this.props.state.list.slice(i*5, (i*5)+5)
          result =  newList.map((song, index) => {
            return <Song 
             key={index}
             singer = {song.singer}
             song = {song.song}
             genre = {song.genre}
             year = {song.year}
           />
         })
        }
      }
  } else if (this.props.state.active.btnTen) {
      for (let i=0; i < indexArr.length;i++){
        if (indexArr[i][1]) {
        let newList = this.props.state.list.slice(i*10, (i*10)+10)
          result =  newList.map((song, index) => {
            return <Song 
             key={index}
             singer = {song.singer}
             song = {song.song}
             genre = {song.genre}
             year = {song.year}
           />
         })
        }
      }
  } else if (this.props.state.active.btnTvFive) {
      for (let i=0; i < indexArr.length;i++){
        if (indexArr[i][1]) {
        let newList = this.props.state.list.slice(i*25, (i*25)+25)
          result =  newList.map((song, index) => {
            return <Song 
             key={index}
             singer = {song.singer}
             song = {song.song}
             genre = {song.genre}
             year = {song.year}
           />
         })
        }
      }
  } else if (this.props.state.active.btnFifty) {
      for (let i=0; i < indexArr.length;i++){
        if (indexArr[i][1]) {
        let newList = this.props.state.list.slice(i*50, (i*50)+50)
          result =  newList.map((song, index) => {
            return <Song 
             key={index}
             singer = {song.singer}
             song = {song.song}
             genre = {song.genre}
             year = {song.year}
           />
         })
        }
      }
     }
    
    return (
      <>
        {result}
      </>
    )}
  }

export default MusicList