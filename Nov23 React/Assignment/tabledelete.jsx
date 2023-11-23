import React, { Component } from 'react';
import movi from '../Services/tableData'; 
class Assignment extends Component {
    state = { 
        movies:movi
     } 
     deleteMovie=movie=>{
        const filterMovies=this.state.movies.filter(eachmovie=>eachmovie.title!=movie.title)
        this.setState({movies:filterMovies})
     }
    render() { 
        return (<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.movies.map(
        movie=><tr>
        <th scope="row">{movie.title}</th>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button className='badge bg-warning'onClick={()=>this.deleteMovie(movie)}>Delete</button></td> 
      </tr>  
    )}
  </tbody>
</table>
)}
}
export default Assignment;