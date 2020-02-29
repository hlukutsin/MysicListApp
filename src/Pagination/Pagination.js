import React from 'react'
import { Button } from '@material-ui/core'

class Pagination extends React.Component {


  render() {

    return (
      <>
        <Button>5</Button>
        <Button>10</Button>
        <Button>20</Button>
        <Button>50</Button>
        <Button>All</Button>

      </>
    )
  }
}

export default Pagination