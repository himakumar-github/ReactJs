import React, { Component } from 'react';
class MapComponentsTable extends Component {
    state = {  
        emp:[
            {"ID":1,"NAME":"Himakumar","DEPT":"Engineer","SALARY":15000},
            {"ID":2,"NAME":"Rajkumar","DEPT":"Engineer","SALARY":15000},
            {"ID":3,"NAME":"Viplav","DEPT":"Engineer","SALARY":15000},
            {"ID":4,"NAME":"Sathish","DEPT":"Engineer","SALARY":15000}
        ]
    } 
    render() { 
        return (
            <table class="table table-dark table hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">SALARY</th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.emp.map(
            a=><tr>
                <td>{a.ID}</td>
                <td>{a.NAME}</td>
                <td>{a.DEPT}</td>
                <td>{a.SALARY}</td>
              </tr>
        )
    }
  </tbody>
</table>
        );
    }
}
 
export default MapComponentsTable;