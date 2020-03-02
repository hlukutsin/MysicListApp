import React from 'react'
import list from './data-list/list'
import Table from './Table/Table'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list
    } 
  }

  render () { 
    return (
      <Table />
    )
  } 
}

  export default App;

























  
//     const useStyles1 = makeStyles(theme => ({
//       root: {
//         flexShrink: 0,
//         marginLeft: theme.spacing(2.5),
//       },
//     }));


//     console.log(this.state)
//     return (
//     <Paper className={classes.paper}>
//     <TableContainer component={Paper}> 
//       <Table   aria-label="simple table">
//         <TableHead style={{background: 'rgba(0,0,0, .2)'}}>
//           <TableRow>
//             <TableCell>Singer</TableCell>
//             <TableCell align="right">Song</TableCell>
//             <TableCell align="right">Genre</TableCell>
//             <TableCell align="right">Year</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {this.state.list.map((row,index) => (
//             <TableRow key={index}>
//               <TableCell component="th" scope="row">
//                 {row.singer}
//               </TableCell>
//               <TableCell align="right">{row.song}</TableCell>
//               <TableCell align="right">{row.genre}</TableCell>
//               <TableCell align="right">{row.year}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow> 
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: { 'aria-label': 'rows per page' },
//                 native: true,
//               }}
//               onChangePage={handleChangePage}
//               onChangeRowsPerPage={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//             <Pagination></Pagination>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//     <TablePagination
//     rowsPerPageOptions={[5, 10, 25]}
//     component="div"
//     count={rows.length}
//     rowsPerPage={rowsPerPage}
//     page={page}
//     onChangePage={handleChangePage}
//     onChangeRowsPerPage={handleChangeRowsPerPage}
//   />
//   </Paper>
//    )
//   }
// }


